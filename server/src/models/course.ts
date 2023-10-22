import mongoose from "mongoose"; // NodeJs ORM to work with MongoDB
import { membersValidator } from "./utils";

// creating the course schema w.r.t specs

const courseSchema = new mongoose.Schema({
  name: {
    type: String,
    // name field validation:
    required: [true, "Please provide a name for the course"],
  },
  members: {
    type: [String],
    validate: membersValidator,
  },
  coachId: {
    type: String,
    required: [true, "Please provide a coach ID for the course"],
  },
  description: {
    type: String,
    required: [true, "Please add a description for the course"],
  },
});

// creation of the Model based on the Schema:
export const CourseModel = mongoose.model("Course", courseSchema);
