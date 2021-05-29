import React , {createContext,useState,useReducer} from "react";
import {DataReducer} from "../reducer/DataReducer";

export const DataContext = createContext();


const DataContextProvider = (props)=>{

    const [treeData,dispatch] = useReducer(DataReducer,{});
    return (
        <DataContext.Provider value={{ treeData, dispatch }}>
            {props.children}
        </DataContext.Provider>
    )
}
export default DataContextProvider;