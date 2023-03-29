import styled from "styled-components";
import Image from "next/image";

export default function MeetingEntry({ meeting }) {
  return (
    <StyledEntry>
      <span>{meeting.location}</span>
      {" / "}
      <span>{meeting.date}</span> {" / "} <span>{meeting.time}</span> {" / "}{" "}
      <span>{meeting.attending.length}</span>
      <StyledDogIcon src="dog-icon.svg" alt="dog icon" width={16} height={16} />
    </StyledEntry>
  );
}

const StyledEntry = styled.section`
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  justify-content: center;
  border: 2px solid black;
  border-radius: 8px;
  padding: 1rem 0;
  width: 90vw;
  text-align: center;
  margin-bottom: 0.5rem;
`;

const StyledDogIcon = styled(Image)`
  position: relative;
  top: 2px;
  left: 4px;
`;
