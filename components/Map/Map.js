import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import styled from "styled-components";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function Map({ lat, long, address }) {
  return (
    <StyledMap center={[lat, long]} zoom={12} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[lat, long]}>
        <StyledPopup>{address}</StyledPopup>
      </Marker>
    </StyledMap>
  );
}

const StyledMap = styled(MapContainer)`
  width: 80%;
  height: 15rem;
  margin-bottom: 2rem;
`;

const StyledPopup = styled(Popup)`
  background-color: var(--red) !important;
  .leaflet-popup-content-wrapper {
    border-radius: 0;
    background-color: red;
    width: 70px;
  }

  .leaflet-popup-content {
    width: unset;
  }

  ${
    "" /*   .leaflet-popup-tip-container {
    visibility: hidden;
  } */
  }
`;
