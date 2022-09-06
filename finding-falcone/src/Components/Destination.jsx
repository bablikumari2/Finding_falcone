import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider.js";
import "../css/Destination.css";
import Vehicles from "../Components/Vehicles";
import "../css/Vehicle.css"
import {
  Paper,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
 
} from "@mui/material";

function Destination() {
  const {
    selectedPlanets,
    SetselectedPlanets,
    AllPlanets,
  } = useContext(AuthContext);

   const OnSelectPlanet = (e, key) => {
    const SelPlanets = JSON.parse(JSON.stringify(selectedPlanets));
    SelPlanets[key] = e.target.value;
    SetselectedPlanets(SelPlanets);
  };

   const OptionsToRender = AllPlanets
   // eslint-disable-next-line
    ? AllPlanets.map((planet, index) => {
        if (!selectedPlanets.includes(planet.name)) {
          return (
            <MenuItem key={index} value={planet.name}>
              {planet.name}
            </MenuItem>
          );
        }
      })
    : null;

  const getDistance = (index) => {
    const choosenPlanet = AllPlanets.filter(
      (planet) => planet.name === selectedPlanets[index]
    );
    return choosenPlanet[0].distance;
  };

  return (
    <>
     
      <div className="Parent_Card">
      {selectedPlanets.map((planet, index) => {
          return (
            <div className="PlanetsAndVehicles" key={index}>
             
              <Paper elevation={5}>
                <FormControl fullWidth key = {index}>
                  <InputLabel id="label">
                    Destination {index + 1}
                  </InputLabel>
                  <Select
                    labelId="label"
                    id="demo-simple-select"
                    key={index}
                    value={selectedPlanets[index]}
                    onChange={(e) => OnSelectPlanet(e, index)}
                  >
                    <MenuItem key={index} value={selectedPlanets[index]}>
                      {selectedPlanets[index]}
                    </MenuItem>
                    {OptionsToRender}
                  </Select>
                  <>
                    {selectedPlanets[index] ? (
                      <>
                        <div className="Distance_measure">
                          Distance - {getDistance(index)}
                        </div>
                        <Vehicles
                          index={index}
                          PlanetDistance={getDistance(index)}
                        />
                      </>
                    ) : (
                      <></>
                    )}
                  </>
                </FormControl>
              </Paper>
            
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Destination;
