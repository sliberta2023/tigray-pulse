import { IsNotEmpty, IsNumber, IsString}  from 'class-validator';

export class CreateTweetDto {
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
