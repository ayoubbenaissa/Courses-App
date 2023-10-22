import { useNavigate } from "react-router-dom";
import { Course } from "../types/Courses";
import "../styles/SelectedCourseDetails.css";
import { MouseClickEvent } from "../types/utility-types";

import iconModify from "../assets/icons-modify.png";
import { courseToUpdate$ } from "../state-signals/courseToUpdate.signal";

export const SelectedCourseDetails = ({selectedCourse, closeModal}: {selectedCourse: Course, closeModal: (e: MouseClickEvent) => void}) => {
    const navigate = useNavigate();

    const handleOpenCoursePage = () => {
        courseToUpdate$.value = selectedCourse;
        navigate(`/courses/${selectedCourse._id}`);
    };

    return (
        <div className="course-details_container" onClick={(e) => closeModal(e)}>
            <div className="course-details_modal" onClick={(e) => e.stopPropagation()}>
                <div className="course-details-item_actions_item" onClick={() => handleOpenCoursePage()}>
                                <img src={iconModify} alt="icon update" />
                                <p>update course</p>
                </div>
                <h1 className="course-details_name">{selectedCourse.name}</h1>
                <div className="course-details_coach">
                    <p>Coach: </p>
                    <h2>{selectedCourse.coachId}</h2>
                </div>
                <p>Members:</p>
                {selectedCourse.members.map((member, index) => <div key={index} className="course-details_member">{member}</div>)}

                <p className="course-details_description_label">Description:</p>
                <textarea
                    className="course-details_description"
                    disabled
                    cols={150}
                    rows={5}
                    value={selectedCourse.description}
                />
            </div>
        </div>
    )
};