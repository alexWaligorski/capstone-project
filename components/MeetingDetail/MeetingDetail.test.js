import { render, screen } from "@testing-library/react";
import MeetingDetail from "./MeetingDetail";
import { data } from "../../data";

test("renders given location from test data", () => {
  render(<MeetingDetail data={data[0]} />);
  const location = screen.getByText("Volkspark");
  expect(location).toBeInTheDocument();
});

test("renders given date from test data", () => {
  render(<MeetingDetail data={data[0]} />);
  const date = screen.getByText("12.04.23");
  expect(date).toBeInTheDocument();
});

test("renders given time from test data", () => {
  render(<MeetingDetail data={data[0]} />);
  const time = screen.getByText("15:00");
  expect(time).toBeInTheDocument();
});

// Testing conditional rendering of furtherInformation-Block

test("doesn't render further information if no info is given", () => {
  render(<MeetingDetail data={data[1]} />);
  const info = screen.queryByTestId("info");
  expect(info).not.toBeInTheDocument();
});

test("renders further information if info is given", () => {
  render(<MeetingDetail data={data[2]} />);
  const info = screen.queryByTestId("info");
  expect(info).toBeInTheDocument();
});

// Testing conditional rendering of excluding Criteria

test("doesn't render exclusion criteria if no info is given", () => {
  render(<MeetingDetail data={data[2]} />);
  const excluded = screen.queryByTestId("excluded");
  expect(excluded).not.toBeInTheDocument();
});

test("renders further information if info is given", () => {
  render(<MeetingDetail data={data[1]} />);
  const excluded = screen.queryByTestId("excluded");
  expect(excluded).toBeInTheDocument();
});
