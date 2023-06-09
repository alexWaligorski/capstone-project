import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styled from "styled-components";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ lat, long, location }) {
  return (
    <StyledMap center={[lat, long]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <Popup>{location}</Popup>
      </Marker>
    </StyledMap>
  );
}

const StyledMap = styled(MapContainer)`
  width: 80%;
  height: 15rem;
  margin-bottom: 2rem;
`;
