import React, {useState} from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import classes from "./LeafletMap.module.css";
import 'leaflet/dist/leaflet.css';
import { createPortal } from "react-dom";
import { SimpleBox } from "./SimpleBox";
import { SvgInline } from "./SvgInline";


const referenceDiv = document.createElement("div")
export const LeafletMap = () => {
    const [mapReady, setMapReady] = useState(false);
    console.log(mapReady);
    return (
      <>
      <div style={{
        
      }}>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false} whenReady={() => {
          setMapReady(true);
        }} className={classes.LeafletMap}>
           <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </MapContainer>
      </div>
      { createPortal(<div>
        <SimpleBox icon={<div><SvgInline url="/location-sign-svgrepo-com.svg"/> test code here</div>}/>
      </div>, referenceDiv)}
      </>
    )
}