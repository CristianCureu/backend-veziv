import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import {
  ShowcasedWork,
  ShowcasedWorkDocument,
} from './schemas/showcased-work.schema';

@Injectable()
export class ShowcasedWorksService {
  constructor(
    @InjectModel(ShowcasedWork.name)
    private showcasedWorkModel: Model<ShowcasedWorkDocument>,
  ) {}

  async findVisible(): Promise<ShowcasedWork[]> {
    return await this.showcasedWorkModel.find({ isVissible: true });
  }

  async findHidden(): Promise<ShowcasedWork[]> {
    return await this.showcasedWorkModel.find({ isVissible: false });
  }

  async findById(id: string): Promise<ShowcasedWork> {
    return await this.showcasedWorkModel.findById(id);
  }

  async create(showcasedWork: ShowcasedWork): Promise<ShowcasedWork> {
    const newShowcasedWork = new this.showcasedWorkModel(showcasedWork);
    return await newShowcasedWork.save();
  }

  async update(
    id: string,
    showcasedWork: ShowcasedWork,
  ): Promise<ShowcasedWork> {
    return await this.showcasedWorkModel.findByIdAndUpdate(id, showcasedWork, {
      new: true,
    });
  }

  async delete(id: string): Promise<ShowcasedWork> {
    return await this.showcasedWorkModel.findByIdAndDelete(id);
  }
}
