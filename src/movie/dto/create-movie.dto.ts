import { IsEmail, IsInt, IsNotEmpty, IsString } from 'class-validator';

export class CreateMovieDTO {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsInt()
  @IsNotEmpty()
  releaseDate: number;

  @IsInt()
  @IsNotEmpty()
  rating: number;

  @IsInt()
  @IsNotEmpty()
  ticketPrice: number;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  genre: string[];

  @IsString()
  @IsNotEmpty()
  photo: string;
}
