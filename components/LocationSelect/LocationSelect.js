import { useParkLocationsStore } from "../../store/store";
import { useState } from "react";

export default function LocationSelect({ defaultData }) {
  const parks = useParkLocationsStore((state) => state.parkLocations);
  const [selectedParkPosition, setSelectedParkPosition] = useState({});
  const [selectedParkAddress, setSelectedParkAddress] = useState("");

  function handleSelect(event) {
    const selectedPark = parks.find((park) => park.name === event.target.value);
    const position = selectedPark.position;
    const address = selectedPark.address;
    setSelectedParkPosition(position);
    setSelectedParkAddress(address);
  }
  return (
    <>
      <label htmlFor="location">Ort:</label>
      <select onChange={handleSelect} name="location" id="location" required>
        {parks.map((park, i) => (
          <option key={park.id} value={park.name} selected={i == 0}>
            {park.name}
          </option>
        ))}
      </select>
      <input
        name="lat"
        id="lat"
        type="text"
        defaultValue={
          defaultData?.lat ? defaultData.lat : selectedParkPosition.lat
        }
      />
      <input
        name="long"
        id="long"
        type="text"
        defaultValue={
          defaultData?.long ? defaultData.long : selectedParkPosition.long
        }
      />
      <input
        name="address"
        id="address"
        type="text"
        defaultValue={
          defaultData?.address ? defaultData.address : selectedParkAddress
        }
      />
    </>
  );
}
