import React,{useContext,useEffect, useState,useRef} from 'react';
import {DataContext} from "../context/DataContext";
import {SubmissionContext} from "../context/SubmissionContext";
import Tree from 'react-d3-tree';
import "./styles/Tree.css";
import { useCenteredTree } from "../helpers";

function TreeComponent() {



    const orgChart = {
        name: 'CEO',
        attributes:{
          leftChildName:'',
          rightChildName:''
        },
        children:[]
    };


    const {treeData,dispatch} = useContext(DataContext);
    const {submission} = useContext(SubmissionContext);
    const [translate, containerRef] = useCenteredTree();
    const [orientation,setOrientation] = useState("vertical");

    // useEffect(()=>{
    //     dispatch({
    //         type:'add',
    //         parentValue:'',
    //         nodeValue:''
    //     })
    // },[submission])


    
    return (
        <div>
            <div style={{display:'flex', width:'20vw', margin:'0 auto' ,justifyContent:'space-between'}}>
                <button onClick={()=>{setOrientation("vertical")}}>Vertical</button> <button onClick={()=>{setOrientation("horizontal")}}>Horizontal</button>
            </div>
            <div id="treeWrapper" ref={containerRef} style={{ width: '80vw', height: '100vh' }}  >
                {Object.keys(treeData).length === 0 ?(
                    <></>
                ):(
                <Tree 
                    data={treeData}
                    orientation={orientation}
                    translate={translate}
                    rootNodeClassName="node__root"
                    branchNodeClassName="node__branch"
                    leafNodeClassName="node__leaf"
                    pathClassFunc={() => 'custom-link'}

                />
                )}
                
            </div>
        </div>
        
    )
}

export default TreeComponent;
