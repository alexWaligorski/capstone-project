import styled from "styled-components";
import Header from "../components/Header/Header";
import MeetingList from "../components/MeetingList/MeetingList";
import AddMeetingButton from "../components/AddMeetingButton/AddMeetingButton";
import { create } from "zustand";

export const useMeetingStore = create((set) => ({
  meetings: [
    {
      id: "0",
      location: "Volkspark",
      date: "12.04.23",
      time: "15:00",
      excluded: "Unkastrierte Rüden, Welpen, läufige Hündinnen",
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
      <Header />
      <AddMeetingButton />
      <MeetingList />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10vh;
`;
