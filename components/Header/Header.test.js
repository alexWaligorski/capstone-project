import Header from "./Header";
import { render, screen } from "@testing-library/react";

test("test", () => {
  render(<Header />);
  const element = screen.getByText("DogDates");
  expect(element).toBeInTheDocument();
});
