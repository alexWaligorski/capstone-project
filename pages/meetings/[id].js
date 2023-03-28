import MeetingDetail from "../../components/MeetingDetail/MeetingDetail";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../data";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function MeetingPage() {
  const router = useRouter();

  const { id } = router.query;
  const requestedMeeting = router.isReady ? data[id] : {};

  return (
    <>
      <MeetingDetail data={requestedMeeting} />
      <Link href="/">
        <Image
          src="/back-icon.svg"
          alt="arrow icon showing back"
          width={20}
          height={20}
        />
        Alle Dates
      </Link>
    </>
  );
}
