import Color from "../views/HOC/color"
import axios from "axios"
import React, { useEffect, useState } from 'react';
import './ListUser.scss'
let ListUser = () => {
    let [state, setState] = useState({
        listUsers: []
    })
    //useEffect
    useEffect(() => {
        const fetchData = async () => {

            let res = await axios.get("https://reqres.in/api/users?page=2")


            console.log(">>>> Check Data", res)
            setState({
                listUsers: res && res.data && res.data.data ? res.data.data : []
            })
        }

        fetchData()
            .catch(console.error);;
    }, [])
    return (
        <div className="list-user-container">
            <div className="title">
                Fetch All List Users
            </div>
            <div className="list-user-content">
                {state.listUsers && state.listUsers.length > 0 &&
                    state.listUsers.map((item, index) => {
                        return (
                            <div className="child" key={item.id}>
                                {index + 1} -- {item.first_name} {item.last_name}
                            </div>

                        )
                    })
                }
            </div>
        </div>
    )
}
export default Color(ListUser)