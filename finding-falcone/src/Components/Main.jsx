import React, { useContext} from "react";
import { Button,} from "@mui/material";
import Destination from "./Destination";
import Navbar from "./Navbar";
import TimeTaken from "./TimeTaken";
import { AuthContext } from "../Context/AuthProvider.js";
import { useNavigate } from "react-router-dom";
import "../css/Main.css";
import "../css/Destination.css";

function Main() {
  const { AllPlanets, AllVehicles,SubmitButton } = useContext(AuthContext);
  const navigate = useNavigate();
  const OnSubmit = (e) => {
    e.preventDefault();
    navigate("/Result");
  };

  return (
    <>
      <Navbar />
    <div className="head">
      <h2>Select Planets you want to Search in!!</h2>
      <TimeTaken />
      </div>
      
          <div className="center-body">
            <div className="Destination-select">
              {AllPlanets && AllVehicles ? <Destination /> : <></>}
            </div>
            
          </div>
      <div className="submit-button">
        <Button className="button" variant="contained" onClick={OnSubmit} disabled = {!SubmitButton}>
          Find Falcone!
        </Button>
       
      
      </div>
    </>
  );
}

export default Main;
