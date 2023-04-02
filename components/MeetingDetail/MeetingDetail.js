import styled from "styled-components";
import ImageWithText from "../ImageWithText/ImageWithText";
import DogList from "../DogList/DogList";
import Link from "next/link";

export default function MeetingDetail({ data }) {
  const { location, date, time, excluded, furtherInfo, attending, id } = data;

  return (
    <StyledArticle>
      <StyledHeading>{location}</StyledHeading>
      <ImageWithText
        image="/calendar-icon.svg"
        altText="Kalender Icon"
        text={date}
      />
      <ImageWithText image="/clock-icon.svg" altText="Uhr Icon" text={time} />
      {excluded.length !== 0 && (
        <ImageWithText
          data-testid="excluded"
          image="/stop-icon.svg"
          altText="Stop Icon"
          text={excluded}
        />
      )}
      {furtherInfo && (
        <StyledInfobox data-testid="info">
          <StyledSubHeading>Weitere Infos:</StyledSubHeading>
          <StyledParagraph>{furtherInfo}</StyledParagraph>
        </StyledInfobox>
      )}
      <StyledInfobox>
        <StyledSubHeading>Wir sind dabei:</StyledSubHeading>
        <DogList id={id} attendingDogs={attending} />
      </StyledInfobox>
      <Link href={`/meetings/${id}/edit`}>bearbeiten</Link>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90vw;
  margin-top: 12vh;
  margin-left: 5vw;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0.8rem;
  text-align: start;
  background-color: var(--white);
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

const StyledHeading = styled.h2`
  border: 2px solid black;
  border-radius: 10px;
  padding: 0.5rem 1rem;
`;

const StyledSubHeading = styled.h3`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
