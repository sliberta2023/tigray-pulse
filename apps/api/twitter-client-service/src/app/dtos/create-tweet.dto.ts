import { IsNotEmpty, IsNumber, IsString}  from 'class-validator';
import { Date } from 'mongoose';

export class CreateTweetDto {
    @IsNotEmpty()
    readonly createdAt: Date;

    @IsNotEmpty()
    @IsString()
    readonly id: string;

    @IsNotEmpty()
    @IsString()
    readonly text: string;

    @IsNotEmpty()
    @IsNumber()
    readonly likeCount: number;

    @IsNotEmpty()
    @IsNumber()
    readonly replyCount: number;

    @IsNotEmpty()
    @IsNumber()
    readonly retweetCount: number;

    @IsNotEmpty()
    @IsNumber()
    readonly quoteCount: number;
}
