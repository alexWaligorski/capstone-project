import Header from "./Header";
import { render, screen } from "@testing-library/react";

test("renders the title", () => {
  render(<Header />);
  const element = screen.getByRole("heading", { name: "DogDates" });
  expect(element).toBeInTheDocument();
});
