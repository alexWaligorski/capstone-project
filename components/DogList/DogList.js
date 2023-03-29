import DogName from "../DogName/DogName";

export default function DogList({ attendingDogs }) {
  console.log(attendingDogs);
  return (
    <ul>
      {attendingDogs.map(({ name, id }) => (
        <li key={id}>
          <DogName dogName={name} />
        </li>
      ))}
    </ul>
  );
}
