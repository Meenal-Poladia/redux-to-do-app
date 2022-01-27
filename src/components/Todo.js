import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addToDo, deleteToDo, removeToDo} from "../actions";
import "../reducers/todoReducers";

const Todo = () => {

    const [inputData, setInputData] = useState("");
    const dispatch = useDispatch();
    const list = useSelector((state) => state.todoReducers.list)

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <div className="input-data">
                        <figure>
                            <figcaption>Add the list here</figcaption>
                        </figure>
                        <div className="add-Items">
                            <input type="text"
                                   placeholder="Add item"
                                   value={inputData}
                                   onChange={(e) => {
                                       setInputData(e.target.value)
                                   }}
                            />
                            <i className="fa fa-plus add-btn"
                               title="Add item"
                               onClick={() => {
                                   dispatch(addToDo(inputData))
                                   setInputData("")
                               }}/>
                        </div>
                    </div>
                    <div className="output-data">
                        <figure>
                            <figcaption>My Todo List</figcaption>
                        </figure>
                        <div className="showItems">
                            {
                                list.map((item) => {
                                    return (
                                        <div className="eachItem"
                                             key={item.id}
                                        >
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

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Todo;