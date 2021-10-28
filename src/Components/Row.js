import moment from 'moment'
import React,{useEffect} from 'react'
import classes from "./row.module.css"
function Row({rowData,number,date,setData}) {
    useEffect(()=>{
        console.log(rowData)
    },[rowData])
    const breakInHandler = ()=>{
        const breakTime = moment().format('LT')
        console.log(breakTime)
        setData(prev=>{
            const newAttendence = {...prev};
            newAttendence[date][number-1].breakInTime = breakTime;
            return newAttendence;
        })

    }
    return (
        <div className={classes.myCard}>
            <div>{number}</div>
            <div>{rowData.name}</div>
            <div><button disabled={rowData.inTime?true:false} className="btn btn-outline-primary">{rowData.inTime || "In"}</button></div>
            <div><button disabled={rowData.breakInTime?true:false} onClick={breakInHandler} className="btn btn-outline-success">{rowData.breakInTime || "Break In"}</button></div>
            <div><button className="btn btn-outline-warning">Break Out</button></div>
            <div><button className="btn btn-outline-danger">Out</button></div>
        </div>
    )
}

export default Row
