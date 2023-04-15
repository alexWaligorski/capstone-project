export const data = [
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
  {
    id: "1",
    location: "Fischerspark",
    date: "22.05.23",
    time: "9:00",
    excluded: "unkastrierte Rüden, unkastrierte Hündinnen",
    furtherInfo: "",
    attending: [
      { id: "C", name: "Juli" },
      { id: "D", name: "Olive" },
    ],
  },
  {
    id: "2",
    location: "Elbstrand",
    date: "05.06.23",
    time: "13:30",
    excluded: "",
    furtherInfo: "Wir treffen uns an der Strandperle",
    attending: [{ id: "A", name: "Fiete" }],
  },
];

export const dogInfo = {
  dogName: "Lore",
  age: "4 Jahre",
  sex: "female",
  excluded: [
    { id: 12, criteria: "unkastrierte Rüden" },
    { id: 34, criteria: "Welpen" },
  ],
  castrated: false,
  inHeat: true,
  ownerName: "Luise Schröder",
};

const parkLocations = [
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
];
