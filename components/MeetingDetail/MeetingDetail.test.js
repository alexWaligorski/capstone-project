import { render, screen } from "@testing-library/react";
import MeetingDetail from "./MeetingDetail";

const allInfo = {
  location: "Volkspark",
  date: "12.04.23",
  time: "15:00",
  excluded: "unkastrierte Rüden",
  furtherInfo: "Nur bei gutem Wetter!",
  attending: [{ id: "A", name: "Fiete" }],
};

const noOptionalInfo = {
  location: "Volkspark",
  date: "12.04.23",
  time: "15:00",
  excluded: "",
  furtherInfo: "",
  attending: [{ id: "A", name: "Fiete" }],
};

test("renders given location from test data", () => {
  render(<MeetingDetail data={allInfo} />);
  const location = screen.getByText("Volkspark");
  expect(location).toBeInTheDocument();
});

test("renders given date from test data", () => {
  render(<MeetingDetail data={allInfo} />);
  const date = screen.getByText("12.04.23");
  expect(date).toBeInTheDocument();
});

test("renders given time from test data", () => {
  render(<MeetingDetail data={allInfo} />);
  const time = screen.getByText("15:00");
  expect(time).toBeInTheDocument();
});

// Testing conditional rendering of furtherInformation-Block

test("doesn't render further information if no info is given", () => {
  render(<MeetingDetail data={noOptionalInfo} />);
  const info = screen.queryByTestId("info");
  expect(info).not.toBeInTheDocument();
});

test("renders further information if info is given", () => {
  render(<MeetingDetail data={allInfo} />);
  const info = screen.queryByTestId("info");
  expect(info).toBeInTheDocument();
});

// Testing conditional rendering of excluding Criteria

test("doesn't render exclusion criteria if no info is given", () => {
  render(<MeetingDetail data={noOptionalInfo} />);
  const excluded = screen.queryByTestId("excluded");
  expect(excluded).not.toBeInTheDocument();
});

test("renders further information if info is given", () => {
  render(<MeetingDetail data={allInfo} />);
  const excluded = screen.queryByTestId("excluded");
  expect(excluded).toBeInTheDocument();
});
