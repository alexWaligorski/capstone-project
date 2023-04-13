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

const defaultDogData = {
  dogName: "Nala",
  ownerName: "John",
  sex: "female",
  castrated: false,
  inHeat: true,
  age: 3,
  unkastrierterueden: true,
  kastrierterueden: true,
  unkastriertehuendinnen: true,
  kastriertehuendinnen: true,
  laeufigehuendinnen: true,
  welpen: true,
};

test("renders form with correct default values", async () => {
  const handleSubmit = jest.fn();
  const formTitle = "Dog Profile Form";
  const description = "Please fill in the details below:";
  render(
    <DogProfileForm
      onSubmit={handleSubmit}
      formTitle={formTitle}
      description={description}
      defaultDogData={defaultDogData}
    />
  );

  // Verify form title and description are displayed correctly
  const formTitleElement = screen.getByRole("heading", { name: formTitle });
  const descriptionElement = screen.getByText(description);
  expect(formTitleElement).toHaveTextContent("Dog Profile Form");
  expect(descriptionElement).toHaveTextContent(
    "Please fill in the details below:"
  );

  // Verify form inputs have correct default values
  const dogNameInputElement = screen.getByLabelText("Name des Hundes:");
  expect(dogNameInputElement).toHaveValue(defaultDogData.dogName);

  const ownerNameInputElement = screen.getByLabelText("Besitzer:in:");
  expect(ownerNameInputElement).toHaveValue(defaultDogData.ownerName);

  const ageInputElement = screen.getByLabelText("Geburtsjahr des Hundes:");
  expect(ageInputElement).toHaveValue(
    new Date().getFullYear() - defaultDogData.age
  );

  const femaleRadioButtonElement = screen.getByLabelText("Hündin");
  const maleRadioButtonElement = screen.getByLabelText("Rüde");
  expect(femaleRadioButtonElement).toBeChecked();
  expect(maleRadioButtonElement).not.toBeChecked();

  const inHeatRadio = screen.queryByLabelText("Ja", {
    selector: 'input[value="laeufig"]',
  });
  if (inHeatRadio) {
    expect(inHeatRadio).toBeChecked();
  }

  const notInHeatRadio = screen.queryByLabelText("Nein", {
    selector: 'input[value="nichtlaeufig"]',
  });
  if (notInHeatRadio) {
    expect(notInHeatRadio).not.toBeChecked();
  }

  const castratedRadio = screen.getByLabelText("Ja", {
    selector: 'input[id="kastriert"]',
  });
  const notCastratedRadio = screen.getByLabelText("Nein", {
    selector: 'input[id="unkastriert"]',
  });

  expect(castratedRadio).not.toBeChecked();
  expect(notCastratedRadio).toBeChecked();

  const uncastratedMale = screen.getByLabelText("unkastrierte Rüden");
  const castratedMale = screen.getByLabelText("kastrierte Rüden");
  const uncastratedFemale = screen.getByLabelText("unkastrierte Hündinnen");
  const castratedFemale = screen.getByLabelText("kastrierte Hündinnen");
  const femaleInHeat = screen.getByLabelText("läufige Hündinnen");
  const puppy = screen.getByLabelText("Welpen");

  expect(uncastratedMale).toBeChecked();
  expect(castratedMale).toBeChecked();
  expect(uncastratedFemale).toBeChecked();
  expect(castratedFemale).toBeChecked();
  expect(femaleInHeat).toBeChecked();
  expect(puppy).toBeChecked();
});
