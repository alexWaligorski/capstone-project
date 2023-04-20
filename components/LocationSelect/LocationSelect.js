import { useState } from "react";
import styled from "styled-components";

export default function LocationSelect({ defaultData }) {
  const [selectedParkPosition, setSelectedParkPosition] = useState({
    lat: defaultData?.lat || "",
    long: defaultData?.long || "",
  });
  const [selectedParkAddress, setSelectedParkAddress] = useState(
    defaultData?.address || ""
  );
  const [suggestions, setSuggestions] = useState([]);

  async function handleChange(event) {
    const query = event.target.value;
    if (query.length > 3) {
      const response = await fetch(`/api/location?q=${query}`);
      const matchingLocations = await response.json();
      setSuggestions(matchingLocations);
    } else {
      setSuggestions([]);
    }
  }

  function handleClick(event) {
    const lat = event.target.getAttribute("data-lat");
    const long = event.target.getAttribute("data-long");
    const address = event.target.getAttribute("data-address");

    const newPosition = { long: long, lat: lat };
    setSelectedParkPosition(newPosition);
    setSelectedParkAddress(address);
    setSuggestions([]);
  }

  return (
    <>
      <label htmlFor="location">Ort:</label>
      <input
        onChange={handleChange}
        type="text"
        id="location"
        name="location"
        defaultValue={defaultData?.location}
        onClick={() => console.log("open searchsection")}
        placeholder="Suche einen Treffpunkt für dein Date"
        required
        // div drum rum mit Lupe!
      />
      <div name="searchsection">
        {/* close button ->no updates, closes section */}
        {/* <input name="searchinput"></input> */}
        {suggestions.length ? (
          <StyledSuggestionHeading id="suggestions-heading">
            Wähle den passenden Ort aus!
          </StyledSuggestionHeading>
        ) : null}

        <ul
          id="suggestions"
          name="suggestions"
          aria-labelledby="suggestions-heading"
        >
          {suggestions.map((suggestion) => (
            <StyledSuggestion
              data-long={suggestion.lon}
              data-lat={suggestion.lat}
              data-address={suggestion.display_name}
              type="button"
              // on handleClick: close searchsection, update "location", "address", "position"
              onClick={handleClick}
              key={suggestion.place_id}
            >
              {suggestion.display_name}
            </StyledSuggestion>
          ))}
        </ul>
      </div>
      {selectedParkAddress !== "" ? (
        <>
          <label htmlFor="address">Adresse:</label>
          <StyledAddressCard id="address-card" name="address-card">
            <span>{selectedParkAddress}</span>
          </StyledAddressCard>
          <textarea
            name="address"
            id="address"
            value={selectedParkAddress}
            hidden
          />
        </>
      ) : null}

      <input
        name="lat"
        id="lat"
        type="text"
        value={selectedParkPosition.lat}
        hidden
      />
      <input
        name="long"
        id="long"
        type="text"
        value={selectedParkPosition.long}
        hidden
      />
    </>
  );
}

const StyledSuggestion = styled.button`
  width: 100%;
  border: none;
  border-radius: 3px;
  background-color: var(--white);
  padding: 0.4rem;
  margin-top: 0.2rem;
  color: var(--blue);
`;

const StyledSuggestionHeading = styled.h3`
  text-align: center;
  font-size: 15px;
  color: #ffbc4f;
  font-weight: 400;
`;

const StyledAddressCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.5rem;
  color: var(--green);
  background-color: var(--white);
  text-align: center;
  font-size: 13px;
  border-radius: 3px;
`;
