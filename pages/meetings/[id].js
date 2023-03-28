import MeetingDetail from "../../components/MeetingDetail/MeetingDetail";
import { data } from "../../data";
import { useRouter } from "next/router";

export default function MeetingPage() {
  const router = useRouter();
  const { id } = router.query;
  const requestedMeeting = data[id];

  console.log("data in id page: ", requestedMeeting);
  return <MeetingDetail data={requestedMeeting} />;
}
