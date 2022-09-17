import { Body, Controller, Get, ParseIntPipe, Post, Query, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/guards/jwt-auth.guard';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieService } from './movie.service';

@Controller('movies')
export class MovieController {
    constructor(private readonly movieService: MovieService) {}

    @UseGuards(JwtAuthGuard)
    @Post()
    async createMovie(@Body() createMovieData: CreateMovieDTO) {
      return this.movieService.createMovie(createMovieData);
    }

    @Get()
    async getMovies(
      @Query('page', ParseIntPipe) page: number = 1, 
      @Query('count', ParseIntPipe) count = 1
    ) {
      return this.movieService.getMovies(page, count)
    }
}
