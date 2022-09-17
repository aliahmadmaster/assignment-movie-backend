import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class Comment extends AbstractDocument {
  @Prop()
  body: string;

  @Prop()
  userId?: string;

  @Prop()
  movieId: string;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
