import { Course } from "../types/Courses";
import { CourseItem } from "./CourseItem";
import { CreateCourseButton } from "./CreateCourseButton";

export const AllCourses = ({ allCourses }: { allCourses: Course[] }) => {
  return (
    <>
      {allCourses.length > 0 ? (
        allCourses.map((courseItem) => (
          <CourseItem courseItem={courseItem} key={courseItem._id} />
        ))
      ) : (
        <>
          <div className="no-course-info-text">
            No course has been found in the DB. Feel free to create some...
          </div>
        </>
      )}
      <CreateCourseButton />
    </>
  );
};
