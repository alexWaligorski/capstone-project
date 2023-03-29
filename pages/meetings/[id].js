import styled from "styled-components";
import MeetingDetail from "../../components/MeetingDetail/MeetingDetail";
import Link from "next/link";
import Image from "next/image";
import { data } from "../../data";
import { useRouter } from "next/router";
import { useMeetingStore } from "..";

export default function MeetingPage() {
  const meetings = useMeetingStore((state) => state.meetings);
  const router = useRouter();
  if (!router.isReady) {
    return <h1>loading</h1>;
  }
  const { id } = router.query;
  const requestedMeeting = meetings.find((meeting) => meeting.id === id);

  return (
    <>
      <MeetingDetail data={requestedMeeting} />
      <StyledLink href="/">
        <StyledIcon
          src="/back-icon.svg"
          alt="arrow icon showing back"
          width={18}
          height={18}
        />
        Alle Dates
      </StyledLink>
    </>
  );
}

const StyledLink = styled(Link)`
  display: inline-block;
  margin: 2rem 0 0 15vw;
`;

const StyledIcon = styled(Image)`
  position: relative;
  top: 5px;
  left: 5px;
  margin-right: 1rem;
`;
