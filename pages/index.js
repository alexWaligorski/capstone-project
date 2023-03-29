import styled from "styled-components";
import Heading from "../components/Heading";
import MeetingList from "../components/MeetingList/MeetingList";
import AddMeetingButton from "../components/AddMeetingButton/AddMeetingButton";
/* import { data } from "../data"; */
import { useState } from "react";

export default function Home() {
  const [meetings, setMeetings] = useState([]);

  function addMeeting(newMeeting) {
    setMeetings([...meetings, newMeeting]);
  }
  return (
    <StyledMain>
      <Heading>DOG DATES</Heading>
      <AddMeetingButton onAddMeeting={addMeeting} />
      <MeetingList onAddMeeting={addMeeting} meetings={meetings} />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
