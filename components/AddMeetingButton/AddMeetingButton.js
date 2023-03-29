import styled from "styled-components";
import Link from "next/link";
export default function AddMeetingButton({ onAddMeeting }) {
  console.log(onAddMeeting);
  return (
    <StyledAddButton
      href={{
        pathname: "/meetings/new-meeting",
        query: onAddMeeting,
      }}
    >
      Neues Date anlegen
    </StyledAddButton>
  );
}

const StyledAddButton = styled(Link)`
  text-decoration: none;
  background-color: lightblue;
  vertical-align: middle;
  line-height: 2rem;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;
