import NewMeetingForm from "../../components/NewMeetingForm/NewMeetingForm";
import Header from "../../components/Header/Header";
import { useMeetingStore } from "../../store/store";
import { useRouter } from "next/router";
import { transformFormDataToMeetingData } from "../../store/storeUtils";

export default function NewMeetingPage({ onSubmit }) {
  const router = useRouter();
  const createMeeting = useMeetingStore((state) => state.createMeeting);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const meetingData = transformFormDataToMeetingData(data);

    if (onSubmit) onSubmit(meetingData);
    createMeeting(meetingData);
    router.push("/");
  }

  return (
    <>
      <Header />
      <NewMeetingForm
        onSubmit={handleSubmit}
        formTitle="Plan ein DogDate!"
        description="Lass deinen Hund mit anderen Fellnasen toben und lerne dabei selbst neue
        Menschen kennen. Leg ein neues DogDate an, damit andere daran teilnehmen
        können."
      />
    </>
  );
}
