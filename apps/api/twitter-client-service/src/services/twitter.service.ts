import { Injectable, Logger } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { AxiosError } from 'axios';
import { firstValueFrom } from 'rxjs';
import { Tweet, TweetResponse } from '../interfaces/tweet-response';
import { TweetLight } from '../interfaces/tweet-light';

@Injectable()
export class TwitterService {
    constructor(private readonly httpService: HttpService) {}

    async getRelatedTweets(query: string): Promise<Tweet[]> {
        try {
            const tokenStr = process.env.TOKEN;
            const queryStr = `${query} -is:retweet`;
            Logger.log({tokenStr});
            const baseUrl = 'https://api.twitter.com/2/tweets/search/recent';
            const url = `${baseUrl}?query=${queryStr}&tweet.fields=public_metrics`;
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

    formatTweetResponse(tweets: Tweet[]): TweetLight[] {
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
}
