import { useState } from "react"
import Color from "../HOC/color"
import { connect, useDispatch, useSelector, useStore } from "react-redux"


// const mapStateToProps = (state) => {
//     return { dataRedux: state.users }
// }


let Home = () => {
    // let listUsers = props.dataRedux
    const listUsers = useSelector(state => state.users)
    const dispatch = useDispatch()


    // let handleDeleteUser = (user) => {

    // }
    return (
        <>
            <div>
                Hello World from Homepage with Eric & Hoi Dan IT
            </div>
            <div >
                {listUsers && listUsers.length > 0 &&
                    listUsers.map((item, index) => {
                        return (
                            <div key={item.id}>
                                {index + 1} -- {item.name}
                                &nbsp;
                                <button onClick={() => dispatch({ type: 'DELETE_USER', payload: { item } })}>Delete</button>
                                &nbsp;
                                <button onClick={() => dispatch({ type: 'ADD_USER', payload: { item } })}>Add New</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Color(Home)

// export default connect((mapStateToProps)Color(Home))