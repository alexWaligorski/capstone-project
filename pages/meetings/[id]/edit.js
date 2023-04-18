import NewMeetingForm from "../../../components/NewMeetingForm/NewMeetingForm";
import Header from "../../../components/Header/Header";
import { useRouter } from "next/router";
import { useMeetingStore } from "../../../store/store";
import { transformMeetingDataToDefaultData } from "../../../store/storeUtils";
import { transformFormDataToMeetingData } from "../../../store/storeUtils";
import NavBar from "../../../components/NavBar/NavBar";

export default function EditMeetingPage({ onSubmit }) {
  const meetings = useMeetingStore((state) => state.meetings);
  const updateMeeting = useMeetingStore((state) => state.updateMeeting);
  const router = useRouter();
  if (!router.isReady) {
    return <h1>loading</h1>;
  }
  const { id } = router.query;
  const requestedMeeting = meetings.find((meeting) => meeting.id === id);

  const transformedMeeting =
    transformMeetingDataToDefaultData(requestedMeeting);

  function handleSubmit(dataFromEditedEntry) {
    const editedMeetingData =
      transformFormDataToMeetingData(dataFromEditedEntry);

    if (onSubmit) onSubmit(editedMeetingData);
    updateMeeting(editedMeetingData);

    router.push(`/meetings/${editedMeetingData.id}`);
  }
  console.log("in edit", transformedMeeting);
  return (
    <>
      <Header />
      <NewMeetingForm
        onSubmit={handleSubmit}
        formTitle="Angaben ändern?"
        description="Halte alle Teilnehmenden up to date! Bearbeite dein DogDate, falls sich deine Pläne ändern."
        defaultData={transformedMeeting}
      />
      <NavBar />
    </>
  );
}
