import { useEffect, useState } from "react"
import { Spinner } from "../components/Spinner"
import { Course } from "../types/Courses";
import { AllCourses } from "../components/AllCourses";
import { fetchCourses } from "../api/courses.api";
import { areCoursesUpdated$ } from "../state-signals/allCourses.signal";

export const CoursesList = () => {
    const [coursesFetched, setCoursesFetched] = useState(false);
    const [allCourses, setAllCourses] = useState<Course[]>([]);

    useEffect(() => {
        async function getCourses() {
            try {
                setCoursesFetched(false);
                const getCoursesResponse = await fetchCourses();
                setCoursesFetched(true);
                setAllCourses(getCoursesResponse.reverse());
            } catch (err) {
                
            }
        }

        getCourses();
    }, [areCoursesUpdated$.value]);
    return (
        <>
        <h1>All Courses</h1>
        {!coursesFetched ? <Spinner infoSpinner={"Fetching data from server, please wait a bit ..."}/> : <AllCourses allCourses={allCourses}/>}
        </>
    )
}