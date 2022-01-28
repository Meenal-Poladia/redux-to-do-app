import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToDo, deleteToDo, setListType, updateTodo} from "../actions";
import "../reducers/todoReducers";
import InformationButton from "./InformationButton";

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const [searchTerm, setSearchTerm] = useState("")
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list)
    const listType = useSelector((state) => state.todoReducers.listType)

    useEffect(() => {
        dispatch(setListType("All"));
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputData.trim().length === 0) return
        inputData.split(",").forEach(item => {
            dispatch(addToDo(item.trim()))
            setInputData("")
        })
    }

    const handleSearch = (e) => {
        setSearchTerm(e.target.value)
    }

    const handleCheck = (e, id) => {
        dispatch(updateTodo(e.target.checked, id))
    }

    const renderList = list => {
        return list
            .filter(item => {
                if (listType === "All") {
                    return true
                } else if(listType === "Completed") {
                    return item.isCompleted
                } else {
                    return !item.isCompleted
                }
            })
            .filter(item => item.data.toLowerCase().includes(searchTerm.toLowerCase()))
            .map((item) => {
                return (
                    <div className="eachItem"
                         key={item.id}
                    >
                        <input
                            type="checkbox"
                            id={item.id}
                            name="Todo"
                            onChange={(e) => handleCheck(e, item.id)}
                            checked={item.isCompleted}
                        />
                        <label htmlFor={item.data}/>
                        <h3>{item.data}</h3>
                        <div className="todo-btn">
                            <i className="far fa-trash-alt add-btn"
                               title="Delete Item"
                               onClick={() => {
                                   dispatch(deleteToDo(item.id))
                               }}/>
                        </div>
                    </div>
                )
            })
    }

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <div className="input-data">
                        <figure>
                            <figcaption>Add the list here</figcaption>
                        </figure>
                        <form className="add-Items" onSubmit={handleSubmit}>
                            <input type="text"
                                   placeholder="Add item"
                                   value={inputData}
                                   onChange={(e) => {
                                       setInputData(e.target.value)
                                   }}
                            />
                            <i className="fa fa-plus add-btn"
                               title="Add item"
                               onClick={handleSubmit}/>
                        </form>
                    </div>
                    <div className="output-data">
                        <figure>
                            <figcaption>My Todo List</figcaption>
                        </figure>
                        <input
                            type="text"
                            placeholder="Search..."
                            onChange={handleSearch}
                        />
                        <div className="info-btns-group">
                            <InformationButton type="button" buttonLabel="All"/>
                            <InformationButton type="button" buttonLabel="Completed"/>
                            <InformationButton type="button" buttonLabel="Pending"/>
                        </div>
                        <div className="showItems">
                            {renderList(list)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;