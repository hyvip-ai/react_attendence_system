import React from 'react'
import Row from './Row'
import uuid from "uuid/dist/v4"
function Wrapper({warpperData,setData,date}) {

    return (
       <>
       {
           warpperData.map((item,index)=>{
               return <Row setData={setData} date={date} key = {uuid()} number={index+1} rowData={item}/>
           })
       }
       </>
    )
}

export default Wrapper

