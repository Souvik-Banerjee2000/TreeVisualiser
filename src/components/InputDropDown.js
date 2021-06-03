import React,{useState,useEffect,useRef,useContext} from 'react'
import DropDownPng from "../assets/dropdownpng.png";
import "./styles/InputDropDown.css";
import Drawer from "./Drawer";
import {DataContext} from "../context/DataContext";
import {ResultContext} from "../context/ResultContext";


const usePreviousVal = (value) => {
    const ref = useRef();
    useEffect(() => {

      ref.current = value;
    });
    return ref.current;
}

const useHasChanged = (val)=>{

    const prevVal = usePreviousVal(val);
    return prevVal !== val;
}



function InputDropDown() {

    const [drawerOpen, setDrawerOpen] = useState(false);
    const [taskValue,setTaskValue] = useState('');
    const [inputValue, setInputValue] = useState('');

    const {treeData,dispatch} = useContext(DataContext);
    const {output,dispatchOutput} = useContext(ResultContext);
    const hasTreeDataChanged = useHasChanged(treeData);



    useEffect(()=>{
        // console.log("rendered");
        if(hasTreeDataChanged){
            if(taskValue === "Deletion")
                console.log("TreeData Changed");
                    
        }
    })

    useEffect(()=>{

        if(!drawerOpen){
            if(taskValue !== '' && inputValue!== ''){
                if(taskValue === 'Deletion'){
                    if(Object.keys(treeData).length>0){
                        // console.log(inputValue);
                        dispatch({
                            type:"Deletion",
                            inputValue
                        })
                    }
                    setInputValue('');
                }
                else{
                    if(Object.keys(treeData).length>0){
                        // console.log(inputValue);
                        dispatchOutput({
                            type:taskValue,
                            data:treeData,
                            inputValue
                        })
                    }
                    setInputValue('');
                }
            }
        }

    },[drawerOpen])



    return (

        <div style={{display:'flex',justifyContent:'center',alignItems:'flex-start'}}>
            
            <div style={{display:'flex',flexDirection:'column',paddingTop:'20px'}}>  
                <label style={{marginBottom:'7px',fontSize:'14px'}}> Choose task from below dropdown </label>  
                <div> 
                    <input value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}  style={{border:'1px solid black',marginRight:'8px'}} className="inputdropdown" id="inputdropdown" type="number" placeholder="Input value" /> 
                    <img onClick={()=>{setDrawerOpen(!drawerOpen)}} src={DropDownPng} alt="dropdown" height="10"/>
                </div>
                {drawerOpen && <Drawer setDrawerOpen={setDrawerOpen} drawerOpen={drawerOpen} setTaskValue={setTaskValue} setInputValue={setInputValue} />} 
                
            </div>
        </div>
    )
}

export default InputDropDown;
