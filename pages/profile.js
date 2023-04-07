import DogProfile from "../components/DogProfile/DogProfile";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import { dogInfo } from "../data";
export default function ProfilePage() {
  return (
    <>
      <Header />
      <DogProfile dogData={dogInfo} />
      <NavBar />
    </>
  );
}
