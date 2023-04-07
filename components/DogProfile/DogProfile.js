import styled from "styled-components";
import Image from "next/image";

export default function DogProfile({ dogData }) {
  const { name, age, excluded, sex, inHeat, owner, castrated } = dogData;
  return (
    <StyledArticle>
      <StyledProfileIcon
        src="/dog-icon.svg"
        alt="dog icon"
        width={80}
        height={80}
      />
      <h2>{name}</h2>
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
        <p>{age}</p>

        <StyledLabel>Keine DogDates mit:</StyledLabel>
        <ul>
          <li>{excluded}</li>
        </ul>

        <StyledLabel>Mein Mensch:</StyledLabel>
        <p>{owner}</p>
      </StyledInfoDetail>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
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
