import styled from "styled-components";
import DogProfile from "../../components/DogProfile/DogProfile";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import AddButton from "../../components/AddButton/AddButton";
import { useDogProfileStore } from "../../store/store";

export default function ProfilePage() {
  const dogProfiles = useDogProfileStore((state) => state.dogProfiles);
  const dogInfo = dogProfiles[0];
  console.log("dogInfo", dogInfo);
  return (
    <StyledMain>
      <Header />
      {dogProfiles.length !== 0 ? (
        <DogProfile dogData={dogInfo} />
      ) : (
        <AddButton text="NEUES PROFIL" href="/profile/edit" />
      )}
      <NavBar />
    </StyledMain>
  );
}

const StyledMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 11vh;
  margin-bottom: 5rem;
`;
