import { AbstractModel } from "src/database/abstract.model";

export class CommentModel extends AbstractModel {
    readonly body: string;
    readonly movieId: string;
    readonly userId: string;
}