import { Type } from 'class-transformer';
import { IsDate, IsInt, IsNotEmpty, IsString, Max, Min } from 'class-validator';

export class CreateMovieDTO {
  
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  description: string;

  @IsDate()
  @Type(() => Date)
  @IsNotEmpty()
  releaseDate: Date;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  @Max(5)
  rating: number;

  @IsInt()
  @IsNotEmpty()
  @Min(1)
  ticketPrice: number;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString({ each: true })
  @IsNotEmpty()
  genre: string[];

  @IsString()
  @IsNotEmpty()
  photo: string;
}
