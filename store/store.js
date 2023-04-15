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

export const useParkLocationsStore = create((set) => ({
  parkLocations: [
    {
      id: 101,
      name: "Volkspark Altona",
      position: [53.583139, 9.89821],
    },
    {
      id: 102,
      name: "Fischerspark",
      position: [53.5472686, 9.9180091],
    },
    {
      id: 103,
      name: "Jenischpark",
      position: [53.5518873, 9.8656488],
    },
    {
      id: 104,
      name: "Niendorfer Gehege",
      position: [53.6143235, 9.8994927],
    },
    {
      id: 105,
      name: "Planten und Blomen",
      position: [53.5606699, 9.9821389],
    },
    {
      id: 106,
      name: "Falkensteiner Ufer",
      position: [53.5606699, 9.9821389],
    },
    {
      id: 107,
      name: "Klövensteen",
      position: [53.5623746, 9.7339207],
    },
    {
      id: 108,
      name: "Elbstrand Övelgönne",
      position: [53.5447151, 9.9038221],
    },
    {
      id: 109,
      name: "Wohlerspark",
      position: [53.5579225, 9.9481185],
    },
    {
      id: 120,
      name: "Schanzenpark",
      position: [53.5653866, 9.9672976],
    },
  ],
}));
