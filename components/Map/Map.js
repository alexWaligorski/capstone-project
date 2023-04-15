import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styled from "styled-components";

import { MapContainer, TileLayer, Marker } from "react-leaflet";

export default function Map({ position }) {
  return (
    <StyledMap center={position} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}></Marker>
    </StyledMap>
  );
}

const StyledMap = styled(MapContainer)`
  width: 80%;
  height: 15rem;
  margin-bottom: 2rem;
`;
