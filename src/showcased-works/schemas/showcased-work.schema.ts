import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShowcasedWorkDocument = HydratedDocument<ShowcasedWork>;

@Schema()
export class ShowcasedWork {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  url: string;

  @Prop({ required: false })
  photo: string;

  @Prop({ required: false, default: true })
  isVissible: boolean;
}

export const ShowcasedWorkSchema = SchemaFactory.createForClass(ShowcasedWork);
