import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
let AddTodo = (props) => {
    let [state, setState] = useState({
        title: ''
    })
    let handleOnChangeTitle = (e) => {
        setState({
            title: e.target.value
        })
    }
    let handleAddTodo = () => {
        if (!state.title) {
            toast.error("Missing Title")
            return
        }
        let todo =
        {
            id: Math.floor(Math.random() * 1001),
            title: state.title
        }

        props.addNewTodo(todo)
        setState({
            title: ''
        })

    
    }
    console.log(state)
    return (
        <div className="add-todo">
            <input type="text" onChange={(e) => handleOnChangeTitle(e)} value={state.title} />

            <button type="button" onClick={() => handleAddTodo()} className="add">Add</button>

        </div>
    )
}

export default AddTodo