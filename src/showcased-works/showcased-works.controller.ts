import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
  UseInterceptors,
  UploadedFile,
  Res,
} from '@nestjs/common';
import { CreateShowcasedWorkDto } from './dto/create-showcased-work.dto';
import { ShowcasedWorksService } from './showcased-works.service';
import { ShowcasedWork } from './schemas/showcased-work.schema';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { randomUUID } from 'crypto';
import Path = require('path');
import { join } from 'path';

const storage = {
  storage: diskStorage({
    destination: 'uploads',
    filename: (req, file, callback) => {
      const filename: string = randomUUID();
      const extension: string = Path.parse(file.originalname).ext;
      callback(null, `${filename}${extension}`);
    },
  }),
};

@Controller('showcased-works')
export class ShowcasedWorksController {
  constructor(private readonly showcasedWorksService: ShowcasedWorksService) {}

  @Get()
  findVisible(): Promise<ShowcasedWork[]> {
    return this.showcasedWorksService.findVisible();
  }

  @Get('/hidden')
  findHidden(): Promise<ShowcasedWork[]> {
    return this.showcasedWorksService.findHidden();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShowcasedWork> {
    return this.showcasedWorksService.findById(id);
  }

  @Get('/photo/:imagename')
  findPhoto(
    @Param('imagename') imagename: string,
    @Res() res,
  ): Promise<ShowcasedWork> {
    return res.sendFile(join(process.cwd(), 'uploads/' + imagename));
  }

  @Post()
  @UseInterceptors(FileInterceptor('photo', storage))
  create(
    @UploadedFile() file: Express.Multer.File,
    @Body() createShowcaseWorkDto: CreateShowcasedWorkDto,
  ): Promise<ShowcasedWork> {
    const createShowcasedWork = {
      ...createShowcaseWorkDto,
      photo: file?.filename,
    };
    console.log(createShowcasedWork);
    return this.showcasedWorksService.create(createShowcasedWork);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ShowcasedWork> {
    return this.showcasedWorksService.delete(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('photo', storage))
  update(
    @UploadedFile() file: Express.Multer.File,
    @Body() updateShowcaseWorkDto: CreateShowcasedWorkDto,
    @Param('id') id: string,
  ): Promise<ShowcasedWork> {
    const updateShowcaseWork = {
      ...updateShowcaseWorkDto,
      photo: file?.filename,
    };
    return this.showcasedWorksService.update(id, updateShowcaseWork);
  }
}
