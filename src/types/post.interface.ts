import { ObjectId } from "mongodb";
export interface Post {
  _id: ObjectId | string; // union
  idUser: ObjectId | string; // union
  content?: string;
  image?: string[];
  video?: string[];
  comments?: ObjectId | string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
}
