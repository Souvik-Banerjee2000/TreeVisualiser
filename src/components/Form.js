import React,{useState,useEffect,useRef, useContext} from 'react'
import {DataContext} from "../context/DataContext";
import {SubmissionContext} from "../context/SubmissionContext";
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

  }

    return (
        
        <form onSubmit={(e)=>{handleSubmit(e)}}>
            <input type="number" onChange= {(e)=>{setInputValue(Number(e.target.value))}}></input>
            <input type="submit" value="Submit"></input>
        </form>
    
    )
}

export default Form;
