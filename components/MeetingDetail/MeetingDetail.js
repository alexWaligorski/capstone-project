import styled from "styled-components";
import ImageWithText from "../ImageWithText/ImageWithText";
import DogList from "../DogList/DogList";

export default function MeetingDetail({ data }) {
  const { location, date, time, excluded, furtherInfo, attending, id } =
    data ?? {};

  return (
    <StyledArticle>
      <h2>{location}</h2>
      <ImageWithText
        image="/calendar-icon.svg"
        altText="Kalender Icon"
        text={date}
      />
      <ImageWithText image="/clock-icon.svg" altText="Uhr Icon" text={time} />
      {excluded && (
        <ImageWithText
          data-testid="excluded"
          image="/stop-icon.svg"
          altText="Stop Icon"
          text={excluded}
        />
      )}
      {furtherInfo && (
        <StyledInfobox data-testid="/info">
          <StyledParagraph>Weitere Infos:</StyledParagraph>
          <StyledParagraph>{furtherInfo}</StyledParagraph>
        </StyledInfobox>
      )}
      <StyledInfobox>
        <StyledParagraph>Wir sind dabei:</StyledParagraph>
        <DogList id={id} attendingDogs={attending ?? []} />
      </StyledInfobox>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80vw;
  margin-top: 5vw;
  margin-left: 10vw;
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
