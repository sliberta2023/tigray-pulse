import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TweetDocument = HydratedDocument<Tweet>;

@Schema()
export class Tweet {
    @Prop()
    id: String;

    @Prop()
    text: String;

    @Prop()
    likeCount: Number;

    @Prop()
    replyCount: Number;

    @Prop()
    retweetCount: Number;

    @Prop()
    quoteCount: Number;
}

export const TweetSchema = SchemaFactory.createForClass(Tweet);
