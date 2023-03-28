import styled from "styled-components";
import MeetingEntry from "../MeetingEntry/MeetingEntry";
export default function MeetingList({ meetingData }) {
  return (
    <>
      <h2>Geplante Dates</h2>
      <ul>
        {meetingData.map((meeting) => (
          <li key={meeting.id}>
            <MeetingEntry meeting={meeting} />
          </li>
        ))}
      </ul>
    </>
  );
}
