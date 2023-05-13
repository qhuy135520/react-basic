import { useState } from "react";

let AddComponent = (props) => {
    let [user, setUser] = useState({
        title: "", salary: "",
    })

    const handleChangeTitle = (e) => {
        setUser({
            ...user, title: e.target.value
        })
    }
    const handleChangeSalary = (e) => {
        setUser({
            ...user, salary: e.target.value
        })
    }
    let clearInput = () => {
        setUser({
            ...user, title: '', salary: ''
        })
    }
    let handleSubmit = (event) => {
        event.preventDefault();
        if (!user.title || !user.salary) {
            alert("Missing required params !!")
            return;
        }
        props.addNewJob({
            id: Math.floor(Math.random() * 1001),
            title: user.title,
            salary: user.salary
        })

        clearInput()
    }

    return (
        <form action="">
            <label htmlFor="fname">Job's Title:</label>
            <br />
            <input type="text" onChange={(e) => handleChangeTitle(e)} value={user.title} />
            <br />
            <label htmlFor="lname">Salary:</label>
            <br />
            <input type="text" onChange={(e) => handleChangeSalary(e)} value={user.salary} />
            <br />
            <input onClick={handleSubmit} type="submit" Value="Submit" />
        </form>
    )
}
export default AddComponent
