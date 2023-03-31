import styled from "styled-components";
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
      <input type="text" name="location" id="location" required />
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
          <label htmlFor="unkastrierterueden">unkastrierte Rüden</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="kastrierterueden"
            id="kastrierterueden"
            data-testid="kastrierterueden"
          />
          <label htmlFor="kastrierterueden">kastrierte Rüden</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="unkastriertehuendinnen"
            id="unkastriertehuendinnen"
            data-testid="unkastriertehuendinnen"
          />
          <label htmlFor="unkastriertehuendinnen">unkastrierte Hündinnen</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="kastriertehuendinnen"
            id="kastriertehuendinnen"
            data-testid="kastriertehuendinnen"
          />
          <label htmlFor="kastriertehuendinnen">kastrierte Hündinnen</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="laeufigehuendinnen"
            id="laeufigehuendinnen"
            data-testid="laeufigehuendinnen"
          />
          <label htmlFor="laeufigehuendinnen">läufige Hündinnen</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="welpen"
            id="welpen"
            data-testid="welpen"
          />
          <label htmlFor="welpen">Welpen</label>
        </span>
      </StyledFieldset>
      <label htmlFor="furtherInfo">Weitere Infos zum Date:</label>
      <input type="text-area" name="furtherInfo" id="furtherInfo" />
      <button aria-label="Neues Date speichern" type="submit">
        Speichern
      </button>
    </StyledForm>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90vw;
  margin-left: 5vw;
  gap: 0.5rem;
  padding-bottom: 2rem;
`;

const StyledFieldset = styled.fieldset`
  display: flex;
  flex-direction: column;
  margin: 0.7rem 0;
  gap: 0.25rem;
  border-radius: 8px;
`;
