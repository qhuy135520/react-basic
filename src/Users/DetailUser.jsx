import React, { useEffect, useState } from 'react';
import axios from "axios"
import {
    useNavigate,
    useParams,
} from "react-router-dom";

let DetailUser = () => {
    let [state, setState] = useState({
        User: []
    })
    let { id } = useParams()
    let navigate = useNavigate()
    let isEmpty = Object.keys(state.User).length === 0
    useEffect(() => {
        const fetchData = async () => {

            let res = await axios.get(`https://reqres.in/api/users/${id}`,)
            console.log(">>>> Check Data", res)
            setState({
                User: res && res.data && res.data.data ? res.data.data : []
            })
        }

        fetchData()
            .catch(console.error);;
    }, [])
    let handleBackButton = () => {
        navigate(`/user`)
    }
    console.log("checkk", state.User)
    return (
        <>{isEmpty === false &&
            <>
                <div>Hello World from detail user with id: {state.User.id}</div>
                <div>User's name: {state.User.first_name} {state.User.last_name}</div>
                <div>User's email: {state.User.email}</div>
                <div><img src={state.User.avatar} /></div>
                <div><button onClick={() => handleBackButton()}>Back</button></div>
            </>
        }
        </>

    )
}
export default DetailUser
