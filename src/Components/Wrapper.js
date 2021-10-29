import React from 'react'
import Row from './Row'
function Wrapper({wrapperData,setData,date}) {

    return (
       <>
       {
           wrapperData.map((item,index)=>{
               return <Row setData={setData} date={date} key = {item.id} number={index+1} rowData={item}/>
           })
       }
       </>
    )
}

export default Wrapper

