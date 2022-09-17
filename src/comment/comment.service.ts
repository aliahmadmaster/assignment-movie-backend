import { Injectable } from '@nestjs/common';
import { CreateCommentDTO } from './dto/create-comment.dto';
import { CommentRepository } from './comment.repository';
import { CommentModel } from './schema/comment.model';
import { Comment } from './schema/comment.schema';

@Injectable()
export class CommentService {
    constructor(private readonly commentRepository: CommentRepository) {}

  async createMovieComment(createCommentData: CreateCommentDTO) {
    const comment = await this.commentRepository.create({...createCommentData});
    return this.toModel(comment);
  }
  async getMovieComments(movieId: string){
    const comments = await this.commentRepository.find({movieId: movieId})
    return comments.map((comment) => this.toModel(comment));
  }
  
  private toModel(commentDocument: Comment) : CommentModel {
    return {
      id: commentDocument._id.toHexString(),
      body: commentDocument.body,
      movieId: commentDocument.movieId,
      userId: commentDocument.userId,
        
    };
  }
  
}
