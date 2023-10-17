import { Course } from "../types/Courses";

const makeApiCall = async (input: RequestInfo, init?: RequestInit) => {
    const apiResponse = await fetch(input, init);
    if (apiResponse.ok) return apiResponse
    else {
        const apiError = await apiResponse.json();
        throw Error(apiError.message);
    }
};

export const fetchCourses = async (): Promise<Course[]> => {
    const courses = await makeApiCall(`http://localhost:5000/courses`, { method: 'GET'});
    return courses.json();
};

export const createCourse = async (courseInput: Omit<Course, "_id">): Promise<Course> => {
    const createdCourse = await makeApiCall(`http://localhost:5000/courses`, 
    {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(courseInput)
    }
    );
    return createdCourse.json();
};

export async function deleteCourse(courseId: string) {
    await makeApiCall(`http://localhost:5000/courses/${courseId}`, { method: "DELETE" });
};

export async function updateCourse(courseId: string, courseToUpdate: Omit<Course, "_id">): Promise<Course> {
    const updatedCourse = await makeApiCall(`http://localhost:5000/courses/${courseId}`,
        {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(courseToUpdate),
        });
    return updatedCourse.json();
};