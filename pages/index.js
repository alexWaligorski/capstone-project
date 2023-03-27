import Heading from "../components/Heading";
import MeetingDetail from "../components/MeetingDetail/MeetingDetail";
import { data } from "../data";

export default function Home() {
  return (
    <main>
      <Heading>DOG DATES</Heading>
      <MeetingDetail data={data[1]} />
    </main>
  );
}
