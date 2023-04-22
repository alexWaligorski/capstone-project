import NewMeetingForm from "./NewMeetingForm";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useRouter } from "next/router";

const defaultData = {
  id: "0",
  location: "Volkspark Altona",
  lat: "53.5831092",
  long: "9.8959561",
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

  render(
    <NewMeetingForm
      onSubmit={onSubmit}
      formTitle="Angaben ändern?"
      defaultData={defaultData}
    />
  );

  const form = screen.getByLabelText("Angaben ändern?");
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

  const location = screen.getByLabelText("Ort:");
  const date = screen.getByLabelText("Datum:");
  const time = screen.getByLabelText("Uhrzeit:");
  const attending = screen.getByLabelText("Teilnehmende:");
  const urueden = screen.getByLabelText("unkastrierte Rüden");
  const krueden = screen.getByLabelText("kastrierte Rüden");
  const uhuendinnen = screen.getByLabelText("unkastrierte Hündinnen");
  const khuendinnen = screen.getByLabelText("kastrierte Hündinnen");
  const lhuendinnen = screen.getByLabelText("läufige Hündinnen");
  const welpen = screen.getByLabelText("Welpen");
  const submitButton = screen.getByText(/speichern/i);

  await user.clear(attending);
  await user.type(attending, "Fiete, Lore");
  await user.click(date, { target: { value: "2020-05-24" } });
  await user.click(time, { target: { value: "16:00" } });
  await user.click(urueden);
  await user.click(krueden);
  await user.click(uhuendinnen);
  await user.click(khuendinnen);
  await user.click(lhuendinnen);
  await user.click(welpen);

  await user.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({
    id: "0",
    location: "Volkspark Altona",
    date: "2023-04-14",
    time: "15:00",
    lat: "53.5831092",
    long: "9.8959561",
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
