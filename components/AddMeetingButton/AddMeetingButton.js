import styled from "styled-components";
import Link from "next/link";
export default function AddMeetingButton() {
  return (
    <StyledAddButton href="/meetings/new-meeting">
      Neues Date anlegen
    </StyledAddButton>
  );
}

const StyledAddButton = styled(Link)`
  text-decoration: none;
  color: var(--black);
  background-color: var(--yellow);
  vertical-align: middle;
  line-height: 2rem;
  width: auto;
  padding: 0.5rem 1rem;
  border-radius: 10px;
`;
