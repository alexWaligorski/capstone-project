import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import DogProfileForm from "../../components/DogProfileForm/DogProfileForm";
import { transformDogProfileFormDataToDogProfileData } from "../../store/storeUtils";
import { useDogProfileStore } from "../../store/store";
import { useRouter } from "next/router";

export default function EditProfilePage({ onSubmit }) {
  const newDogProfile = useDogProfileStore((state) => state.createDogProfile);
  const router = useRouter();

  function handleSubmit(data) {
    const dogProfileData = transformDogProfileFormDataToDogProfileData(data);

    if (onSubmit) onSubmit(dogProfileData);
    newDogProfile(dogProfileData);

    router.push(`/profile`);
  }

  return (
    <>
      <Header />
      <DogProfileForm
        onSubmit={handleSubmit}
        formTitle="Leg ein Hundeprofil an!"
        description="Mit deinem Hundeprofil kannst du wichtige Informationen über deinen Hund mit Teilnehmenden deiner DogDates teilen."
      />
      <NavBar />
    </>
  );
}
