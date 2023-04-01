import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function AddMeetingButton() {
  return (
    <StyledAddButton>
      <StyledLink href="/meetings/new-meeting">NEUES DATE</StyledLink>
      <StyledIcon src="/plus-icon.svg" alt="plus icon" width={20} height={20} />
    </StyledAddButton>
  );
}

const StyledAddButton = styled.div`
  background-color: var(--yellow);
  border-radius: 10px;
  width: auto;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
`;

const StyledIcon = styled(Image)`
  position: relative;
  top: 4px;
  left: 5px;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: var(--black);
  margin-bottom: 1rem;
`;
