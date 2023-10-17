import { createPortal } from 'react-dom';

import { Course } from "../types/Courses";
import "../styles/CourseItem.css";

import iconCouse from "../assets/icons-course.png";
import iconModify from "../assets/icons-modify.png";
import iconDelete from "../assets/icons-delete.png";
import { useState } from "react";
import { SelectedCourseDetails } from "./SelectedCourseDetails";
import { MouseClickEvent } from '../types/utility-types';
import { deleteCourse } from '../api/courses.api';
import { useNavigate } from 'react-router-dom';
import { DeleteCourseModal } from './DeleteCourseModal';
import { areCoursesUpdated$ } from '../state-signals/allCourses.signal';
import { courseToUpdate$ } from '../state-signals/courseToUpdate.signal';

export const CourseItem = ({courseItem}: {courseItem: Course}) => {
    const navigate = useNavigate();
    const [showCourseDetails, setShowCourseDetails] = useState(false); // TODO: this can be removed as we can solely rely on "selectedCourse"
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const [showDeleteCourseModal, setShowDeleteCourseModal] = useState(false);
    const [isCourseBeingDeleted, setIsCourseBeingDeleted] = useState(false);

    const handleCloseDetailsModal = (e: MouseClickEvent) => {
        e.preventDefault();
        setSelectedCourse(null);
        setShowCourseDetails(false);
    };

    const handleShowDeleteCouseModal = (e: MouseClickEvent) => {
        e.preventDefault();
        setShowDeleteCourseModal(true);
    };

    const handleHideDeleteCouseModal = (e: MouseClickEvent) => {
        e.preventDefault();
        setShowDeleteCourseModal(false);
    };

    const handleDeleteCourse = async (): Promise<void> => {
        await deleteCourse(courseItem._id);
        setIsCourseBeingDeleted(true);
        setTimeout(() => {
            setIsCourseBeingDeleted(false);
            areCoursesUpdated$.value = courseItem._id; // TODO: think of a better way to manage state
            navigate("/courses");
        }, 1000);
    }

    const handleUpdateCourse = () => {
        courseToUpdate$.value = courseItem;
        navigate(`/courses/${courseItem._id}`);
    }

    return (
        <>
            <div className="course-item">
                <div className="course-item_content">
                    <div className="course-name">{courseItem.name}</div>
                    <div className="course-coach">coach-id: {courseItem.coachId}</div>
                </div>
                <div className="course-item_actions">
                    <div className="course-item_actions_item" onClick={() => {
                        setSelectedCourse(courseItem);
                        setShowCourseDetails(true);
                    }}>
                        <img src={iconCouse} alt="icon course" />
                        <p>show course details</p>
                    </div>
                    <div className="course-item_actions_item" onClick={() => handleUpdateCourse()}>
                        <img src={iconModify} alt="icon update" />
                        <p>update course</p>
                    </div>
                    <div className="course-item_actions_item" onClick={(e) => handleShowDeleteCouseModal(e)}>
                        <img src={iconDelete} alt="icon delete" />
                        <p>delete course</p>
                    </div>
                </div>
            </div>
            {(showCourseDetails && selectedCourse) && createPortal(
                <SelectedCourseDetails closeModal={handleCloseDetailsModal} selectedCourse={selectedCourse}/>,
                document.getElementById('app-modal') || document.body
            )}
            {showDeleteCourseModal && createPortal(
                <DeleteCourseModal courseName={courseItem.name} isCourseBeingDeleted={isCourseBeingDeleted} confirmDeletion={handleDeleteCourse} cancelDeletion={handleHideDeleteCouseModal} />,
                document.getElementById('app-modal') || document.body
            )}
        </>
    )
};