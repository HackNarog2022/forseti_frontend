import {Category} from "./category";
import {Request} from "./request";
import {Place} from "./place";

export interface Meeting {
  id: string,
  date: Date,
  category: Category,
  requests: Request[],
  inspirations: string[],
  suggestedPlaces: Place[],
}
