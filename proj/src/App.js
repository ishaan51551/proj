import React, { useState } from 'react'
import backendData from './data';

// console.log(backendData);
const App = () => {
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  
  const handleOpen1 = () => {
    setOpen(!open);
    
  }
  const handleOpen2 = () => {
    setOpen2(!open2);
  }
  const handleOpen3 = () => {
    setOpen3(!open3);
  }
  const handleOpen4 = () => {
    setOpen4(!open4);
  }
  return (
    <>
      <ul>
        <li>{backendData[0].name}</li>

        <li ><button onClick={handleOpen1}>{backendData[1].name} </button>
          {open ? (
            <ul>
              <li>{backendData[1].children[0].name}</li>
              <li>{backendData[1].children[1].name}</li>
            </ul>
          )
            : null}</li>




        <li ><button onClick={handleOpen2}>{backendData[2].name} </button>
          {open2 ? (
            <ul>
              <li  ><button  onClick={handleOpen3}>{backendData[2].children[0].name}</button>
              {open3 ? (
            <ul>
              <li>{backendData[2].children[0].children[0].name}</li>
              <li>{backendData[2].children[0].children[1].name}</li>
              <li>{backendData[2].children[0].children[2].name}</li>
            
            </ul>
          )
            : null}</li>
              <li><button  onClick={handleOpen4}>{backendData[2].children[1].name}</button>
              {open4 ? (
            <ul>
              <li>{backendData[2].children[1].children[0].name}</li>
            </ul>
          )
            : null}</li>
            </ul>
          )
            : null}</li>
      
        <li>{backendData[3].name}</li>
        <li>{backendData[4].name}</li>
      </ul>
    </>
  )
}

export default App
