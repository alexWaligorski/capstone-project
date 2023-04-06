import styled from "styled-components";
import Image from "next/image";
export default function ButtonWithIcon({
  text,
  source,
  alt,
  label,
  type,
  handleClick,
  functionality,
}) {
  return (
    <StyledButton
      type={type}
      aria-label={label}
      onClick={handleClick}
      functionality={functionality}
    >
      <StyledIcon src={source} alt={alt} width={20} height={20} />
      {text}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  background-color: ${({ functionality }) =>
    functionality === "delete" ? "var(--red)" : "var(--green)"};
  color: var(--white);
  border: none;
  border-radius: 10px;
  width: 9rem;
  height: 2.6rem;
  font-size: 14px;
  padding: 0.5rem 1rem 0.7rem 0;
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
