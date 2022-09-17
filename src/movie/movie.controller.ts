import { Body, Controller, Post } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @Post()
    async createMovie(@Body() createMovieData: CreateMovieDTO) {
      return this.movieService.createMovie(createMovieData);
    }

    
}
