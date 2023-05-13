import { useState } from "react";
import './Demo.scss'


let ChildComponent = (props) => {
    let [flag, setFlag] = useState(true);

    let handleFlag = () => {
        setFlag(
            !flag
        )
    }

    let handleOnClickDelete = (job) => {
        props.deleteAJob(job)
    }

    let compu
    return (
        <>

            {!flag ?
                <div><button className="btn-show" onClick={() => { handleFlag() }}>Show</button></div>
                :
                <>
                    <div className="job-list">
                        {
                            props.arrProps.map((item, index) => {

                                if (item.salary >= 500) {
                                    return (
                                        <>
                                            <div key={item.id}>{item.title} --- {item.salary}$ <span onClick={() => handleOnClickDelete(item)}>X</span></div>
                                        </>
                                    )
                                }
                            })
                        }
                    </div >
                    <div><button onClick={() => handleFlag()}>Hide</button></div>
                </>
            }
        </>

    )
}

export default ChildComponent;


/////////////////////

