import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ShowcasedWorkDocument = HydratedDocument<ShowcasedWork>;

@Schema()
export class ShowcasedWork {
  @Prop({ required: true })
  title: string;

  @Prop({ required: false })
  description: string;

  @Prop({ required: false })
  url: string;
}

export const ShowcasedWorkSchema = SchemaFactory.createForClass(ShowcasedWork);
