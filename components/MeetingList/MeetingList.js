import styled from "styled-components";

export default function MeetingList({ meetingData }) {
  return (
    <>
      <h2>Geplante Dates</h2>
      <ul>
        {meetingData.map((meeting) => (
          <li key={meeting.id}>
            {meeting.location}
            {" / "}
            {meeting.date} {" / "} {meeting.time} {meeting.attending.length}
          </li>
        ))}
      </ul>
    </>
  );
}
