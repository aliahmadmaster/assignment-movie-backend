import { IsEmpty, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateCommentDTO {
  @IsNotEmpty()
  @IsString()
  @MinLength(3, {
    message: 'Comment body is too short',
  })
  @MaxLength(100, {
    message: 'Comment body is too long.',
  })
  body: string;

  @IsEmpty()
  userId?: string;

  @IsString()
  @IsNotEmpty()
  movieId: string;
}
