import NewMeetingForm from "../../components/NewMeetingForm/NewMeetingForm";
import Header from "../../components/Header/Header";
import { useMeetingStore } from "../../store/store";
import { useRouter } from "next/router";
import { transformFormDataToMeetingData } from "../../store/storeUtils";
import NavBar from "../../components/NavBar/NavBar";

export default function NewMeetingPage({ onSubmit }) {
  const router = useRouter();
  const createMeeting = useMeetingStore((state) => state.createMeeting);

  function handleSubmit(dataFromAddedEntry) {
    const meetingData = transformFormDataToMeetingData(dataFromAddedEntry);

    if (onSubmit) onSubmit(meetingData);
    createMeeting(meetingData);
    router.push(`/meetings/${meetingData.id}`);
  }

  return (
    <>
      <Header />
      <NewMeetingForm
        onSubmit={handleSubmit}
        formTitle="Plan ein DogDate!"
        description="Leg ein neues DogDate an, damit andere daran teilnehmen
        können."
      />
      <NavBar />
    </>
  );
}
