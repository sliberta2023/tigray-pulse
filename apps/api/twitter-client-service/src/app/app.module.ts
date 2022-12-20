import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { TwitterClientController } from '../controllers/twitter-client/twitter-client.controller';
import { TwitterService } from '../services/twitter.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    HttpModule
  ],
  controllers: [AppController, TwitterClientController],
  providers: [AppService, TwitterService],
})
export class AppModule {}
