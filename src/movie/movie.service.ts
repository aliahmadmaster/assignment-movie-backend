import { Injectable, OnModuleInit } from '@nestjs/common';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { MovieRepository } from './movie.repository';
import { MovieModel } from './schema/movie.model';
import { Movie } from './schema/movie.schema';

@Injectable()
export class MovieService implements OnModuleInit {
  constructor(private readonly movieRepository: MovieRepository) {}

  async onModuleInit() {
    try {
      const res = await this.movieRepository.find({}); // this method returns user data exist in database (if any)
      // checks if any user data exist
      if (res['data'] == 0) {
        const newMovies: CreateMovieDTO[] = [
          {
            name:"King",
            description: "What would you do if a lion cub appeared in your room?",
            releaseDate:new Date(),
            rating: 3,
            ticketPrice:56,
            country: "USA",
            genre:["Adventure", "Comedy", "Family"],
            photo:"https://pics.filmaffinity.com/King-928846801-large.jpg",
          },{
            name:"Pil's Adventures",
            description: "A spunky young girl disguises herself as a princess in order to save the kingdom and the heir to the throne",
            releaseDate:new Date(),
            rating: 4,
            ticketPrice:97,
            country: "France",
            genre:["Animation", "Adventure", "Fantasy" ],
            photo:"https://raisingchildren.net.au/__data/assets/image/0023/110993/Pils-Adventures.jpg",
          },
          {
            name:"Luck",
            description: "The curtain is pulled back on the millennia-old battle between the organizations of good luck and bad luck that secretly affects everyday lives.",
            releaseDate:new Date(),
            rating: 2,
            ticketPrice:87,
            country: "China",
            genre:["Animation", "Adventure", "Comedy", "Family", "Fantasy"],
            photo:"https://image.tmdb.org/t/p/original/jpKOSdxzEno6Din9viUFwWdJUgT.jpg",
          }

        ];
        let abc = newMovies.map(async movie =>{
          await this.movieRepository.create(movie); // this method creates new user in database
        });
        console.log(abc);
        
        
      }
    } catch (error) {
      throw error;
    }
  }

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
