import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export default function DogProfile({ dogData }) {
  const { dogName, age, excluded, sex, inHeat, ownerName, castrated } = dogData;
  return (
    <StyledArticle>
      <StyledProfileIcon
        src="/dog-icon.svg"
        alt="dog icon"
        width={80}
        height={80}
      />
      <h2>{dogName}</h2>
      <StyledInfoDetail>
        <StyledLabel>Geschlecht:</StyledLabel>
        <StyledGenderSection>
          <Image
            src={sex === "female" ? "/female-icon.svg" : "/male-icon.svg"}
            alt={`icon for ${sex} gender`}
            width={25}
            height={25}
          />
          {castrated ? <p>kastriert</p> : <p>unkastriert</p>}
          {inHeat && <p>läufig</p>}
        </StyledGenderSection>
        <StyledLabel>Alter: </StyledLabel>
        <p>{age > 1 ? `${age} Jahre` : `1 Jahr oder jünger`}</p>

        <StyledLabel>Keine DogDates mit:</StyledLabel>
        <ul>
          {excluded.map(({ id, criteria }) => (
            <li key={id}>{criteria}</li>
          ))}
        </ul>

        <StyledLabel>Mein Mensch:</StyledLabel>
        <p>{ownerName}</p>
      </StyledInfoDetail>
      <StyledLink href={`/profile/edit`}>
        <StyledIcon
          src="/edit-icon.svg"
          alt="stift icon"
          width={20}
          height={20}
        />
        bearbeiten
      </StyledLink>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  border: 2px solid black;
  border-radius: 20px;
  padding: 0.8rem;
  text-align: start;
  background-color: var(--white);
`;

const StyledInfoDetail = styled.section`
  width: 90%;
  padding-bottom: 1rem;
  text-align: left;
`;

const StyledProfileIcon = styled(Image)`
  border: 2px solid black;
  border-radius: 50%;
  background-color: var(--yellow);
  padding: 0.5rem;
`;

const StyledGenderSection = styled.section`
  display: flex;
  width: 100%;
  gap: 1rem;
  justify-content: flex-start;
  border-radius: 20px;
  margin-top: 0.1rem;
`;

const StyledLabel = styled.label`
  display: inline-block;
  color: var(--orange);
  font-size: 12px;
  margin-top: 1rem;
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
