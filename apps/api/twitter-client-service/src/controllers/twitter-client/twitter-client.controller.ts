import { Controller, Get, Logger, Param, Query } from '@nestjs/common';
import { TwitterService } from '../../services/twitter.service';

@Controller('twitter')
export class TwitterClientController {
    constructor(private readonly twitterService: TwitterService) {}

    @Get('search')
    async searchDB(@Query('q') query: string) {
        try {
            const response = await this.twitterService.getTweetsFromDB(query, 20);
            return response;
        } catch(error) {
            Logger.error(error?.message);
            return 'There is some error in fetching tweets.'
        }
    }

    @Get('fetch')
    async fetchTweetsByContent(@Query('q') query: string) {
        try {
            const response = await this.twitterService.getTweetsFromTwitter(query);
            this.twitterService.saveTweetsToDB(response);
            return response;
        } catch(error) {
            Logger.error(error?.message);
            return 'There is some error in fetching tweets.'
        }
    }

    @Get('search/:id/details')
    getTweetById(@Param('id') id: string) {
        console.log({id});
    }
}
