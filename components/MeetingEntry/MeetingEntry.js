import styled from "styled-components";
import Image from "next/image";

export default function MeetingEntry({ meeting }) {
  return (
    <StyledEntry>
      <StyledEntryHeading>{meeting.location}</StyledEntryHeading>
      <StyledDiv>
        <span>{meeting.date}</span> {" / "} <span>{meeting.time}</span> {" / "}{" "}
        <span>{meeting.attending.length}</span>
        <StyledDogIcon
          src="dog-icon.svg"
          alt="dog icon"
          width={16}
          height={16}
        />
      </StyledDiv>
    </StyledEntry>
  );
}

const StyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  gap: 0.8rem;
  justify-content: flex-start;
`;

const StyledEntry = styled.section`
  border: 2px solid black;
  border-radius: 8px;
  padding: 1rem 1rem;
  width: 85vw;
  text-align: left;
  margin-bottom: 0.5rem;
`;

const StyledDogIcon = styled(Image)`
  position: relative;
  top: 2px;
  left: 4px;
`;

const StyledEntryHeading = styled.h3`
  color: #f85220;
  font-weight: bold;
  margin: 0 0 0.5rem; ;
`;
