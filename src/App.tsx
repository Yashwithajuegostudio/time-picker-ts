import React from 'react';
import './App.css';
import { Button } from './components/Button/Button';


function App() {
  const handler=()=>{
    console.log("helllo")
  }
  return (
   <Button title={"hello"} clickHandler={()=>{handler()}}/>
  );
}

export default App;
