import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CtaButton } from "../components/action-components/CtaButton";

import iconPlus from "../assets/plus-solid.svg";

import "../styles/CreateNewCourse.css";
import { Course } from "../types/Courses";
import { createCourse } from "../api/courses.api";
import { Spinner } from "../components/Spinner";

export const CreateNewCourse = () => {
  const navigate = useNavigate();

  const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
  // course info:
  const [courseName, setCourseName] = useState<string>("");
  const [courseMembers, setCourseMembers] = useState<string[]>([""]);
  const [courseCoach, setCourseCoach] = useState<string>("");
  const [courseDescription, setCourseDescription] = useState<string>("");

  // post the new course to backend:
  const handleCreateNewCourse = async () => {
    // we omit the id since mongo takes care of creating a UUID on the fly
    const newCourse: Omit<Course, "_id"> = {
      name: courseName,
      members: courseMembers,
      coachId: courseCoach,
      description: courseDescription,
    };

    setShowInfoModal(true);
    await createCourse(newCourse);
    setTimeout(() => {
      setShowInfoModal(false);
      navigate("/courses");
    }, 1000);
  };

  return (
    <>
      <div className="create-update-course">
        <h2>New Course info:</h2>
        <div className="course-form">
          <div className="course-field">
            <div className="course-field_name">Course Name</div>
            <input
              minLength={1}
              className="course-field_content"
              type="text"
              onChange={(e) => {
                setCourseName(e.target.value);
              }}
            />
          </div>
          <div className="course-field">
            <div className="course-field_name">Course Members</div>
            {courseMembers.map((courseMember, index) => (
              <input
                minLength={1}
                key={index}
                className="course-field_content"
                type="text"
                onChange={(e) => {
                  setTimeout(() => {
                    const currentCourseMembers = [...courseMembers];
                    currentCourseMembers[index] = e.target.value;
                    setCourseMembers(currentCourseMembers);
                  }, 500);
                }}
              />
            ))}
            <div
              onClick={() => setCourseMembers([...courseMembers, ""])}
              className="add-member"
            >
              <img src={iconPlus} alt="PLUS" />
              <div>add member</div>
            </div>
          </div>
          <div className="course-field">
            <div className="course-field_name">Course Coach ID</div>
            <input
              minLength={1}
              className="course-field_content"
              type="text"
              onChange={(e) => {
                setCourseCoach(e.target.value);
              }}
            />
          </div>
          <div className="course-field">
            <div className="course-field_name">Course Description</div>
            <textarea
              minLength={1}
              className="course-field_content"
              placeholder="Add description for the course..."
              cols={150}
              rows={5}
              onChange={(e) => {
                setCourseDescription(e.target.value);
              }}
            />
          </div>
        </div>
        <CtaButton buttonText="Create" buttonClickCB={handleCreateNewCourse} />
      </div>

      {showInfoModal && (
        <div className="create-update-course-info">
          <div className="create-update-course-info_modal">
            <h2>creating the course now.</h2>
            <Spinner infoSpinner="you will be redirected to all-courses endpoint soon ..." />
          </div>
        </div>
      )}
    </>
  );
};
