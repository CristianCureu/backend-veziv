import { Module } from '@nestjs/common';
import { ShowcasedWorksModule } from './showcased-works/showcased-works.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';

@Module({
  imports: [ShowcasedWorksModule, MongooseModule.forRoot(config.mongoURI)],
})
export class AppModule {}
