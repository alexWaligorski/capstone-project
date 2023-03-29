import styled from "styled-components";
import Heading from "../components/Heading";
import MeetingList from "../components/MeetingList/MeetingList";
import AddMeetingButton from "../components/AddMeetingButton/AddMeetingButton";
/* import { data } from "../data"; */
import { create } from "zustand";

export const useMeetingStore = create((set) => ({
  meetings: [
    {
      id: "0",
      location: "Volkspark",
      date: "12.04.23",
      time: "15:00",
      excluded: "unkastrierte Rüden",
      furtherInfo: "Nur bei gutem Wetter!",
      attending: [
        { id: "A", name: "Fiete" },
        { id: "B", name: "Lore" },
        { id: "C", name: "Juli" },
        { id: "D", name: "Olive" },
      ],
    },
  ],

  addMeeting: (meeting) =>
    set((state) => ({ meetings: [...state.meetings, meeting] })),
}));

export default function Home() {
  return (
    <StyledMain>
      <Heading>DOG DATES</Heading>
      <AddMeetingButton />
      <MeetingList />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
