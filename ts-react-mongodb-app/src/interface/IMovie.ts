import mongoose from "mongoose";
import { Movie } from "../entity/Movie";

export interface IMovie extends Movie, mongoose.Document {

}