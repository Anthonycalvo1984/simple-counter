import React from "react";

const SecondsCounter = (props) => {
  

  return (
    <>
    
      <div className="container fluid m-5 w-75">
        <h1 className="row p-5">Seconds Counter</h1>
        <div className="row ms-4 p-2 text-bg-dark">
        <i class="display-5 col-1 fa-regular fa-clock rounded"></i>
        <div className="display-1 col-1 rounded">{props.hora3}</div>
        <div className="display-1 col-1 rounded">{props.hora2}</div>
        <div className="display-1 col-1 rounded">{props.hora1}</div>
        <div className="display-1 col-1 rounded">{props.centenaSeconds}</div>
          <div className="display-1 col-1 rounded">{props.decenaSeconds}</div>
          <div className="display-1 col-1 rounded">{props.seconds}</div>
        </div>
      </div>
    </>
  );
};

export default SecondsCounter;