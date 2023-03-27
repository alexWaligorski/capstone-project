import styled from "styled-components";
import DogName from "../DogName/DogName";
import ImageWithText from "../ImageWithText/ImageWithText";

export default function MeetingDetail({ data }) {
  const { location, date, time, excluded, furtherInfo, attending } = data;
  return (
    <StyledArticle>
      <h2>{location}</h2>
      <ImageWithText
        image="calendar-icon.svg"
        altText="Kalender Icon"
        text={date}
      />
      <ImageWithText image="clock-icon.svg" altText="Uhr Icon" text={time} />
      {excluded ? (
        <ImageWithText
          data-testid="excluded"
          image="stop-icon.svg"
          altText="Stop Icon"
          text={excluded}
        />
      ) : null}
      <StyledInfobox>
        {furtherInfo ? (
          <div data-testid="info">
            <label htmlFor="weitereInfos">Weitere Infos:</label>
            <StyledParagraph id="weitereInfos">{furtherInfo}</StyledParagraph>
          </div>
        ) : null}
      </StyledInfobox>
      <StyledInfobox>
        <label htmlFor="teilnehmende">Wir sind dabei:</label>
        <DogName id="teilnehmende" attendingDog={attending} />
      </StyledInfobox>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin-top: 5vw;
  margin-left: 20vw;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0.8rem;
  text-align: start;
`;

const StyledInfobox = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 1rem 0 0.5rem;
`;
const StyledParagraph = styled.p`
  margin: 0.2rem 0 0;
`;
