import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
export default function NavBar() {
  return (
    <StyledNav>
      <StyledNavItem href="/" aria-label="Link zur Terminübersicht">
        <Image
          src="/calendar-icon.svg"
          alt="Kalender Icon"
          width={25}
          height={25}
        />
        Termine
      </StyledNavItem>

      <StyledNavItem href="/profile" aria-label="Link zum Profil">
        <Image src="/paw-icon.svg" alt="Hunde Icon" width={25} height={25} />
        Profil
      </StyledNavItem>
    </StyledNav>
  );
}

const StyledNav = styled.nav`
  display: flex;
  width: 100vw;
  height: 4rem;
  position: fixed;
  bottom: 0;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  border-top: 0.5px solid black;
`;

const StyledNavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 5rem;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  color: #000000;
`;
