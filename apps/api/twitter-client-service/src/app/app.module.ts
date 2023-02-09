import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TwitterClientController } from '../controllers/twitter-client/twitter-client.controller';
import { TwitterService } from '../services/twitter.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetSchema } from '../mongodb/schemas/tweet-schema';
import { TwitterRepository } from './repositories/twitter.respository';

@Module({
  imports: [
    HttpModule,
    MongooseModule.forRoot('mongodb://localhost:27017/twitter'),
    MongooseModule.forFeature([{name: 'Tweet', schema: TweetSchema}]),
    ServeStaticModule.forRoot({
      rootPath: __dirname,
      exclude: ['/api*']
    })
  ],
  controllers: [AppController, TwitterClientController],
  providers: [AppService, TwitterService, TwitterRepository],
})
export class AppModule {}
