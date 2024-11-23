import { useState } from "react";
import Hero from "./components/Hero";
import getProfile from "./services/getProfile";
import MainProfile from "./components/MainProfile";

function App() {
  const [profile, setProfile] = useState(null);
  const [profileName, setProfileName] = useState(null);

  const searchProfile = (e) => {
    const userName = e.target.value;
    if (userName !== "") {
      getProfile(userName)
        .then((data) => {
          setProfile(data);
        })
        .catch((e) => setProfile(null));
    }
  };
  const getUser = (e) => {
    e.preventDefault();
    setProfileName(profile);
  };
  return (
    <>
      <Hero
        onInput={searchProfile}
        onSubmit={getUser}
        data={profile}
      />
      {profileName && <MainProfile data={profileName} />}
    </>
  );
}

export default App;
