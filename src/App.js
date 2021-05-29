
import React from "react";
import './App.css';
import TreeComponent from "./components/TreeComponent";
import DataContextProvider from "./context/DataContext";
import SubmissionContextProvider from "./context/SubmissionContext";
import Form from "./components/Form";

function App() {

  return (
    
    <DataContextProvider>
      <SubmissionContextProvider>      
        <Form/>
        <TreeComponent/>
      </SubmissionContextProvider>
    </DataContextProvider>

  );
}

export default App;
