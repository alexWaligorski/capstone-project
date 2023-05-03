import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import styled from "styled-components";
import OverviewMap from "../../components/AllMeetingsMap";

export default function MeetingMapPage() {
  return (
    <>
      <Header />
      <StyledMain>
        <StyledHeading>Alle Dates im Überblick</StyledHeading>
        <OverviewMap />
      </StyledMain>
      <NavBar />
    </>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 10vh 0 4rem;
  z-index: -1;
`;

const StyledHeading = styled.h2`
  color: var(--white);
`;
