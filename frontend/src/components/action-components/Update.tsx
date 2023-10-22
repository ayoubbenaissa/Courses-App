import { FC } from "react";
import { UpdateComponentProps } from "../../types/UpdateCourseComponent";

import iconModify from "../../assets/icons-modify.png";
import "../../styles/UpdateCourseComponent.css";

export const UpdateCourse: FC<UpdateComponentProps> = ({...props}) => {
    return (
        <>
        <div {...props} className={`update_course_component ${props.className}`}>
            <img src={iconModify} alt="update" />
            <p>update</p>
        </div>
        </>
    )
};