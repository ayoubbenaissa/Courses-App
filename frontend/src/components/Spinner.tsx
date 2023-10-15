import spinner from "../assets/spinner.png";
import "../styles/Spinner.css";

export const Spinner = ({infoSpinner}: {infoSpinner: string}) => {
    return (
        <>
        <h2>{infoSpinner}</h2>
        <img src={spinner} className="spinner" alt="logo" />
        </>
    )
};