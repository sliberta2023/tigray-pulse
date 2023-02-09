import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { HttpModule } from '@nestjs/axios';
import { MongooseModule } from '@nestjs/mongoose';
import { ServeStaticModule } from '@nestjs/serve-static';
import { TwitterClientController } from '../controllers/twitter-client/twitter-client.controller';
import { TwitterService } from '../services/twitter.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TweetSchema } from '../mongodb/schemas/tweet-schema';
import { TwitterRepository } from './repositories/twitter.respository';

const getDbURL = async (configService: ConfigService) => ({
    uri: configService.get('DB_URL'),
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

@Module({
  imports: [
    ConfigModule.forRoot(),
    HttpModule,
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: getDbURL,
      inject: [ConfigService]
    }),
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
