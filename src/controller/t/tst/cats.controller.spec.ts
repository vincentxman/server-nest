import { Test, TestingModule } from '@nestjs/testing';
import { TstController } from './tst.controller';

describe('Cats Controller', () => {
  let controller: TstController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TstController],
    }).compile();

    controller = module.get<TstController>(TstController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
