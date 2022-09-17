import { Body, Controller, Get, Post, Query, Request, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/guards/jwt-auth.guard';
import { CommentService } from './comment.service';
import { CreateCommentDTO } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
    constructor(private readonly commentService: CommentService){}
    
    @Get()
    async getMovieComments(@Query('movieId') movieId: string,) {
      return this.commentService.getMovieComments(movieId)
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    async createMovieComment( @Body() commentData:CreateCommentDTO ) {
      return this.commentService.createMovieComment(commentData);
    }

    
}
