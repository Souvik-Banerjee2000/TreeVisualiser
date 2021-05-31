import React,{useState,useEffect,useRef, useContext} from 'react'
import {DataContext} from "../context/DataContext";
import {SubmissionContext} from "../context/SubmissionContext";
import "./styles/Form.css";
function Form() {

  const [inputValue,setInputValue] = useState(0);
  const {setSubmission} = useContext(SubmissionContext);
  const {treeData,dispatch} = useContext(DataContext);


  function handleSubmit(e){
    // setSubmission(prevSubmission => prevSubmission+1);

    e.preventDefault();
    console.log("Submit");
    dispatch({
        type:'Add',
        parentValue:'',
        nodeValue:inputValue
    })
    e.target.reset();

  }

    return (
        
        <form className="inputform" onSubmit={(e)=>{handleSubmit(e)}} >
            <input type="number" style={{backgroundColor:'#F0F4F7' , border:'1px solid #2e2e2e'}} placeholder="Enter node value" onChange= {(e)=>{setInputValue(Number(e.target.value))}}></input>
            <input type="submit" value="Add"></input>
        </form>
    
    )
}

export default Form;
