import type { ObjectId } from "../../node_modules/mongodb/mongodb.js";

export interface News {
  _id?: ObjectId;
  title: string;
  description: string;
  date: Date;
  content: string;
  author: string;
  archiveDate?: Date | null;
}
