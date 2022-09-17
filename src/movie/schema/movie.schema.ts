import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { AbstractDocument } from '../../database/abstract.schema';

@Schema({ versionKey: false })
export class Movie extends AbstractDocument {
    @Prop()
    name: string;
  
    @Prop()
    description: string;

    @Prop()
    releaseDate: Date;
  
    @Prop()
    rating: number;

    @Prop()
    ticketPrice: number;
  
    @Prop()
    country: string;

    @Prop()
    genre: string[];
  
    @Prop()
    photo: string;
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
