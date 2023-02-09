import { Injectable, NotFoundException } from "@nestjs/common";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { TweetDocument } from "../../mongodb/schemas/tweet-schema";
import { CreateTweetDto } from "../dtos/create-tweet.dto";
import { UpdateTweetDto } from "../dtos/update-tweet.dto";

@Injectable()
export class TwitterRepository {

    constructor(@InjectModel('Tweet') private readonly tweetModel: Model<TweetDocument>) {}
    
    async findAll(): Promise<TweetDocument[]> {
        return this.tweetModel.find();
    }

    /**
     * Search among today's tweets, otherwise the retured tweets would be a lot
     * @param searchText 
     * @param limit 
     * @returns 
     */
    async searchByText(searchText: string, limit = 20): Promise<TweetDocument[]> {
        const startOfTheDay = new Date().setUTCHours(0, 0, 0, 0);
        return this.tweetModel.find({
            text: { $regex: searchText || "", $options: 'i'}
        })
        .where({createdAt: {$gte: startOfTheDay}})
        .sort({likeCount: -1, retweetCount: -1, replyCount: -1})
        .limit(limit);
    }

    async createTweet(dto: CreateTweetDto): Promise<TweetDocument> {
        const newTweet = await new this.tweetModel(dto);
        return newTweet.save();
    }

    async updateTweet(id: string, dto: UpdateTweetDto): Promise<TweetDocument> {
        const existingTweet = await this.tweetModel.findByIdAndUpdate(id, dto, {new: true});

        if (!existingTweet) {
            throw new NotFoundException(`Tweet with id: ${id} not found.`);
        }

        return existingTweet;
    }

    async getTweet(id: string): Promise<TweetDocument> {
        const tweet = await this.tweetModel.findById(id).exec();

        if (!tweet) {
            throw new NotFoundException(`Tweet with id: ${id} not found.`);            
        }

        return tweet;
    }

    async deleteTweet(id: string): Promise<TweetDocument> {
        const deletedTweet = await this.tweetModel.findByIdAndDelete(id);

        if (!deletedTweet) {
            throw new NotFoundException(`Tweet with id: ${id} not found.`);            
        }

        return deletedTweet;
    }


}
