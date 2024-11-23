import { HeaderProfile } from "./HeaderProfile";
import Repos from "./Repos";

const MainProfile = ({ data }) => {
  const { avatar_url, login, bio, followers, following, location, repos_url } =
    data;

  return (
    <main className="sm:px-16">
      <HeaderProfile
        avatar_url={avatar_url}
        followers={followers}
        following={following}
        location={location}
      />
      <Repos
        login={login}
        bio={bio}
        repos_url={repos_url}
      />
    </main>
  );
};
export default MainProfile;
