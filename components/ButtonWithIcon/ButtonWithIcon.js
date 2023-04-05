import styled from "styled-components";
import Image from "next/image";
export default function ButtonWithIcon({ text, source, alt, label, type }) {
  return (
    <StyledButton type={type} aria-label={label}>
      <StyledIcon src={source} alt={alt} width={20} height={20} />
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: var(--green);
  color: var(--white);
  border: none;
  border-radius: 8px;
  width: 35vw;
  line-height: 2rem;
  font-size: 16px;
  margin-top: 0.5rem;
  vertical-align: middle;
  padding-right: 0.5rem;
`;

const StyledIcon = styled(Image)`
  position: relative;
  top: 4px;
  left: 5px;
  margin-right: 1rem;
  color: var(--white);
`;
