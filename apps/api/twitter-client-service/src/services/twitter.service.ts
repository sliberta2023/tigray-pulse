import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Tweet, TweetResponse } from '../interfaces/tweet-response';
import { TweetLight } from '../interfaces/tweet-light';
import { TwitterRepository } from '../app/repositories/twitter.respository';
import { CreateTweetDto } from '../app/dtos/create-tweet.dto';

@Injectable()
export class TwitterService {
    
    constructor(private readonly httpService: HttpService,
        private readonly twitterRepo: TwitterRepository) {}

    async getRelatedTweets(searchTerm: string, limit: number = 100): Promise<CreateTweetDto[]> {
        try {
            const tokenStr = process.env.TOKEN;
            const queryStr = `${searchTerm} -is:retweet`;
            Logger.log({tokenStr});
            const baseUrl = 'https://api.twitter.com/2/tweets/search/recent';
            const url = `${baseUrl}?query=${queryStr}&tweet.fields=public_metrics&max_results=${limit}`;
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${tokenStr}`
            };
            const tweetResponse: TweetResponse = (await firstValueFrom(this.httpService.get<TweetResponse>(url, { headers })))?.data as any;
            return this.formatTweetResponse(tweetResponse?.data) || [];
        } catch (error: any | AxiosError) {
            throw error?.toJSON();
        }

    }

    formatTweetResponse(tweets: Tweet[]): CreateTweetDto[] {
        return tweets?.map(tweet => {
            return {
                id: tweet.id,
                text: tweet.text,
                likeCount: tweet.public_metrics.like_count,
                replyCount: tweet.public_metrics.reply_count,
                retweetCount: tweet.public_metrics.retweet_count,
                quoteCount: tweet.public_metrics.quote_count
            }
        });
    }

    /**
     * Save unique tweets
     * TODO: [update if it already exists by taking the values of the most recent one]
     * @param tweets 
     */
    saveTweetsToDB(tweets: CreateTweetDto[]): void {
        const uniqueIds = {};
        if (!tweets || tweets.length < 1) {
            return;
        }

        tweets.forEach(tweet => {
            if (!uniqueIds[tweet.id]) {
                this.twitterRepo.createTweet(tweet);
            }
        });
    }
}
