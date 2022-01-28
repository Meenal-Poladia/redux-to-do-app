import "../App.css";
import {useDispatch, useSelector} from "react-redux";
import {setListType} from "../actions";



const InformationButton = (props) => {
    const listType = useSelector((state) => state.todoReducers.listType)
    const dispatch = useDispatch();

    const disableButton = () => {
        return props.buttonLabel === listType;
    }

    const handleCheck = () => {
        dispatch(setListType(props.buttonLabel));
    }

    return (
        <button
            type="button"
            className="info-btn"
            onClick={handleCheck}
            disabled={disableButton()}
        >
            {props.buttonLabel}
        </button>
    )
}
export default InformationButton;