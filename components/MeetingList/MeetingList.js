import styled from "styled-components";
import Link from "next/link";
import MeetingEntry from "../MeetingEntry/MeetingEntry";
import { useMeetingStore } from "../../pages";

export default function MeetingList() {
  const meetings = useMeetingStore((state) => state.meetings);

  return (
    <>
      <h2>Geplante Dates</h2>
      {meetings.length !== 0 ? (
        <ul>
          {meetings.map((meeting) => (
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
  color: var(--black);
  &:visited {
    color: var(--black);
  }
`;

const StyledListItem = styled.li`
  background-color: var(--white);
  &:hover {
    background-color: var(--yellow);
  }
`;
