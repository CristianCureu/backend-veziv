import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { CreateShowcasedWorkDto } from './dto/create-showcased-work.dto';
import { ShowcasedWorksService } from './showcased-works.service';
import { ShowcasedWork } from './schemas/showcased-work.schema';

@Controller('showcased-works')
export class ShowcasedWorksController {
  constructor(private readonly showcasedWorksService: ShowcasedWorksService) {}

  @Get()
  findAll(): Promise<ShowcasedWork[]> {
    return this.showcasedWorksService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<ShowcasedWork> {
    return this.showcasedWorksService.findById(id);
  }

  @Post()
  create(
    @Body() createShowcasedWorkDto: CreateShowcasedWorkDto,
  ): Promise<ShowcasedWork> {
    return this.showcasedWorksService.create(createShowcasedWorkDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string): Promise<ShowcasedWork> {
    return this.showcasedWorksService.delete(id);
  }

  @Put(':id')
  update(
    @Body() updateShowcaseWorkDto: CreateShowcasedWorkDto,
    @Param('id') id: string,
  ): Promise<ShowcasedWork> {
    return this.showcasedWorksService.update(id, updateShowcaseWorkDto);
  }
}
