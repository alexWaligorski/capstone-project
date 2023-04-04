import NewMeetingForm from "./NewMeetingForm";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

const defaultData = {
  id: "0",
  location: "Volkspark",
  date: "2023-04-14",
  time: "15:00",
  furtherInfo: "Nur bei gutem Wetter!",
  attending: "Fiete",
};

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

test("submit handler is called on form submit", async () => {
  useRouter.mockImplementation(() => ({
    push: jest.fn(),
  }));
  const onSubmit = jest.fn();

  render(<NewMeetingForm onSubmit={onSubmit} />);

  const form = screen.getByTestId("form");
  fireEvent.submit(form);
  expect(onSubmit).toHaveBeenCalled();
});

test("submits edited form data when fields are altered", async () => {
  const onSubmit = jest.fn();
  render(
    <NewMeetingForm
      onSubmit={onSubmit}
      formTitle="Angaben ändern?"
      defaultData={defaultData}
    />
  );

  const user = userEvent.setup();

  const location = screen.getByTestId("location");
  const date = screen.getByTestId("date");
  const time = screen.getByTestId("time");
  const attending = screen.getByTestId("attending");
  const urueden = screen.getByTestId("unkastrierterueden");
  const krueden = screen.getByTestId("kastrierterueden");
  const uhuendinnen = screen.getByTestId("unkastriertehuendinnen");
  const khuendinnen = screen.getByTestId("kastriertehuendinnen");
  const lhuendinnen = screen.getByTestId("laeufigehuendinnen");
  const welpen = screen.getByTestId("welpen");
  const form = screen.getByTestId("form");

  await userEvent.clear(location);
  await user.type(location, "Elbstrand");
  await userEvent.clear(attending);
  await user.type(attending, "Fiete, Lore");
  await user.type(date, "2020-05-24");
  await user.type(time, "16:00");
  await user.click(urueden);
  await user.click(krueden);
  await user.click(uhuendinnen);
  await user.click(khuendinnen);
  await user.click(lhuendinnen);
  await user.click(welpen);

  await user.submit(form);

  expect(onSubmit).toHaveBeenCalledWith({
    id: "0",
    location: "Elbstrand",
    date: "2023-04-14",
    time: "15:00",
    furtherInfo: "Nur bei gutem Wetter!",
    attending: "Fiete, Lore",
    unkastrierterueden: "on",
    kastrierterueden: "on",
    unkastriertehuendinnen: "on",
    kastriertehuendinnen: "on",
    laeufigehuendinnen: "on",
    welpen: "on",
  });
});
