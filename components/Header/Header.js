import styled from "styled-components";
import Image from "next/image";

export default function Header() {
  return (
    <StyledHeader>
      <StyledHeaderIcon
        src="/black-white-dog-icon.svg"
        alt="dog-icon"
        width={40}
        height={40}
      />
      <Heading>DogDates</Heading>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 10vh;
  margin-bottom: 1rem;
  position: fixed;
  top: 0;
  background-color: var(--white);
  box-shadow: 0 3px 10px var(--stone);
`;
const Heading = styled.h1`
  margin-top: 0.8rem;
  text-align: center;
`;

const StyledHeaderIcon = styled(Image)`
  position: relative;
  top: 0.8rem;
  margin-right: 0.5rem;
`;
