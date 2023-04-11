import DogProfileForm from "./DogProfileForm";
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("submitting the form with correct data", async () => {
  const onSubmit = jest.fn();
  const formTitle = "Hundeprofil erstellen";
  const description = "Bitte füllen Sie das Formular aus.";

  render(
    <DogProfileForm
      onSubmit={onSubmit}
      formTitle={formTitle}
      description={description}
    />
  );

  const user = userEvent.setup();

  const dogNameInput = screen.getByLabelText(/Name des Hundes:/i);
  const ownerNameInput = screen.getByLabelText(/Besitzer:in:/i);
  const birthyearInput = screen.getByLabelText(/Geburtsjahr des Hundes:/i);
  const femaleRadio = screen.getByLabelText("Hündin", {
    selector: 'input[name="sex"]',
  });
  const notCastratedRadio = screen.getByLabelText("Nein", {
    selector: 'input[id="unkastriert"]',
  });
  const uncastratedMale = screen.getByLabelText("unkastrierte Rüden");
  const castratedMale = screen.getByLabelText("kastrierte Rüden");
  const uncastratedFemale = screen.getByLabelText("unkastrierte Hündinnen");
  const castratedFemale = screen.getByLabelText("kastrierte Hündinnen");
  const femaleInHeat = screen.getByLabelText("läufige Hündinnen");
  const puppy = screen.getByLabelText("Welpen");
  const submitButton = screen.getByRole("button");

  await user.type(dogNameInput, "Nala");
  await user.type(ownerNameInput, "Max Mustermann");
  await user.clear(birthyearInput);
  await user.type(birthyearInput, "2015");
  await user.click(femaleRadio);
  await user.click(notCastratedRadio);
  await user.click(uncastratedMale);
  await user.click(castratedMale);
  await user.click(uncastratedFemale);
  await user.click(castratedFemale);
  await user.click(femaleInHeat);
  await user.click(puppy);

  const inHeatRadio = screen.queryByLabelText("Ja", {
    selector: 'input[value="laeufig"]',
  });
  if (inHeatRadio) {
    await user.click(inHeatRadio);
  }

  await user.click(submitButton);

  expect(onSubmit).toHaveBeenCalledWith({
    dogName: "Nala",
    ownerName: "Max Mustermann",
    birthyear: "2015",
    sex: "female",
    castrated: "notCastrated",
    inHeat: "laeufig",
    unkastrierterueden: "on",
    kastrierterueden: "on",
    unkastriertehuendinnen: "on",
    kastriertehuendinnen: "on",
    laeufigehuendinnen: "on",
    welpen: "on",
  });
});
