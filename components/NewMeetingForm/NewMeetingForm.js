import styled from "styled-components";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";

export default function NewMeetingForm({
  onSubmit,
  formTitle,
  defaultData,
  description,
}) {
  return (
    <StyledForm
      onSubmit={onSubmit}
      aria-labelledby={formTitle}
      aria-describedby="description"
      data-testid="form"
    >
      <input
        type="text"
        name="id"
        id="id"
        defaultValue={defaultData?.id}
        hidden
      />
      <h2 name="formTitle">{formTitle}</h2>
      <p name="description"> {description} </p>
      <label htmlFor="location">Ort:</label>
      <input
        type="text"
        name="location"
        id="location"
        maxLength="50"
        defaultValue={defaultData?.location}
        required
      />
      <label htmlFor="date">Datum:</label>
      <input
        type="date"
        name="date"
        id="date"
        defaultValue={defaultData?.date}
        required
      />
      <label htmlFor="time">Uhrzeit:</label>
      <input
        type="time"
        name="time"
        id="time"
        defaultValue={defaultData?.time}
        required
      />
      <label htmlFor="attending">Teilnehmende:</label>
      <input
        type="text"
        name="attending"
        id="attending"
        defaultValue={defaultData?.attending}
        required
      />
      <StyledFieldset>
        <legend>Leider dürfen folgende Hunde nicht teilnehmen:</legend>
        <span>
          <input
            type="checkbox"
            name="unkastrierterueden"
            id="unkastrierterueden"
            data-testid="unkastrierterueden"
            defaultChecked={defaultData?.unkastrierterueden}
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
            defaultChecked={defaultData?.kastrierterueden}
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
            defaultChecked={defaultData?.unkastriertehuendinnen}
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
            defaultChecked={defaultData?.kastriertehuendinnen}
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
            defaultChecked={defaultData?.laeufigehuendinnen}
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
            defaultChecked={defaultData?.welpen}
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
        defaultValue={defaultData?.furtherInfo}
      />
      <ButtonWithIcon
        aria="speichern"
        type="submit"
        alt="speichern Icon"
        source="/check-icon-round.svg"
        text="speichern"
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
