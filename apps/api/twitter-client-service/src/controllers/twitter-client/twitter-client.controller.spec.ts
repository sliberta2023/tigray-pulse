import { HttpModule, HttpService } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { TwitterRepository } from '../../app/repositories/twitter.respository';
import { TwitterService } from '../../services/twitter.service';
import { TwitterClientController } from './twitter-client.controller';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';

describe('TwitterClientController', () => {
  let controller: TwitterClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      controllers: [TwitterClientController],
      providers: [
        TwitterService,
        TwitterRepository,
        {
          provide: getModelToken('Tweet'),
          useValue: Model
        }
      ]
    }).compile();

    controller = module.get<TwitterClientController>(TwitterClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
