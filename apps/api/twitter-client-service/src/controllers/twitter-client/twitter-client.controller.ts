import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { TwitterService } from '../../services/twitter.service';

@Controller('twitter')
export class TwitterClientController {
    constructor(private readonly twitterService: TwitterService) {}

    @Get('search')
    async getTweetsByContent(@Query('q') query: string) {
        try {
            return await this.twitterService.getRelatedTweets(query);
        } catch(error) {
            return 'There is some error in fetching tweets.'
        }
    }

    @Get('search/:id/details')
    getTweetById(@Param('id') id: string) {
        console.log({id});
    }
}