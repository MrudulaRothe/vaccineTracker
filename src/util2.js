import React from 'react';
import numeral from "numeral"
import {Circle,Popup} from "react-leaflet";

const casesTypeColors = {
    confirmed: {
      hex: "#CC1034",   
      multiplier: 700,
    },
    recovered: {
      hex: "#7dd71d",
      multiplier: 1200,
    },
    dead: {
      hex: "#fb4443",    
      multiplier: 2000,
    },
  };

  export const prettyPrintStat = (stat) =>
  stat ? `+${numeral(stat).format("0.0a")}` : "+0";
 
// draw circles on the map with interactive tooltips
export const showDataOnMap = (data, casesType = "confirmed") =>
  data.map((state) => {
    console.log(state)
    return (<Circle
      center={[state.latitude, state.longitude]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        Math.sqrt(state[casesType]) * casesTypeColors[casesType].multiplier
      }
    >
    <Popup>
        <div className="info-container">           
            <div className="info-name">{state.state}</div>
            <div className="info-confirmed">Cases: {numeral(state.confirmed).format("0,0")}</div>
            <div className="info-recovered">Recovered: {numeral(state.recovered).format("0,0")}
            </div>
            <div className="info-deaths">Deaths: {numeral(state.dead).format("0,0")}</div>
            
        </div>
    </Popup>

    </Circle>)
  });
