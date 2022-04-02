import {User} from "./user";
import {Category} from "./category";

export interface Request {
  requestId: string
  user: User,
  category: Category,
  freeText: string,
  place: string,
  expectedExpertise: number,
  declaredExpertise: number,
  startDate: Date,
  endDate: Date
}
