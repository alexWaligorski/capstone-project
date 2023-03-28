import styled from "styled-components";
import Heading from "../components/Heading";
import MeetingList from "../components/MeetingList/MeetingList";
import MeetingDetail from "../components/MeetingDetail/MeetingDetail";
import { data } from "../data";

export default function Home() {
  return (
    <StyledMain>
      <Heading>DOG DATES</Heading>
      <MeetingList meetingData={data} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
