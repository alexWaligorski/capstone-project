import styled from "styled-components";
import ImageWithText from "../ImageWithText/ImageWithText";
import DogList from "../DogList/DogList";
import Link from "next/link";
import Image from "next/image";
import ButtonWithIcon from "../ButtonWithIcon/ButtonWithIcon";
import { useMeetingStore, useParkLocationsStore } from "../../store/store";
import { useRouter } from "next/router";
import Map from "../Map";

export default function MeetingDetail({ data }) {
  const deleteMeeting = useMeetingStore((state) => state.deleteMeeting);
  const parks = useParkLocationsStore((state) => state.parkLocations);
  const router = useRouter();

  if (!router.isReady || !data) {
    return <h1>loading</h1>;
  }

  const { location, date, time, excluded, furtherInfo, attending, id } = data;
  let position = [];
  let address = "";

  if (parks.length) {
    const currentPark = parks.find((park) => park.name === location);
    position = currentPark.position;
    address = currentPark.address;
  }

  function handleDelete() {
    deleteMeeting(id);
    router.push("/");
  }

  return (
    <StyledArticle>
      <StyledHeading>{location}</StyledHeading>
      <Map
        position={position.length && position}
        address={address ? address : "Keine Addresse hinterlegt"}
      />
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
        <DogList attendingDogs={attending} />
      </StyledInfobox>
      <StyledButtonWrapper>
        <ButtonWithIcon
          type="button"
          functionality="delete"
          text="löschen"
          source="/delete-icon.svg"
          alt="Kreuz Icon"
          label="Klicken zum löschen"
          handleClick={handleDelete}
        />
        <StyledLink href={`/meetings/${id}/edit`}>
          <StyledIcon
            src="/edit-icon.svg"
            alt="stift icon"
            width={20}
            height={20}
          />
          bearbeiten
        </StyledLink>
      </StyledButtonWrapper>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  align-items: center;
  width: 90%;
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

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
  margin-top: 1rem;
  gap: 1rem;
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

const StyledLink = styled(Link)`
  display: inline-block;
  line-height: 1rem;
  font-size: 14px;
  width: 9rem;
  padding: 0.5rem 1rem 0.7rem 0.5rem;
  text-align: center;
  color: var(--white);
  background-color: var(--orange);
  border-radius: 10px;
  text-decoration: none;
`;

const StyledIcon = styled(Image)`
  position: relative;
  top: 5px;
  left: 5px;
  margin-right: 1rem;
`;
