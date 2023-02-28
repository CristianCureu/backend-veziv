import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ShowcasedWorksController } from './showcased-works.controller';
import { ShowcasedWorksService } from './showcased-works.service';
import {
  ShowcasedWork,
  ShowcasedWorkSchema,
} from './schemas/showcased-work.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: ShowcasedWork.name, schema: ShowcasedWorkSchema },
    ]),
  ],
  controllers: [ShowcasedWorksController],
  providers: [ShowcasedWorksService],
})
export class ShowcasedWorksModule {}
