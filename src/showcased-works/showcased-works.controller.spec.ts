import { Test, TestingModule } from '@nestjs/testing';
import { ShowcasedWorksController } from './showcased-works.controller';

describe('ShowcasedWorksController', () => {
  let controller: ShowcasedWorksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShowcasedWorksController],
    }).compile();

    controller = module.get<ShowcasedWorksController>(ShowcasedWorksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
