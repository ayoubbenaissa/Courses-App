import { Course } from "../types/Courses";
import "../styles/SelectedCourseDetails.css";
import { MouseClickEvent } from "../types/utility-types";

export const SelectedCourseDetails = ({selectedCourse, closeModal}: {selectedCourse: Course, closeModal: (e: MouseClickEvent) => void}) => {
    return (
        <div className="course-details_container" onClick={(e) => closeModal(e)}>
            <div className="course-details_modal" onClick={(e) => e.stopPropagation()}>
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