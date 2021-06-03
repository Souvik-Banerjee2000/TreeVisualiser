import React,{createContext,useState,useReducer} from "react";



export const CurrentProblemContext = createContext();

const CurrentProblemContextProvider = (props)=>{

    const [currentProblem,setCurrentProblem] = useState('');
    return (
        <CurrentProblemContext.Provider value={{ currentProblem, setCurrentProblem }}>
            {props.children}
        </CurrentProblemContext.Provider>
    )
}
export default CurrentProblemContextProvider;