import { create } from "zustand";
import { produce } from "immer";

export const useMeetingStore = create((set) => ({
  meetings: [
    {
      id: "5",
      location: "Volkspark",
      date: "14.04.2023",
      time: "15:00",
      excluded: "unkastrierte Rüden, Welpen, läufige Hündinnen",
      furtherInfo: "Nur bei gutem Wetter!",
      attending: [
        { id: "A", name: "Fiete" },
        { id: "B", name: "Lore" },
        { id: "C", name: "Juli" },
        { id: "D", name: "Olive" },
      ],
    },
  ],

  createMeeting: (meeting) =>
    set(
      produce((draft) => {
        draft.meetings.push(meeting);
      })
    ),

  updateMeeting: (updatedMeeting) =>
    set(
      produce((draft) => {
        let index = draft.meetings.findIndex(
          (currentMeeting) => currentMeeting.id === updatedMeeting.id
        );
        draft.meetings[index] = updatedMeeting;
      })
    ),

  deleteMeeting: (deletedMeeting) =>
    set(
      produce((draft) => {
        let index = draft.meetings.findIndex(
          (currentMeeting) => currentMeeting.id === deletedMeeting.id
        );
        draft.meetings.splice(index, 1);
      })
    ),
}));
