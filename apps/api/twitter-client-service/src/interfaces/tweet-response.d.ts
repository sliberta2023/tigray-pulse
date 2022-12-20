export interface TweetResponse {
    data: Tweet[];
}

export interface Tweet {
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
