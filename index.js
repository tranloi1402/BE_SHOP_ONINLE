import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from 'body-parser';
import postsRouter from "./routes/index.js";

const app = express();

const PORT = process.env.PORT || 5000;
const URI = 'mongodb://localhost:27017/shop_food';

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const corsOptions = {
    origin: 'http://localhost:3000',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions));

app.use("/", postsRouter);

// const PORT = process.env.PORT || 5000;
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
