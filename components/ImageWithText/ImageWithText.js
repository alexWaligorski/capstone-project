import styled from "styled-components";
import Image from "next/image";

export default function ImageWithText({ image, altText, text, ...rest }) {
  return (
    <StyledDiv>
      <Image src={image} alt={altText} width={25} height={25} {...rest} />
      <StyledPargraph>{text}</StyledPargraph>
    </StyledDiv>
  );
}

const StyledPargraph = styled.p`
  display: inline-block;
  width: 50%;
  margin: 0;
  text-align: right;
`;
const StyledDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  align-items: center;
  margin: 0.4rem 0.2rem;
`;
