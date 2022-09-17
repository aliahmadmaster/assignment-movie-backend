import { Injectable } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieRepository } from './movie.repository';
import { MovieModel } from './schema/movie.model';
import { Movie } from './schema/movie.schema';

@Injectable()
export class MovieService {
    constructor(private readonly movieRepository: MovieRepository) {}

  async createMovie(createMovieData: CreateMovieDTO) {
    const movie = await this.movieRepository.create({
      ...createMovieData,
    });
    return this.toModel(movie);
  }
  async getMovies(page: number, count: number){
    
    const movies = await this.movieRepository.findPagination({},page, count)
    return movies.map((movie) => this.toModel(movie));
  }
  
  private toModel(movieDocument: Movie) : MovieModel {
    return {
      id: movieDocument._id.toHexString(),
      name: movieDocument.name,
      description: movieDocument.description,
      releaseDate: movieDocument.releaseDate,
      rating: movieDocument.rating,
      ticketPrice: movieDocument.ticketPrice,
      country: movieDocument.country,
      genre: movieDocument.genre,
      photo: movieDocument.photo,
    };
  }
  
}
