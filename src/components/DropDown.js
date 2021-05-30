import React,{useState,useContext, useEffect} from 'react';
import "./styles/DropDown.css";
import {DataContext} from "../context/DataContext";
import {ResultContext} from "../context/ResultContext";
function DropDown() {

    const {treeData,dispatch} = useContext(DataContext);
    const {output,dispatchOutput} = useContext(ResultContext);
    function handelChange(e){
        console.log(e.target.value);
        dispatchOutput({
            type:e.target.value,
            data:treeData
        })
        // e.target.reset();

    }

    return (

        <div className="dropdowm-component">
            
            <select className="dropdown" id="algorithms" onChange={(e)=>{handelChange(e)}}>
                <option className="dropdown-content" value="select">Select An Algorithm</option>
                <option className="dropdown-content" value="Inorder">Inorder Traversal</option>
                <option className="dropdown-content" value="Preorder">Preorder Traversal</option>
                <option className="dropdown-content" value="Postorder">Postorder Traversal</option>
                <option className="dropdown-content" value="Levelorder">Levelorder Traversal</option>
            </select>
            
        </div>
    )
}

export default DropDown;
