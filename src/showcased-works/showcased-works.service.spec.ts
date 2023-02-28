import { Test, TestingModule } from '@nestjs/testing';
import { ShowcasedWorksService } from './showcased-works.service';

describe('ShowcasedWorksService', () => {
  let service: ShowcasedWorksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShowcasedWorksService],
    }).compile();

    service = module.get<ShowcasedWorksService>(ShowcasedWorksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
