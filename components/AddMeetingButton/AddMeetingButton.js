import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function AddMeetingButton() {
  return (
    <StyledLink href="/meetings/new-meeting">
      NEUES DATE
      <StyledIcon src="/plus-icon.svg" alt="plus icon" width={20} height={20} />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  background-color: var(--yellow);
  text-decoration: none;
  border-radius: 10px;
  width: auto;
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  color: var(--black);
`;

const StyledIcon = styled(Image)`
   {
    position: relative;
    top: 4px;
    left: 5px;
  }
`;
