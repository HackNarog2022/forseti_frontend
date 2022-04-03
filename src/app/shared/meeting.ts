import {Category} from "./category";
import {Request} from "./request";
import {Place} from "./place";

export interface Meeting {
  id: string,
  date: Date,
  category: Category,
  requests: Request[],
  active: boolean,
  inspirations: string[],
  suggestedPlaces: Place[],
  ratings: {[key: string]: number}
}
