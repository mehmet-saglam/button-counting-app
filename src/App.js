import React, { useState } from 'react'
import './style.css'
import SetText from './setText'



const App = () => {

    const [button, setButton] = useState({
        blueCount: 0,
        yellowCount: 0
      })

    const [var1,setVar1] = useState("as")
      
    const updateButton = (renk) => {

        if( renk === 'blue') {
            setButton(prev => {
                return { ...prev, blueCount: prev.blueCount +1}
            });
            setVar1(renk);
          } else {
            setButton(prev => {
              return { ...prev, yellowCount: prev.yellowCount +1}
            });
            setVar1(renk);
          }
      
    }
  
    const resetButton = () => {
        console.log("Reset")
        setButton( prev => {
            return { ...prev, color: '', blueCount: 0, yellowCount: 0}
          })
    }

    return (
        <>
        <div style = {{textAlign: "center"}}>
            <div>
              <button className="btn blue" type="button" onClick = {() => updateButton('blue')}>
                Blue
              </button>
              <button className="btn yellow" type="button" onClick = {() => updateButton('yellow')}>
                Yellow
              </button>
            </div>
            <SetText button = {button} var1={var1} />
              <button className="btn" type="button" onClick = {() => resetButton()}>
                Reset
              </button>
        </div> 
        </>
      )  
}
    

export default App

