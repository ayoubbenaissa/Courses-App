import { FC } from "react";
import { CourseActionElementProps } from "../../types/UpdateCourseComponent";

import "../../styles/CourseActionElement.css";

export const CourseActionElement: FC<CourseActionElementProps> = ({iconRef, altAttr, action, ...props}) => {
    return (
        <>
        <div {...props} className={`course_action_element ${props.className}`}>
            <img src={iconRef} alt={altAttr} />
            <p>{action}</p>
        </div>
        </>
    )
};