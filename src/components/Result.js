import React,{useContext} from 'react'
import {ResultContext} from "../context/ResultContext";
import "./styles/Result.css";
function Result() {
    const {output,dispatchOutput} = useContext(ResultContext);

    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'fit-content'}}>
        {output.length > 0 && 
         <div className="resultcontainer"> 
         Algorithm Result :-
         <br/>
            {output.map((d,index)=>(
                <div key={index} style={{marginRight:'10px'}} > {d} </div>
            ))}
         </div>}
        </div>
    )
}

export default Result;
