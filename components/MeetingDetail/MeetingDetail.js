import styled from "styled-components";

export default function MeetingDetail() {
  return (
    <StyledArticle>
      <h2>Volkspark</h2>
      <StyledParagraph>📅 12.04.23</StyledParagraph>
      <StyledParagraph>🕒 15:00h</StyledParagraph>
      <StyledParagraph>🚫 unkastrierte Rüden</StyledParagraph>
      <label htmlFor="infobox">Weitere Infos:</label>
      <StyledParagraph id="infobox">Nur bei gutem Wetter!</StyledParagraph>
      <label htmlFor="teilnehmende">Wir sind dabei:</label>
      <StyledParagraph id="teilnehmende">🐶 Fiete</StyledParagraph>
    </StyledArticle>
  );
}

const StyledArticle = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60vw;
  margin-left: 20vw;
  border: 1px solid black;
  border-radius: 6px;
`;

const StyledParagraph = styled.p`
  display: inline-block;
`;
