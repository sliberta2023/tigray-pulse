import { HttpModule } from '@nestjs/axios';
import { Test, TestingModule } from '@nestjs/testing';
import { Model } from 'mongoose';
import { getModelToken } from '@nestjs/mongoose';
import { TwitterRepository } from './twitter.respository';

describe('TwitterRepository', () => {
  let service: TwitterRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [HttpModule],
      providers: [
        TwitterRepository,
        {
          provide: getModelToken('Tweet'),
          useValue: Model
        }
      ]
    }).compile();

    service = module.get<TwitterRepository>(TwitterRepository);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
