import { useState } from "react";
import Image from "next/image";
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
  const [locationName, setLocationName] = useState(defaultData?.location || "");
  const [locationSearch, setLocationSearch] = useState("");

  const [showSearch, setShowSearch] = useState(false);

  async function handleChange(event) {
    const query = event.target.value;
    if (query.length > 3) {
      const response = await fetch(`/api/location?q=${query}`);
      const matchingLocations = await response.json();
      setSuggestions(matchingLocations);
      setLocationSearch(query);
    } else {
      setSuggestions([]);
    }
  }

  function handleSuggestionSelect(event) {
    const lat = event.target.getAttribute("data-lat");
    const long = event.target.getAttribute("data-long");
    const address = event.target.getAttribute("data-address");
    let location = event.target.getAttribute("data-location");
    const shortLocationName = trimLocationName(location);
    const newPosition = { long: long, lat: lat };
    setSelectedParkPosition(newPosition);
    setSelectedParkAddress(address);
    setLocationName(shortLocationName);
    setShowSearch(false);
  }

  function trimLocationName(location) {
    const firstCommaIndex = location.indexOf(",");
    if (firstCommaIndex === -1) {
      return location;
    }

    const trimmedLocation = location.substring(0, firstCommaIndex);
    return trimmedLocation;
  }

  return (
    <>
      <label htmlFor="location">Ort:</label>
      <StyledSearchbar>
        <StyledLocationDisplay
          type="text"
          id="location"
          name="location"
          value={locationName}
          onClick={() => setShowSearch(true)}
          placeholder="Such einen Treffpunkt"
          readOnly
          required
        />
        <StyledSearchbutton type="button" onClick={() => setShowSearch(true)}>
          <Image
            src="/search-icon.svg"
            alt="Lupen Icon"
            width={20}
            height={20}
          />
        </StyledSearchbutton>
      </StyledSearchbar>
      <StyledSearchOverlay>
        {showSearch && (
          <StyledSearchSection>
            <StyledCloseButton
              type="button"
              aria-label="Suchfeld schließen"
              onClick={() => setShowSearch(false)}
            >
              x
            </StyledCloseButton>
            <StyledSuggestionHeading id="suggestions-heading">
              Gib einen Ort ein & wähl eine Adresse!
            </StyledSuggestionHeading>
            <StyledSearchinput
              onChange={handleChange}
              type="text"
              id="locationsearch"
              name="locationsearch"
              defaultValue={locationSearch}
              placeholder="Fischers Park..."
            />
            <ul
              id="suggestions"
              name="suggestions"
              aria-labelledby="suggestions-heading"
            >
              {suggestions.map((suggestion) => (
                <StyledSuggestion
                  data-long={suggestion.long}
                  data-lat={suggestion.lat}
                  data-address={suggestion.address}
                  data-location={suggestion.location}
                  type="button"
                  onClick={handleSuggestionSelect}
                  key={suggestion.id}
                >
                  {suggestion.address}
                </StyledSuggestion>
              ))}
            </ul>
          </StyledSearchSection>
        )}
      </StyledSearchOverlay>
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
            readOnly
            hidden
          />
        </>
      ) : null}

      <input
        name="lat"
        id="lat"
        type="text"
        value={selectedParkPosition.lat}
        readOnly
        hidden
      />
      <input
        name="long"
        id="long"
        type="text"
        value={selectedParkPosition.long}
        readOnly
        hidden
      />
    </>
  );
}

const StyledSearchOverlay = styled.div`
  display: block;
  padding: 0;
`;
const StyledSuggestion = styled.button`
  width: 100%;
  border: none;
  border-radius: 3px;
  background-color: var(--white);
  padding: 0.4rem;
  margin-top: 0.2rem;
  color: var(--stone);
  font-size: 13px;
`;

const StyledSuggestionHeading = styled.h3`
  text-align: center;
  font-size: 15px;
  color: var(--orange);
  font-weight: 400;
  margin: 0rem 0rem 1rem;
`;

const StyledAddressCard = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.4rem 0.5rem;
  color: var(--black);
  background-color: var(--white);
  text-align: center;
  font-size: 13px;
  border-radius: 3px;
`;

const StyledSearchbar = styled.div`
  display: flex;
  width: 100%;
`;

const StyledSearchbutton = styled.button`
  background: transparent;
  border: none;
  outline: none;
  margin-left: -33px;
`;

const StyledLocationDisplay = styled.input`
  width: 100%;
  &::placeholder {
    text-align: center;
    color: var(--black);
  }
  &:focus {
    outline: none;
  }
`;

const StyledSearchSection = styled.section`
  display: flex;
  position: absolute;
  width: 90%;
  z-index: 2;
  flex-direction: column;
  background-color: var(--skyblue);
  padding: 0.5rem;
  border-radius: 4px;
  border: 1px solid var(--blue);
`;

const StyledCloseButton = styled.button`
  background-color: white;
  border: 2px solid var(--blue);
  border-radius: 80%;
  padding: 0.1rem;
  margin-bottom: 0.5rem;
  margin-right: -2px;
  width: 1.5rem;
  align-self: flex-end;
  font-size: 14px;
  color: var(--blue);
`;

const StyledSearchinput = styled.input`
  margin-bottom: 1rem;
`;
