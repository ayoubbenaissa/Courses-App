import "../../styles/CtaButton.css";

export const CtaButton = ({buttonText, buttonClickCB, isBtnDisabled=false}: {buttonText: string; buttonClickCB: (courseId?: string) => void | Promise<void>; isBtnDisabled?: boolean}) => {
    return (
        <button
            disabled={isBtnDisabled}
            className="cta-button"
            onClick={(e) => {
                e.preventDefault();
                buttonClickCB();
            }}
        >
            {buttonText}
        </button>
    )
};