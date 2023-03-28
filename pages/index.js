import Heading from "../components/Heading";
import MeetingDetail from "../components/MeetingDetail/MeetingDetail";
import MeetingList from "../components/MeetingList/MeetingList";
import { data } from "../data";

export default function Home() {
  return (
    <main>
      <Heading>DOG DATES</Heading>
      <MeetingList meetingData={data} />
      <MeetingDetail data={data[0]} />
    </main>
  );
}
