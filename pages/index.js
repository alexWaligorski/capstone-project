import styled from "styled-components";
import Header from "../components/Header/Header";
import MeetingList from "../components/MeetingList/MeetingList";
import AddButton from "../components/AddButton/AddButton";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  return (
    <StyledMain>
      <Header />
      <AddButton text="NEUES DATE" href="/meetings/new-meeting" />
      <MeetingList />
      <NavBar />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;
