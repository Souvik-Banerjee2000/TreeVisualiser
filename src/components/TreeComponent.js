import React,{useContext,useEffect, useState,useRef} from 'react';
import {DataContext} from "../context/DataContext";
import {SubmissionContext} from "../context/SubmissionContext";
import Tree from 'react-d3-tree';

import { useCenteredTree } from "../helpers";

function TreeComponent() {



    const orgChart = {
        name: 'CEO',
        attributes:{
          leftChildName:'',
          rightChildName:''
        },
        children:[  ]
    };


    const {treeData,dispatch} = useContext(DataContext);
    const {submission} = useContext(SubmissionContext);
    const [translate, containerRef] = useCenteredTree();

    // useEffect(()=>{
    //     dispatch({
    //         type:'add',
    //         parentValue:'',
    //         nodeValue:''
    //     })
    // },[submission])


    
    return (
        
        <div id="treeWrapper" style={{ width: '100vw', height: '100vh' }}  >
            {console.log(treeData)}
            {console.log(orgChart)}
            {Object.keys(treeData).length === 0 ?(
                <></>
            ):(
              <Tree 
                data={treeData}
                orientation={'vertical'}
                translate={translate}
            />
            )}
            
        </div>
        
    )
}

export default TreeComponent;
