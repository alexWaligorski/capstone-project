import styled from "styled-components";
import Link from "next/link";
import MeetingEntry from "../MeetingEntry/MeetingEntry";
import { useMeetingStore } from "../../store/store";
import { useState, useEffect } from "react";

export default function MeetingList() {
  const meetings = useMeetingStore((state) => state.meetings);

  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <>
      <StyledHeading>Geplante Dates</StyledHeading>
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
  border: 2px solid black;
  border-radius: 8px;
  background-color: var(--white);
  &:hover {
    background-color: var(--yellow-hover);
  }
`;

const StyledHeading = styled.h2`
  color: var(--white);
`;
