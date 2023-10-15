import { signal } from "@preact/signals-react";
import { Course } from "../types/Courses";

export const courseToUpdate$ = signal<Course | null>(null);