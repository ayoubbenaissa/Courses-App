import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CtaButton } from "../components/action-components/CtaButton";

import iconPlus from "../assets/plus-solid.svg";
import iconModify from "../assets/icons-modify.png";

import "../styles/CreateNewCourse.css";
import "../styles/ModifyOrDeleteCourse.css";

import { Course } from "../types/Courses";
import { deleteCourse, updateCourse } from "../api/courses.api";
import { Spinner } from "../components/Spinner";
import { UpdateCourse } from "../components/action-components/Update";

export const ModifyOrDeleteCourse = ({course}: {course: Course}) => {
    const navigate = useNavigate();

    const [showInfoModal, setShowInfoModal] = useState<boolean>(false);
    const [updatesDisabled, setUpdatesDisabled] = useState<boolean>(true);

    const [isFormValid, setIsFormValid] = useState<boolean>(false); // TODO: add form validation...
    // course info:
    const [courseName, setCourseName] = useState<string>(course.name);
    const [courseMembers, setCourseMembers] = useState<string[]>(course.members);
    const [courseCoach, setCourseCoach] = useState<string>(course.coachId);
    const [courseDescription, setCourseDescription] = useState<string>(course.description);

    // post the new course to backend:
    const handleUpdateCourse = async () => {
        // we omit the id since mongo takes care of creating a UUID on the fly
        const updatedCourse: Omit<Course, '_id'> = {
            name: courseName,
            members: courseMembers,
            coachId: courseCoach,
            description: courseDescription
        };

        setShowInfoModal(true);
        await updateCourse(course._id, updatedCourse);
        // adding timeout just for visual modal effect
        setTimeout(() => {
            setShowInfoModal(false);
            navigate("/courses");
        }, 1000);
    };

    // deleting the course:
    const handleDeeletCourse = async () => {
        await deleteCourse(course._id);
        navigate("/courses");
    };

    const handleNavigateBack = () => {
        navigate("/courses");
    };

    const handleStartUpdatingCourse = () => {
        setUpdatesDisabled(false);
    };

    return (
        <>
            <div className="create-update-course">
                <h2>New Course info:</h2>
                <div className="course-form">
                    <UpdateCourse className="modify-course-item_actions_item" onClick={() => handleStartUpdatingCourse()} />
                    <div className="course-field">
                        <div className="course-field_name">Course Name</div>
                        <input minLength={1} disabled={updatesDisabled} className="course-field_content" type="text" defaultValue={courseName} onChange={e => {setCourseName(e.target.value)}} />
                    </div>
                    <div className="course-field">
                        <div className="course-field_name">Course Members</div>
                        {courseMembers.map((courseMember, index) => <input minLength={1} disabled={updatesDisabled} key={index} defaultValue={courseMember} className="course-field_content" type="text" onChange={e => {
                            setTimeout(() => {
                                const currentCourseMembers = [...courseMembers];
                                currentCourseMembers[index] = e.target.value
                                setCourseMembers(currentCourseMembers)
                            }, 500)
                        }} />)}
                        <div onClick={() => setCourseMembers([...courseMembers, ''])} className="add-member">
                            <img src={iconPlus} alt="PLUS" />
                            <div>add member</div>
                        </div>
                    </div>
                    <div className="course-field">
                        <div className="course-field_name">Course Coach ID</div>
                        <input minLength={1} disabled={updatesDisabled} defaultValue={courseCoach} className="course-field_content" type="text" onChange={e => {setCourseCoach(e.target.value)}} />
                    </div>
                    <div className="course-field">
                        <div className="course-field_name">Course Description</div>
                        <textarea
                            minLength={1}
                            disabled={updatesDisabled}
                            className="course-field_content"
                            defaultValue={courseDescription}
                            cols={150}
                            rows={5}
                            onChange={e => {setCourseDescription(e.target.value)}}
                        />
                    </div>
                </div>
                <div className="actions">
                    <CtaButton buttonText="Update" buttonClickCB={handleUpdateCourse}/>
                    <CtaButton buttonText="DELETE" buttonClickCB={handleDeeletCourse}/>
                    <CtaButton buttonText="Cancel and go back" buttonClickCB={handleNavigateBack}/>
                </div>
            </div>

            {showInfoModal && 
            <div className="create-update-course-info">
                <div className="create-update-course-info_modal">
                    <h2>updating the course now.</h2>
                    <Spinner infoSpinner="you will be redirected to all-courses endpoint soon ..." />
                </div>
            </div>}
        </>
    )
};