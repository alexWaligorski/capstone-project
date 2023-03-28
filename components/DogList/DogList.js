import DogName from "../DogName/DogName";
import styled from "styled-components";

export default function DogList({ attendingDogs, id }) {
  return (
    <ul>
      {attendingDogs.map((attendingDog) => (
        <li key={id}>
          <DogName dogName={attendingDog} />
        </li>
      ))}
    </ul>
  );
}
