import { useState } from "react";
import ChildComponent from "./ChildComponent";
import AddComponent from "./AddComponent";

let MyComponent = () => {



    let [user, setUser] = useState({
        arrProps: [
            { id: "1", title: "Developers", salary: "500" },
            { id: "2", title: "Testers", salary: "400" },
            { id: "3", title: "Project Managers", salary: "1000" },]
    })

    let addNewJob = (job) => {
        setUser({
            arrProps: [...user.arrProps, job]
        })
    }
    let deleteAJob = (job) => {
        let currentJob = user.arrProps;
        currentJob = currentJob.filter(item => item.id !== job.id)
        setUser({
            arrProps: currentJob
        })
    }
    console.log("Check Data", user)

    return (

        <>
            <AddComponent addNewJob={addNewJob} />

            <ChildComponent
                arrProps={user.arrProps}
                deleteAJob={deleteAJob}></ChildComponent >
        </>
    )
}

export default MyComponent;


/////////////////////

