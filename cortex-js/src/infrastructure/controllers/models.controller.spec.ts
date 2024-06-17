import { Test, TestingModule } from '@nestjs/testing';
import { ModelsController } from './models.controller';
import { ModelsUsecases } from '@/usecases/models/models.usecases';
import { DatabaseModule } from '../database/database.module';
import { ExtensionModule } from '../repositories/extensions/extension.module';
import { FileManagerModule } from '@/infrastructure/services/file-manager/file-manager.module';
import { HttpModule } from '@nestjs/axios';
import { CortexUsecases } from '@/usecases/cortex/cortex.usecases';
import { ModelRepositoryModule } from '../repositories/models/model.module';
import { DownloadManagerModule } from '@/download-manager/download-manager.module';
import { EventEmitterModule } from '@nestjs/event-emitter';

describe('ModelsController', () => {
  let controller: ModelsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [
        EventEmitterModule.forRoot(),
        DatabaseModule,
        ExtensionModule,
        FileManagerModule,
        HttpModule,
        DownloadManagerModule,
        ModelRepositoryModule,
        DownloadManagerModule,
        EventEmitterModule.forRoot(),
      ],
      controllers: [ModelsController],
      providers: [ModelsUsecases, CortexUsecases],
      exports: [ModelsUsecases],
    }).compile();

    controller = module.get<ModelsController>(ModelsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
