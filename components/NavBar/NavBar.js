import styled from "styled-components";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
export default function NavBar() {
  const router = useRouter();

  return (
    <StyledNav>
      <StyledNavItem
        style={
          router.pathname === "/"
            ? { backgroundColor: "var(--navOrange)" }
            : { backgroundColor: "inherit" }
        }
        href="/"
        aria-label="Link zur Terminübersicht"
      >
        <Image
          src="/calendar-icon.svg"
          alt="Kalender Icon"
          width={25}
          height={25}
        />
        Termine
      </StyledNavItem>

      <StyledNavItem
        style={
          router.pathname === "/meetings/meeting-map"
            ? { backgroundColor: "var(--navOrange)" }
            : { backgroundColor: "inherit" }
        }
        href="/meetings/meeting-map"
        aria-label="Link zur Karte aller DogDates"
      >
        <Image
          src="/location-icon.svg"
          alt="Location Pin Icon"
          width={25}
          height={25}
        />
        Karte
      </StyledNavItem>

      <StyledNavItem
        style={
          router.pathname === "/profile"
            ? { backgroundColor: "var(--navOrange)" }
            : { backgroundColor: "inherit" }
        }
        href="/profile"
        aria-label="Link zum Profil"
      >
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
  z-index: 500;
`;

const StyledNavItem = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 4rem;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  color: #000000;
  padding: 0.5em;
  border-radius: 4px;
`;
