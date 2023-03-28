import Link from "next/link";
import MeetingEntry from "../MeetingEntry/MeetingEntry";
export default function MeetingList({ meetingData }) {
  return (
    <>
      <h2>Geplante Dates</h2>
      <ul>
        {meetingData.map((meeting) => (
          <li key={meeting.id}>
            <Link href={`/meetings/${meeting.id}`}>
              <MeetingEntry meeting={meeting} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
