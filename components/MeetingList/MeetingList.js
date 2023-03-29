import styled from "styled-components";
import Link from "next/link";
import MeetingEntry from "../MeetingEntry/MeetingEntry";
export default function MeetingList({ meetingData }) {
  return (
    <>
      <h2>Geplante Dates</h2>
      {meetingData.length !== 0 ? (
        <ul>
          {meetingData.map((meeting) => (
            <StyledListItem key={meeting.id}>
              <StyledEntry href={`/meetings/${meeting.id}`}>
                <MeetingEntry meeting={meeting} />
              </StyledEntry>
            </StyledListItem>
          ))}
        </ul>
      ) : (
        <h3>Noch keine geplanten Dates!</h3>
      )}
    </>
  );
}

const StyledEntry = styled(Link)`
  text-decoration: none;
  &:visited {
    color: #000000;
  }
`;

const StyledListItem = styled.li`
  &:hover {
    background-color: #fcebcc;
  }
`;
