import { create } from "zustand";
import { produce } from "immer";
import { persist } from "zustand/middleware";

export const useMeetingStore = create(
  persist(
    (set) => ({
      meetings: [
        {
          id: "5",
          location: "Volkspark Altona",
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
    }),
    {
      name: "meeting-store",
    }
  )
);

export const useDogProfileStore = create(
  persist(
    (set) => ({
      dogProfiles: [],

      upsertDogProfile: (newDogProfile) =>
        set(
          produce((draft) => {
            draft.dogProfiles.length
              ? (draft.dogProfiles[0] = newDogProfile)
              : draft.dogProfiles.push(newDogProfile);
          })
        ),

      deleteDogProfile: () =>
        set(
          produce((draft) => {
            draft.dogProfiles.splice(0);
          })
        ),
    }),
    {
      name: "dog-profile-store",
    }
  )
);
