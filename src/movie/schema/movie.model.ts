import { AbstractModel } from "src/database/abstract.model";

export class MovieModel extends AbstractModel {
    readonly name: string;
    readonly description: string;
    readonly releaseDate: Date;
    readonly rating: number;
    readonly ticketPrice: number;
    readonly country: string;
    readonly genre: string[];
    readonly photo: string;
}