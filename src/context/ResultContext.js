import React , {createContext,useState,useReducer} from "react";
import {ResultReducer} from "../reducer/ResultReducer";

export const ResultContext = createContext();


const ResultContextProvider = (props)=>{

    const [output,dispatchOutput] = useReducer(ResultReducer,[]);
    return (
        <ResultContext.Provider value={{ output, dispatchOutput }}>
            {props.children}
        </ResultContext.Provider>
    )
}
export default ResultContextProvider;