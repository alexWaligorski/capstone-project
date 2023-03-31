import NewMeetingForm from "../../components/NewMeetingForm/NewMeetingForm";
import Header from "../../components/Header/Header";
import { useMeetingStore } from "../../pages";
import { useRouter } from "next/router";
import { uid } from "uid";

export default function NewMeetingPage({ onSubmit }) {
  const router = useRouter();
  const addMeeting = useMeetingStore((state) => state.addMeeting);

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const transformedDate = transformDate(data.date);
    const attendingDogs = transformAttending(data.attending);
    console.log(attending);
    const excluded = transformExclusionCriteria(data);

    const meetingData = {
      id: uid(),
      location: data.location,
      date: transformedDate,
      time: data.time,
      attending: attendingDogs,
      excluded: excluded,
      furtherInfo: data.furtherInfo ? data.furtherInfo : "",
    };

    if (onSubmit) onSubmit(meetingData);
    addMeeting(meetingData);
    router.push("/");
  }

  function transformAttending(attendingDogsString) {
    let attendingDogsArray = attendingDogsString.split(",");
    let transformedDogs = attendingDogsArray.map((dog) => ({
      name: dog,
      id: uid(),
    }));

    return transformedDogs;
  }

  function transformDate(date) {
    const options = {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const modifiedDate = new Date(date).toLocaleString("de-DE", options);
    return modifiedDate;
  }

  function transformExclusionCriteria(data) {
    let excludedArray = [];

    if (data.unkastrierterueden === "on") {
      excludedArray.push("unkastrierte Rüden");
    }

    if (data.kastrierterueden === "on") {
      excludedArray.push("kastrierte Rüden");
    }

    if (data.kastriertehuendinnen === "on") {
      excludedArray.push("kastrierte Hündinnen");
    }
    if (data.unkastriertehuendinnen === "on") {
      excludedArray.push("unkastrierte Hündinnen");
    }
    if (data.laeufigehuendinnen === "on") {
      excludedArray.push("läufige Hündinnen");
    }
    if (data.welpen === "on") {
      excludedArray.push("Welpen");
    }

    let excluded = excludedArray.join(", ");

    return excluded;
  }

  return (
    <>
      <Header />
      <NewMeetingForm onSubmit={handleSubmit} />{" "}
    </>
  );
}
