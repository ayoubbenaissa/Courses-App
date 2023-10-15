import { CtaButton } from "./CtaButton";
import { useNavigate } from "react-router-dom";

export const CreateCourseButton = () => {
    const navigate = useNavigate();
    const handleShowCreateCourseModal = () => {
        navigate("/new-course");
    }
    return (
        <CtaButton buttonText={"Create Course"} buttonClickCB={handleShowCreateCourseModal}/>
    )
};