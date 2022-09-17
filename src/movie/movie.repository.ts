import { Injectable, Logger } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AbstractRepository } from '../database/abstract.repository';
import { Movie } from './schema/movie.schema';

@Injectable()
export class MovieRepository extends AbstractRepository<Movie> {
  protected readonly logger = new Logger(MovieRepository.name);

  constructor(@InjectModel(Movie.name) movieModel: Model<Movie>) {
    super(movieModel);
  }
}
