import mongoose from "mongoose";
import { IMovie } from "../interface/IMovie";

const schema = new mongoose.Schema<IMovie>({
    name: String,
    types: [String],
    areas: [String],
    timeLong: Number,
    isHot: Boolean,
    isClassic: { type: Boolean, default: false }
}, { versionKey: false, strict: false })

const movieModel = mongoose.model<IMovie>("Movie", schema)
export { movieModel }