import styled from "styled-components";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { useState } from "react";

export default function DogProfileForm({
  onSubmit,
  formTitle,
  description,
  defaultDogData,
}) {
  const [isFemale, setIsFemale] = useState(
    defaultDogData?.sex === "female" || false
  );
  const [isCastrated, setIsCastrated] = useState(
    defaultDogData?.castrated || false
  );

  const [isInHeat, setIsInHeat] = useState(defaultDogData?.inHeat || false);

  function handleSexChange(value) {
    value === "female" ? setIsFemale(true) : setIsFemale(false);
  }

  function handleCastrationChange(value) {
    value === "castrated" ? setIsCastrated(true) : setIsCastrated(false);
  }

  function handleInHeatChange(value) {
    value === "laeufig" ? setIsInHeat(true) : setIsInHeat(false);
  }

  function getCurrentYear() {
    const date = new Date();
    const currentYear = date.getFullYear();
    return currentYear;
  }

  return (
    <StyledForm
      onSubmit={(event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = Object.fromEntries(formData);
        onSubmit(data);
      }}
      aria-labelledby="formTitle"
      aria-describedby="description"
    >
      <h2 id="formTitle" name="formTitle">
        {formTitle}
      </h2>
      <p name="description"> {description} </p>
      <label htmlFor="dogName">Name des Hundes:</label>
      <input
        type="text"
        name="dogName"
        id="dogName"
        maxLength="50"
        defaultValue={defaultDogData?.dogName}
        required
      />
      <label htmlFor="ownerName">Besitzer:in:</label>
      <input
        type="text"
        name="ownerName"
        id="ownerName"
        maxLength="100"
        defaultValue={defaultDogData?.ownerName}
        required
      />
      <label htmlFor="birthyear">Geburtsjahr des Hundes:</label>
      <input
        type="number"
        id="birthyear"
        name="birthyear"
        min="2003"
        max={getCurrentYear()}
        step="1"
        defaultValue={
          defaultDogData ? getCurrentYear() - defaultDogData.age : 2010
        }
        required
      />
      <StyledFieldset>
        <legend>Geschlecht:</legend>
        <span>
          <input
            onChange={(event) => handleSexChange(event.target.value)}
            type="radio"
            name="sex"
            id="huendin"
            value="female"
            checked={isFemale}
            required
          />
          <StyledCheckboxLabel htmlFor="huendin">Hündin</StyledCheckboxLabel>
        </span>
        <span>
          <input
            onChange={(event) => handleSexChange(event.target.value)}
            type="radio"
            name="sex"
            id="ruede"
            value="male"
            checked={!isFemale}
            required
          />
          <StyledCheckboxLabel htmlFor="ruede">Rüde</StyledCheckboxLabel>
        </span>
      </StyledFieldset>
      <StyledFieldset>
        <legend>Ist dein Hund kastriert?</legend>
        <span>
          <input
            type="radio"
            name="castrated"
            id="kastriert"
            value="castrated"
            checked={isCastrated}
            onChange={(event) => handleCastrationChange(event.target.value)}
            required
          />
          <StyledCheckboxLabel htmlFor="kastriert">Ja</StyledCheckboxLabel>
        </span>
        <span>
          <input
            type="radio"
            name="castrated"
            id="unkastriert"
            value="notCastrated"
            checked={!isCastrated}
            onChange={(event) => handleCastrationChange(event.target.value)}
            required
          />
          <StyledCheckboxLabel htmlFor="unkastriert">Nein</StyledCheckboxLabel>
        </span>
      </StyledFieldset>
      {isFemale && !isCastrated && (
        <StyledFieldset>
          <legend>Ist deine Hündin läufig?</legend>
          <span>
            <input
              type="radio"
              name="inHeat"
              id="laeufig"
              value="laeufig"
              onChange={(event) => handleInHeatChange(event.target.value)}
              checked={isInHeat}
            />
            <StyledCheckboxLabel htmlFor="laeufig">Ja</StyledCheckboxLabel>
          </span>
          <span>
            <input
              type="radio"
              name="inHeat"
              id="nichtlaeufig"
              value="nichtlaeufig"
              onChange={(event) => handleInHeatChange(event.target.value)}
              checked={!isInHeat}
            />
            <StyledCheckboxLabel htmlFor="nichtlaeufig">
              Nein
            </StyledCheckboxLabel>
          </span>
        </StyledFieldset>
      )}
      <StyledFieldset>
        <legend>Von meinen Dates ausgeschlossen:</legend>
        <span>
          <input
            type="checkbox"
            name="unkastrierterueden"
            id="unkastrierterueden"
            defaultChecked={defaultDogData?.unkastrierterueden}
          />
          <StyledCheckboxLabel htmlFor="unkastrierterueden">
            unkastrierte Rüden
          </StyledCheckboxLabel>
        </span>
        <span>
          <input
            type="checkbox"
            name="kastrierterueden"
            id="kastrierterueden"
            defaultChecked={defaultDogData?.kastrierterueden}
          />
          <StyledCheckboxLabel htmlFor="kastrierterueden">
            kastrierte Rüden
          </StyledCheckboxLabel>
        </span>
        <span>
          <input
            type="checkbox"
            name="unkastriertehuendinnen"
            id="unkastriertehuendinnen"
            defaultChecked={defaultDogData?.unkastriertehuendinnen}
          />
          <StyledCheckboxLabel htmlFor="unkastriertehuendinnen">
            unkastrierte Hündinnen
          </StyledCheckboxLabel>
        </span>
        <span>
          <input
            type="checkbox"
            name="kastriertehuendinnen"
            id="kastriertehuendinnen"
            defaultChecked={defaultDogData?.kastriertehuendinnen}
          />
          <StyledCheckboxLabel htmlFor="kastriertehuendinnen">
            kastrierte Hündinnen
          </StyledCheckboxLabel>
        </span>
        <span>
          <input
            type="checkbox"
            name="laeufigehuendinnen"
            id="laeufigehuendinnen"
            defaultChecked={defaultDogData?.laeufigehuendinnen}
          />
          <StyledCheckboxLabel htmlFor="laeufigehuendinnen">
            läufige Hündinnen
          </StyledCheckboxLabel>
        </span>
        <span>
          <input
            type="checkbox"
            name="welpen"
            id="welpen"
            defaultChecked={defaultDogData?.welpen}
          />
          <StyledCheckboxLabel htmlFor="welpen">Welpen</StyledCheckboxLabel>
        </span>
      </StyledFieldset>
      <ButtonWithIcon
        aria="speichern"
        type="submit"
        alt="speichern Icon"
        source="/check-icon-round.svg"
        text="speichern"
        functionality="save"
      />
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  margin-left: 5vw;
  margin-top: 11vh;
  gap: 0.5rem;
  padding-bottom: 5rem;
  color: var(--white);
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
  gap: 0.25rem;
  border-radius: 8px;
`;

const StyledCheckboxLabel = styled.label`
  margin-left: 0.8rem;
`;
