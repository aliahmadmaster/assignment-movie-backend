import { Injectable, Logger } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { AbstractRepository } from "src/database/abstract.repository";
import { Comment } from "./schema/comment.schema";


@Injectable()
export class CommentRepository extends AbstractRepository<Comment> {
  protected readonly logger = new Logger(CommentRepository.name);

  constructor(@InjectModel(Comment.name) commetModel: Model<Comment>) {
    super(commetModel);
  }
}
