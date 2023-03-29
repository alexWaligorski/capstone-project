import { render, screen } from "@testing-library/react";
import MeetingList from "./MeetingList";

const data = [
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

test("renders a list", () => {
  render(<MeetingList meetingData={data} />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("renders a list", () => {
  const { getAllByRole } = render(<MeetingList meetingData={data} />);
  expect(getAllByRole("listitem")).toHaveLength(3);
});