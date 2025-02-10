import mongoose from "mongoose";
import { movieModel as movieModeldb } from "./mongoose";

const mongoURI = "mongodb://localhost:27017/moviedb";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
    }).catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
    });

export { movieModeldb }