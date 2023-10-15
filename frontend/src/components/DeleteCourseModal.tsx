import { MouseClickEvent } from "../types/utility-types";
import { Spinner } from "./Spinner";

import "../styles/DeleteCourseModal.css";

export const DeleteCourseModal = ({courseName, isCourseBeingDeleted, confirmDeletion, cancelDeletion}: {courseName: string; isCourseBeingDeleted: boolean; confirmDeletion: () => Promise<void>; cancelDeletion: (e: MouseClickEvent) => void}) => {
    return (
        <div className="delete-course_modal_container" onClick={(e) => cancelDeletion(e)}>
            <div className="delete-course_modal">
                {isCourseBeingDeleted ? (
                    <>
                        <div className="delete-course_modal_confirmation">deleting the course now</div>
                        <Spinner infoSpinner="you will be redirected to all-courses endpoint soon ..." />
                    </>
                ) : (
                    <>
                        <div className="delete-course_modal_header">Delete Course Confirmation</div>
                        <div className="delete-course_modal_content">
                            this will permenantly delete course <strong>{courseName}</strong>!! <br />
                            Are you sure?
                        </div>
                        <div className="delete-course_modal_actions">
                            <div onClick={() => confirmDeletion()} className="delete-course_modal_confirm">YES</div>
                            <div onClick={(e) => cancelDeletion(e)} className="delete-course_modal_cancel">Cancel</div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
};