import Image from "next/image";
import styled from "styled-components";

export default function DogName({ attendingDog }) {
  return (
    <StyledSection>
      <Image src="dog-icon.svg" alt="dog icon" width={25} height={25} />
      <p>{attendingDog}</p>
    </StyledSection>
  );
}

const StyledSection = styled.section`
  display: flex;
  gap: 1.2rem;
  margin: 0.5rem;
  align-items: center;
`;
