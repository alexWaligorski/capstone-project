import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css";
import Link from "next/link";
import styled from "styled-components";
import { useMeetingStore } from "../../store/store";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function AllMeetingsMap() {
  const meetings = useMeetingStore((state) => state.meetings);

  const bounds = meetings.map((meeting) => [meeting.lat, meeting.long]);

  return (
    <StyledMap bounds={bounds} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {meetings.length &&
        meetings.map((meeting) => (
          <Marker key={meeting.id} position={[meeting.lat, meeting.long]}>
            <Popup>
              <Link href={`/meetings/${meeting.id}`}>{meeting.location}</Link>
            </Popup>
          </Marker>
        ))}
    </StyledMap>
  );
}

const StyledMap = styled(MapContainer)`
  width: 80%;
  height: 65vh;
  margin-bottom: 2rem;
`;
