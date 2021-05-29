import React , {createContext,useState} from "react";


export const SubmissionContext = createContext();


const SubmissionContextProvider = (props)=>{

    const [submission,setSubmission] = useState(0);
    return (
        <SubmissionContext.Provider value={{ submission, setSubmission }}>
            {props.children}
        </SubmissionContext.Provider>
    )
}

export default SubmissionContextProvider;