import React,{useState,useContext, useEffect, useRef} from 'react';
import "./styles/DropDown.css";
import {DataContext} from "../context/DataContext";
import {ResultContext} from "../context/ResultContext";
function DropDown() {

    const {treeData,dispatch} = useContext(DataContext);
    const {output,dispatchOutput} = useContext(ResultContext);
    const algorithm = useRef("Select");
    function handelChange(e){
        console.log(e.target.value);
        algorithm.current = e.target.value;
        dispatchOutput({
            type:e.target.value,
            data:treeData
        })
        // e.target.reset();

    }

    useEffect(()=>{
        dispatchOutput({
            type:algorithm.current,
            data:treeData
        })
    },[treeData])

    return (

        <div className="dropdowm-component">
            
            <select className="dropdown" style={{backgroundColor:'#F0F4F7', border:'1px solid #2e2e2e',display:'flex',alignItems:'center',justifyContent:'center'}} id="algorithms" onChange={(e)=>{handelChange(e)}}>
                <option className="dropdown-content" value="Select">Select An Algorithm</option>
                <option className="dropdown-content" value="Inorder">Inorder Traversal</option>
                <option className="dropdown-content" value="Preorder">Preorder Traversal</option>
                <option className="dropdown-content" value="Postorder">Postorder Traversal</option>
                <option className="dropdown-content" value="Levelorder">Levelorder Traversal</option>
                <option className="dropdown-content" value="LeftView">LeftView</option>
                <option className="dropdown-content" value="RightView">RightView</option>
            </select>
            
        </div>
    )
}

export default DropDown;
