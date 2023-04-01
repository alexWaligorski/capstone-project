import styled from "styled-components";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
export default function NewMeetingForm({ onSubmit }) {
  return (
    <StyledForm
      onSubmit={onSubmit}
      aria-labelledby="headline"
      aria-describedby="description"
      data-testid="form"
    >
      <h2 name="headline">Plan ein DogDate!</h2>
      <p name="description">
        Lass deinen Hund mit anderen Fellnasen toben und lerne dabei selbst neue
        Menschen kennen. Leg ein neues DogDate an, damit andere daran teilnehmen
        können.{" "}
      </p>
      <label htmlFor="location">Ort:</label>
      <input
        type="text"
        name="location"
        id="location"
        maxLength="50"
        required
      />
      <label htmlFor="date">Datum:</label>
      <input type="date" name="date" id="date" required />
      <label htmlFor="time">Uhrzeit:</label>
      <input type="time" name="time" id="time" required />
      <label htmlFor="attending">Teilnehmende:</label>
      <input type="text" name="attending" id="attending" required />
      <StyledFieldset>
        <legend>Leider dürfen folgende Hunde nicht teilnehmen:</legend>
        <span>
          <input
            type="checkbox"
            name="unkastrierterueden"
            id="unkastrierterueden"
            data-testid="unkastrierterueden"
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
            data-testid="kastrierterueden"
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
            data-testid="unkastriertehuendinnen"
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
            data-testid="kastriertehuendinnen"
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
            data-testid="laeufigehuendinnen"
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
            data-testid="welpen"
          />
          <StyledCheckboxLabel htmlFor="welpen">Welpen</StyledCheckboxLabel>
        </span>
      </StyledFieldset>
      <label htmlFor="furtherInfo">Weitere Infos zum Date:</label>
      <input
        type="textarea"
        name="furtherInfo"
        id="furtherInfo"
        maxLength="300"
      />
      <ButtonWithIcon
        aria="Neues Date speichern"
        type="submit"
        text="speichern"
        alt="speichern Icon"
        source="/check-icon-round.svg"
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
  padding-bottom: 2rem;
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
