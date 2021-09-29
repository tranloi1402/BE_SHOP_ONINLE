import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import postsRouter from "./routes/index.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const URI = process.env.DATABASE_URL;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    origin: 'https://shopfoodapp.web.app',
    credentials: true,
    optionSuccessStatus: 200,
}
app.use(cors(corsOptions));

app.use("/", postsRouter);

mongoose.connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connect to DB');
        app.listen(PORT, () => {
            console.log(`Server is running on port: ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });

mongoose.set('useFindAndModify', false);
