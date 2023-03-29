import styled from "styled-components";
import { useMeetingStore } from "../../pages";
import { useRouter } from "next/router";
import { uid } from "uid";
export default function MeetingForm({}) {
  const router = useRouter();
  const addMeeting = useMeetingStore((state) => state.addMeeting);
  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    let transformedDate = transformDate(data.date);
    const excluded = transformExclusionCriteria(data);

    const meetingData = {
      id: uid(),
      location: data.location,
      date: transformedDate,
      time: data.time,
      attending: [data.attending],
      excluded: excluded,
      furtherInfo: data.furtherInfo ? data.furtherInfo : "",
    };

    addMeeting(meetingData);
    router.push("/");
  }

  function transformDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const modifiedDate = new Date(date).toLocaleString("de-DE", options);
    return modifiedDate;
  }

  function transformExclusionCriteria(data) {
    let excludedArray = [];

    if (data.unkastrierterueden === "on") {
      excludedArray.push("unkastrierte Rüden");
    }

    if (data.kastrierterueden === "on") {
      excludedArray.push("kastrierte Rüden");
    }

    if (data.kastriertehuendinnen === "on") {
      excludedArray.push("kastrierte Hündinnen");
    }
    if (data.unkastriertehuendinnen === "on") {
      excludedArray.push("unkastrierte Hündinnen");
    }
    if (data.laeufigehuendinnen === "on") {
      excludedArray.push("läufige Hündinnen");
    }
    if (data.welpen === "on") {
      excludedArray.push("Welpen");
    }

    let excluded = excludedArray.join(", ");
    console.log(excluded);

    return excluded;
  }

  return (
    <StyledForm
      onSubmit={handleSubmit}
      aria-labelledby="headline"
      aria-describedby="description"
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
          />
          <label htmlFor="unkastrierterueden">unkastrierte Rüden</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="kastrierterueden"
            id="kastrierterueden"
          />
          <label htmlFor="kastrierterueden">kastrierte Rüden</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="unkastriertehuendinnen"
            id="unkastriertehuendinnen"
          />
          <label htmlFor="unkastriertehuendinnen">unkastrierte Hündinnen</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="kastriertehuendinnen"
            id="kastrierte-huendinnen"
          />
          <label htmlFor="kastriertehuendinnen">kastrierte Hündinnen</label>
        </span>
        <span>
          <input
            type="checkbox"
            name="laeufigehuendinnen"
            id="laeufigehuendinnen"
          />
          <label htmlFor="laeufigehuendinnen">läufige Hündinnen</label>
        </span>
        <span>
          <input type="checkbox" name="welpen" id="welpen" />
          <label htmlFor="welpen">Welpen</label>
        </span>
      </StyledFieldset>
      <label htmlFor="info">Weitere Infos zum Date:</label>
      <input type="text-area" name="info" id="info" />
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
