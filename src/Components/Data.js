import React from 'react'
import uuid from "uuid/dist/v4"
import Wrapper from './Wrapper'
function Data({data,setData}) {
    return (
        <div className="container text-center mt-5">
            <h1>All Attendence List</h1>
                    {Object.keys(data).map((item)=>{
                        return (
                            <>
                                <h1 key={uuid()}>{item}</h1>
                                <Wrapper key={uuid()} setData={setData} date={item} warpperData={data[item]}/>
                            </>
                        )
                    })}
        </div>
    )
}

export default Data
