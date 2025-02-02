import mongoose from "mongoose";
import { movieModel as movieModeldb } from "./mongoose";

const mongoURI = "mongodb+srv://hewenyanca:Uehq5EvJ4W6T7oow@cluster0.axcvo.mongodb.net/moviedb?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURI)
    .then(() => {
        console.log("✅ MongoDB Connected Successfully!");
    }).catch(err => {
        console.error("❌ MongoDB Connection Error:", err);
    });

export { movieModeldb }