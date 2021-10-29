import React from 'react'
import uuid from "uuid/dist/v4"
import Wrapper from "./Wrapper"
function OuterWrapper({date,wrapperData,setData}) {
    return (
        <>
        <h4 className="text-start mb-4 mt-4">Attedence For {date}</h4>
            <Wrapper key={uuid()} wrapperData={wrapperData}  setData={setData} date={date} />
        </>
    )
}

export default OuterWrapper
