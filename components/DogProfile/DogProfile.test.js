import { render, screen } from "@testing-library/react";
import DogProfile from "./DogProfile";

jest.mock("next/router", () => ({
  useRouter: jest.fn().mockReturnValue({
    isReady: true,
  }),
}));

const dogInfo = {
  dogName: "Lore",
  age: "4 Jahre",
  sex: "female",
  excluded: [{ id: 1, criteria: "unkastrierte Rüden" }],
  castrated: true,
  inHeat: false,
  ownerName: "Luise Schröder",
};

const dogInfoNotCastratedAndInHeat = {
  dogName: "Lore",
  age: "4 Jahre",
  sex: "female",
  excluded: [{ id: 1, criteria: "unkastrierte Rüden" }],
  castrated: false,
  inHeat: true,
  ownerName: "Luise Schröder",
};

test("renders all elements", () => {
  render(<DogProfile dogData={dogInfo} />);

  expect(screen.getByAltText("dog icon")).toBeInTheDocument();
  expect(screen.getByText("Lore")).toBeInTheDocument();
  expect(screen.getByText("Geschlecht:")).toBeInTheDocument();
  expect(screen.getByText("Alter:")).toBeInTheDocument();
  expect(screen.getByText("Keine DogDates mit:")).toBeInTheDocument();
  expect(screen.getByText("Mein Mensch:")).toBeInTheDocument();
});

test('renders "kastriert" when castrated is true and "unkastriert" otherwise', () => {
  render(<DogProfile dogData={dogInfo} />);
  expect(screen.getByText("kastriert")).toBeInTheDocument();

  render(<DogProfile dogData={dogInfoNotCastratedAndInHeat} />);
  expect(screen.getByText("unkastriert")).toBeInTheDocument();
});

test('renders "läufig" when inHeat is true', () => {
  render(<DogProfile dogData={dogInfoNotCastratedAndInHeat} />);
  expect(screen.queryByText("läufig")).toBeInTheDocument();
});

test('Does not render "läufig" when inHeat is true and nothing otherwise', () => {
  render(<DogProfile dogData={dogInfo} />);
  expect(screen.queryByText("läufig")).not.toBeInTheDocument();
});
