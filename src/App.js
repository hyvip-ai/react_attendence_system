import Data from "./Components/Data";
import Form from "./Components/Form";
import uuid from "uuid/dist/v4"
import {useEffect, useState} from 'react'
import CreateCSV from "./Components/CreateCSV";
function App() {
  const [attendencedata, setattendencedata] = useState({})
  useEffect(()=>{
    
    console.log("App.js useEffect Running")
    if(localStorage.getItem("storedAttendence")){
     
      setattendencedata(JSON.parse(localStorage.getItem("storedAttendence")))
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
            outTime:"",
            id:uuid()
          }
          attendenceArray.push(singleAttendence);
         
          allAttendence[date] = attendenceArray;
          localStorage.setItem("storedAttendence",JSON.stringify(allAttendence))
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
            outTime:"",
            id:uuid()
          }
          attendenceArray.push(singleAttendence)
          allAttendence[date] = attendenceArray
          localStorage.setItem("storedAttendence",JSON.stringify(allAttendence))
          return allAttendence
        }
    })
  }
  return (
    <div className="container">
      <Form addData={addAttendencedata}/>
      {Object.keys(attendencedata).length?<Data setData={setattendencedata} data={attendencedata}/>:null}
      {Object.keys(attendencedata).length?<CreateCSV csvData={attendencedata}/>:null}
    </div>
  );
}

export default App;
