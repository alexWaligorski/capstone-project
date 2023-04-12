import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import DogProfileForm from "../../components/DogProfileForm/DogProfileForm";
import {
  transformDogProfileFormDataToDogProfileData,
  transformDogProfileDataToDogProfileFormData,
} from "../../store/storeUtils";
import { useDogProfileStore } from "../../store/store";
import { useRouter } from "next/router";

export default function EditProfilePage({ onSubmit }) {
  const addOrUpdateDogProfile = useDogProfileStore(
    (state) => state.upsertDogProfile
  );
  const dogProfiles = useDogProfileStore((state) => state.dogProfiles);
  const currentDog = dogProfiles[0];
  const currentDogFormData =
    transformDogProfileDataToDogProfileFormData(currentDog);
  const router = useRouter();

  function handleSubmit(data) {
    const dogProfileData = transformDogProfileFormDataToDogProfileData(data);

    if (onSubmit) onSubmit(dogProfileData);
    addOrUpdateDogProfile(dogProfileData);

    router.push(`/profile`);
  }

  return (
    <>
      <Header />
      <DogProfileForm
        onSubmit={handleSubmit}
        defaultDogData={currentDogFormData ? currentDogFormData : null}
        formTitle="Leg ein Hundeprofil an!"
        description="Mit deinem Hundeprofil kannst du wichtige Informationen über deinen Hund mit Teilnehmenden deiner DogDates teilen."
      />
      <NavBar />
    </>
  );
}
