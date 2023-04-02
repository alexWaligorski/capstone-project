import NewMeetingForm from "../../../components/NewMeetingForm/NewMeetingForm";
import Header from "../../../components/Header/Header";
import { useRouter } from "next/router";
import { useMeetingStore } from "../../index";

export default function EditMeetingPage() {
  const meetings = useMeetingStore((state) => state.meetings);
  const router = useRouter();
  if (!router.isReady) {
    return <h1>loading</h1>;
  }
  const { id } = router.query;
  const requestedMeeting = meetings.find((meeting) => meeting.id === id);
  console.log("Requested", requestedMeeting);

  const transformedMeeting = transformMeeting(requestedMeeting);
  console.log(transformedMeeting);

  function transformMeeting(requestedMeeting) {
    const date = transformDate(requestedMeeting.date);
    const attending = transformAttending(requestedMeeting.attending);
    const transformedExcluded = transformExcluded(requestedMeeting.excluded);
    return { ...requestedMeeting, date, attending, ...transformedExcluded };
  }

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  }

  function transformDate(date) {
    const dateArray = date.split(".");
    const modifiedDate = `${dateArray[2]}-${dateArray[1]}-${dateArray[0]}`;
    console.log(modifiedDate);

    return modifiedDate;
  }

  function transformAttending(attending) {
    console.log(attending);
    const attendingJoined = attending
      .map((attendee) => attendee.name)
      .join(", ");
    return attendingJoined;
  }

  function transformExcluded(excluded) {
    const excludedArray = excluded.split(", ");
    let excludedObject = {};
    excludedArray.map((entry) => {
      if (entry === "Welpen") {
        excludedObject.welpen = true;
      }
      if (entry === "Unkastrierte Rüden") {
        excludedObject.unkastrierterueden = true;
      }
      if (entry === "Kastrierte Rüden") {
        excludedObject.kastrierterueden = true;
      }
      if (entry === "Unkastrierte Hündinnen") {
        excludedObject.unkastriertehuendinnen = true;
      }
      if (entry === "Kastrierte Hündinnen") {
        excludedObject.kastriertehuendinnen = true;
      }
      if (entry === "läufige Hündinnen") {
        excludedObject.laeufigehuendinnen = true;
      }
    });

    return excludedObject;
  }

  return (
    <>
      <Header />
      <NewMeetingForm
        onSubmit={handleSubmit}
        formTitle="Angaben ändern?"
        description="Halte alle Teilnehmenden up to date! Bearbeite dein DogDate, falls sich deine Pläne ändern."
        defaultData={transformedMeeting}
      />
    </>
  );
}
