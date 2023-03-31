import NewMeetingForm from "./NewMeetingForm";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { useRouter } from "next/router";

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("checks if submit handler is called on form submit", async () => {
  useRouter.mockImplementation(() => ({
    push: jest.fn(),
  }));
  const onSubmit = jest.fn();

  render(<NewMeetingForm onSubmit={onSubmit} />);

  const form = screen.getByRole("form");
  fireEvent.submit(form);
  expect(onSubmit).toHaveBeenCalled();
});