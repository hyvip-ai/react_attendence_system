import React,{useEffect} from 'react'
import uuid from "uuid/dist/v4"
import OuterWrapper from './OuterWrapper'
function Data({data,setData}) {
    useEffect(() => {
        console.log(data)
       console.log("Data Rerender")
    }, [data])
    return (
        <div className="container text-center mt-5">
            <h1>All Attendence List</h1>
                    {Object.keys(data).map((item)=>{
                        return (
                        
                                <OuterWrapper  key={uuid()} date={item} wrapperData={data[item]} setData={setData}/>
                                
                                
                          
                        )
                    })}
        </div>
    )
}

export default Data
