import moment from 'moment';
import React,{useRef} from 'react'

function Form({addData}) {
    const nameref = useRef("")
    const formSubmitHandler = (e)=>{
        e.preventDefault()
        const name = nameref.current.value;
        const date = moment().format('LL')
        const inTime = moment().format('LT')
        addData(name,date,inTime)
        nameref.current.value = ""
    }
    return (
        <>
            <div className="container mt-3 text-center">
                <form onSubmit={formSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input ref={nameref} type="text" required className="form-control" id="floatingInput" placeholder="Enter Your Name"/>
                        <label htmlFor="floatingInput">Enter Your Name</label>
                    </div>
                    <button className="btn btn-outline-info">Add Your Attendence</button>
                </form>
            </div>
        </>
    )
}

export default Form
