import { useState } from "react";
import "./ListTodo.scss"
import AddTodo from "./AddTodo";
import { ToastContainer, toast } from 'react-toastify';
let ListToDo = () => {
    let [state, setState] = useState(
        {
            listTodos: [
                { id: 'todo1', title: 'Doing homework' },
                { id: 'todo2', title: 'Making videos' },
                { id: 'todo3', title: 'Fixing bugs' },
            ],
        })

    let [edit, setEdit] = useState(
        {
            editTodo: {}
        }
    )

    let addNewTodo = (todo) => {
        // let currentListTodo = state.listTodos;
        // currentListTodo.push(todo);

        setState({
            listTodos: [...state.listTodos, todo],
            // listTodos: currentListTodo
        })
        toast.success("Wow so easy")
    }

    let handleDeleteTodo = (todo) => {
        let currentListTodo = state.listTodos.filter((item) => item.id != todo.id)
        setState({
            listTodos: currentListTodo
        })
        toast.success("Delete Success !!!")
    }
    let handleEditTodo = (todo) => {
        let isEmpty = Object.keys(edit.editTodo).length === 0
        if (isEmpty === false && edit.editTodo.id === todo.id) {
            let listTodosCopy = [...state.listTodos];

            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id))

            listTodosCopy[objIndex].title = edit.editTodo.title

            setState({
                listTodos: listTodosCopy
            })
            setEdit({
                editTodo: {}
            })
            toast.success("Change Success !!")
            return;
        }
        setEdit({
            editTodo: todo
        })

    }
    let handleOnChangeEditTodo = (e) => {
        let editTodoCopy = { ...edit.editTodo }
        editTodoCopy.title = e.target.value
        setEdit({
            editTodo: editTodoCopy
        })
    }

    let isEmpty = Object.keys(edit.editTodo).length === 0
    return (<div className="list-todo-container">
        <AddTodo
            addNewTodo={addNewTodo}
        />
        <div className="list-todo-content">
            {state.listTodos && state.listTodos.length > 0 &&
                state.listTodos.map((item, index) => {
                    return (
                        <div className="todo-child" key={item.id} >
                            {isEmpty === true
                                ?
                                <span> {index + 1} - {item.title} </span>
                                :
                                <>{edit.editTodo.id === item.id
                                    ?
                                    <span>{index + 1} - <input
                                        onChange={(e) => handleOnChangeEditTodo(e)}
                                        value={edit.editTodo.title} /></span>
                                    :
                                    <span>{index + 1} - {item.title}</span>
                                }
                                </>

                            }
                            <button onClick={() => handleEditTodo(item)} className="edit">
                                {
                                    isEmpty === false && edit.editTodo.id === item.id
                                        ? 'save' : 'Edit'
                                }

                            </button>
                            <button onClick={() => handleDeleteTodo(item)} className="delete">Delete</button>
                        </div>
                    )
                })
            }
        </div>
    </div >
    )
}

export default ListToDo