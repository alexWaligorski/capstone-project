import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";

export default function AddButton({ text, href }) {
  return (
    <StyledLink href={href}>
      {text}
      <StyledIcon src="/plus-icon.svg" alt="plus icon" width={20} height={20} />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  background-color: var(--yellow);
  text-decoration: none;
  border-radius: 10px;
  padding: 0.5rem 1rem;
  margin-top: 3rem;
  width: 10rem;
  position: relative;

  color: var(--black);
`;

const StyledIcon = styled(Image)`
   {
    position: absolute;
    top: 9px;
    right: 9px;
  }
`;
