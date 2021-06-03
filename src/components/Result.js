import React,{useContext} from 'react'
import {ResultContext} from "../context/ResultContext";
import {CurrentProblemContext} from "../context/CurrentProblemContext";
import "./styles/Result.css";
function Result() {
    const {output,dispatchOutput} = useContext(ResultContext);
    const {currentProblem,setCurrentProblem} = useContext(CurrentProblemContext);
    return (
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',width:'100vw',height:'fit-content'}}>
        {output.length > 0 && 
        
         <div className="resultcontainer"> 
         {output[0] !== null ? 
         <div>
            <div style={{display:'flex'}}> 
            {currentProblem} Result :

            {output.map((d,index)=>(
                <div key={index} style={{marginRight:'10px'}} > {d} </div>
            ))}
            </div>

         </div>  : <div> Invalid Index Given </div>}
          
         </div>}
        </div>
    )
}

export default Result;
