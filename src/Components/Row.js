import moment from "moment";
import React from "react";
import classes from "./row.module.css";
function Row({ rowData, number, date, setData }) {
  const breakInHandler = () => {
    const breakTime = moment().format("LT");
    setData((prev) => {
      const newAttendence = { ...prev };
      newAttendence[date][number - 1].breakInTime = breakTime;
      localStorage.setItem("storedAttendence",JSON.stringify(newAttendence))
      return newAttendence;
    });
  };
  const breakOutHandler = () =>{
    const breakOutTime = moment().format("LT");
    setData((prev) => {
        const newAttendence = { ...prev };
        newAttendence[date][number - 1].breakInTime = newAttendence[date][number - 1].breakInTime?newAttendence[date][number - 1].breakInTime:"Not Used"
        newAttendence[date][number - 1].breakOutTime = breakOutTime;
      localStorage.setItem("storedAttendence",JSON.stringify(newAttendence))
        return newAttendence;
      });
  }
  const outHandler = () => {
      const outTime = moment().format("LT");;
      setData((prev) => {
        const newAttendence = { ...prev };
        newAttendence[date][number - 1].breakInTime = newAttendence[date][number - 1].breakInTime?newAttendence[date][number - 1].breakInTime:"Not Used"
        newAttendence[date][number - 1].breakOutTime = newAttendence[date][number - 1].breakOutTime?newAttendence[date][number - 1].breakOutTime:"Not Used" 
        newAttendence[date][number - 1].outTime = outTime;
        newAttendence[date][number - 1].isEditable = false;
      localStorage.setItem("storedAttendence",JSON.stringify(newAttendence))
        return newAttendence;
      });
  };
  return (
    <div className={classes.myCard}>
      <div>{number}</div>
      <div>{rowData.name}</div>
      <div className={classes.button}>
        <button
         disabled={
            rowData.inTime ? true : rowData.isEditable ? false : true
          }
          className="btn btn-outline-primary"
        >
          {rowData.inTime ? `In Time : ${rowData.inTime}` : "In"}
        </button>
      </div>
      <div>
        <button
          disabled={
            rowData.breakOutTime?true:(rowData.breakInTime ? true : rowData.isEditable ? false : true)
          }
          onClick={breakInHandler}
          className="btn btn-outline-success"
        >
          
          {rowData.breakInTime
            ? `BreakIn Time : ${rowData.breakInTime}`
            : "Break In"}
        </button>
      </div>
      <div>
        <button onClick={breakOutHandler} disabled={
            rowData.breakOutTime ? true : rowData.isEditable ? false : true
          } className="btn btn-outline-warning">{rowData.breakOutTime
            ? `Breakout Time : ${rowData.breakOutTime}`
            : "Breakout"}</button>
      </div>
      <div>
        <button disabled={
            rowData.outTime ? true : rowData.isEditable ? false : true
          } className="btn btn-outline-danger" onClick={outHandler}> {rowData.outTime
            ? `Out Time : ${rowData.outTime}`
            : "Out"}</button>
      </div>
    </div>
  );
}

export default Row;
