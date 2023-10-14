import express from "express";
import { CourseModel } from "../models/course";

// creating router instance, which will be used to direct all calls to "/course" to this route
const routerCourses = express.Router();

// Create:
routerCourses.post("/", async(req, res) => {
    try {
        const newCourseEntry = await CourseModel.create(req.body);

        res.status(201).json(newCourseEntry);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Read:
routerCourses.get("/", async(req, res) => {
    try {
        const allExistingCourses = await CourseModel.find({}).exec();
        res.status(200).json(allExistingCourses);
    } catch(err) {
        res.status(500).json({message: err.message});
    }
});

routerCourses.get("/:id", async (req, res) => {
    try {
        const courseId = req.params.id;
        const courseBeingFetched = await CourseModel.findById(courseId).exec();
        if (!courseBeingFetched) res.status(404).json({message: "course not found!"});
        res.status(200).json(courseBeingFetched);
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Update:
routerCourses.patch("/:id", (req, res) => {
    const courseId = req.params.id;
    try {
        CourseModel.findByIdAndUpdate(courseId, req.body, {new: true})
        .then((updatedCourse) => {
            updatedCourse.save();
            res.status(200).json(updatedCourse)
        })
        .catch((err) => res.status(400).json({message: err.message}))
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

// Delete:
routerCourses.delete("/:id", async (req, res) => {
    const courseId = req.params.id;
    try {
        await CourseModel.findByIdAndDelete(courseId)
        .then(() => {
            res.sendStatus(204);
        })
        .catch((err) => res.status(400).json({message: err.message}))
    } catch (err) {
        res.status(500).json({message: err.message});
    }
});

export {routerCourses};