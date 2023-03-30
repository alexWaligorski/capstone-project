import { render, screen } from "@testing-library/react";
import MeetingList from "./MeetingList";

test("renders a list", () => {
  render(<MeetingList />);
  const list = screen.getByRole("list");
  expect(list).toBeInTheDocument();
});

test("renders a list", () => {
  const { getAllByRole } = render(<MeetingList />);
  expect(getAllByRole("listitem")).toHaveLength(1);
});
