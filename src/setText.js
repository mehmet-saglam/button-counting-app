import React from "react";

const SetText = ({button, var1}) => {
  return(
    <>
    <div>
    {button.blueCount > 0 ? (
        <>
        <p>Blue button has been clicked!</p>
        <p>Blue button has been clicked {button.blueCount} times!</p>
        </>
    ) :
    ( ""
    )}
    </div>

    <div>
    {button.yellowCount > 0  ? (
        <>
        <p>Yellow button has been clicked!</p>
        <p>Yellow button has been clicked {button.yellowCount} times!</p>
        </>
    ) :
    ( ""
    )} 
    </div>
    </>
  );
};

export default SetText;

