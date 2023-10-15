import "dotenv/config";

import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import { routerCourses } from "./routes/course";

// instantiate express:
const app = express();
// add middleware to handle JSON content
app.use(bodyParser.json());

mongoose.connect(process.env.MONGODB_URI)
.then(() => {
    // successful connection to DB
    console.log("successfully conntected to DB!");

    // use routes
    app.use('/courses', routerCourses);

    // no route
    app.use((req, res) => {
        res.status(404).json({message: "endpoint not found"});
    })

    const PORT = process.env.PORT || 5000; // TODO: think about PROD
    // run server:
    app.listen(PORT, () => {
        console.log(`server running at PORT ${PORT}`);
    });
})
.catch((err) => console.log(' ** ERROR ** ', err));
