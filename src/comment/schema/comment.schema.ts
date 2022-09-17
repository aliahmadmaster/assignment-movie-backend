import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Movie } from 'src/movie/schema/movie.schema';
import { User } from 'src/user/schema/user.schema';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class Comment extends AbstractDocument {
  @Prop()
  body: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User' })
  userId?: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' })
  movieId: Movie;
}

export const CommentSchema = SchemaFactory.createForClass(Comment);
