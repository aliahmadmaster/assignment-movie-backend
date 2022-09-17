import { IsEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateUserDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'Comment body is too short',
  })
  @MaxLength(100, {
    message: 'Comment body is too long.',
  })
  body: string;

  @IsString()
  @IsEmpty()
  userId: string;

  @IsString()
  @IsNotEmpty()
  movieId: string;
}
