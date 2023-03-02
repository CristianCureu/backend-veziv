import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShowcasedWorksModule } from './showcased-works/showcased-works.module';
import { MongooseModule } from '@nestjs/mongoose';
import config from './config/keys';
import { MulterModule } from '@nestjs/platform-express/multer';

@Module({
  imports: [
    ShowcasedWorksModule,
    MongooseModule.forRoot(config.mongoURI),
    MulterModule.register({ dest: './uploads' }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
