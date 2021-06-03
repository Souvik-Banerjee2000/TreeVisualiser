
import React from "react";
import './App.css';
import TreeComponent from "./components/TreeComponent";
import DataContextProvider from "./context/DataContext";
import ResultContextProvider from "./context/ResultContext";
import SubmissionContextProvider from "./context/SubmissionContext";
import CurrentProblemContextProvider from "./context/CurrentProblemContext";
import Form from "./components/Form";
import Result from "./components/Result";
import DropDown from "./components/DropDown"
import InputDropDown from "./components/InputDropDown"


function App() {

  return (
    
    <DataContextProvider>
      <ResultContextProvider>    
        <SubmissionContextProvider>  
        <CurrentProblemContextProvider>
          <div style={{width:'100vw',display:'flex',alignItems:'center',justifyContent:'center',marginBottom:'20px'}}>
            <h1 style={{ margin:'0 auto' , color:'#2c88d9'}}>Binary Search Tree</h1>
        </div>
          <div style={{display:'flex',flexDirection:'column'}}>
          <Form/>
          <InputDropDown/>
          <DropDown/>
          <Result/>
          </div>
          <TreeComponent/>
          </CurrentProblemContextProvider>
        </SubmissionContextProvider>
      </ResultContextProvider>
    </DataContextProvider>

  );
}

export default App;
