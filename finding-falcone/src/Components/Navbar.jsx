import React from "react";
import "../css/Navbar.css";


function Navbar() {


  const Reset = () => {
    window.location.reload();
  };

  return (
    <>

      <div className="nav">
        <div>
          <h2>Finding Falcone!</h2>
        </div>
        <div>   <button  className="reset" onClick={Reset} >Reset</button></div>
      
      </div>
    </>
  );
}

export default Navbar;
