import { Date } from "mongoose";

export interface TweetResponse {
    data: Tweet[];
}

export interface Tweet {
    created_at: Date;
    id: string;
    text: string;
    public_metrics?: TweetPublicMetrics;
}

export interface TweetPublicMetrics {
    like_count: number;
    reply_count: number;
    retweet_count: number;
    quote_count: number;
}
