import Data from "./Components/Data";
import Form from "./Components/Form";

import {useEffect, useState} from 'react'
function App() {
  const [attendencedata, setattendencedata] = useState({})
  useEffect(()=>{
    console.log("Effect Runnig")
    if(localStorage.getItem("storedAttendence")){
      setattendencedata({...localStorage.getItem("storedAttendence")})
    }
  },[])
  const addAttendencedata = (name,date,inTime)=>{
    setattendencedata((prev)=>{
        const allAttendence = {...prev}
        
        const dateArray = Object.keys(prev)
        if(dateArray.includes(date)){
          let attendenceArray = [...allAttendence[date]]
          let singleAttendence = {
            name,
            inTime,
            breakInTime:"",
            breakOutTime:"",
            isEditable:true,
            outTime:""
          }
          attendenceArray.push(singleAttendence);
         
          allAttendence[date] = attendenceArray;
          console.log(allAttendence)
          return allAttendence
        }
        else{
          let attendenceArray = []
          let singleAttendence = {
            name,
            inTime,
            breakInTime:"",
            breakOutTime:"",
            isEditable:true,
            outTime:""
          }
          attendenceArray.push(singleAttendence)
          allAttendence[date] = attendenceArray
          console.log(allAttendence)
        
          return allAttendence
        }
    })
  }
  return (
    <div className="container">
      <Form addData={addAttendencedata}/>
      <Data setData={setattendencedata} data={attendencedata}/>
    </div>
  );
}

export default App;
