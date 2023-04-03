import { create } from "zustand";
import { produce } from "immer";

export const useMeetingStore = create((set) => ({
  meetings: [
    {
      id: "0",
      location: "Volkspark",
      date: "14.04.2023",
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
    set(
      produce((draft) => {
        draft.meetings.push(meeting);
      })
    ),
}));

/* addMeeting: (meeting) =>
set((state) => ({ meetings: [...state.meetings, meeting] })), */
