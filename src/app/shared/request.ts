import {User} from "./user";
import {Category} from "./category";

export interface Request {
  requestId: string | null
  user: User,
  category: Category,
  freeText: string,
  place: string,
  expectedExpertise: string,
  declaredExpertise: string,
  startDate: Date,
  endDate: Date,
  isNegative: boolean
}
