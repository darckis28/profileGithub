import useRepos from "../hooks/useRepos";
import Card from "./Card";
import { useState } from "react";

const Repos = ({ login, bio, repos_url, license }) => {
  const [limit, setLimit] = useState(4);
  const [all, setAll] = useState(false);
  const data = useRepos(repos_url, limit);
  const [repos, setRepos] = useState(data);
  const getAll = () => {
    setLimit(-1);
    setAll(true);
  };
  return (
    <div>
      <h2 className="text-3xl mb-5 font-bold">{login}</h2>
      <p className="text-xs mb-8">{bio}</p>
      <ul className="grid gap-5 lg:grid-cols-2">
        {data?.map((repo) => (
          <Card
            key={repo.id}
            name={repo.name}
            pushed_at={repo.pushed_at}
            description={repo.description}
            stargazers_count={repo.stargazers_count}
            forks_count={repo.forks_count}
            license={repo.license}
          />
        ))}
      </ul>
      {!all && (
        <button
          onClick={getAll}
          className="mx-auto block my-4"
        >
          View all repositories
        </button>
      )}
    </div>
  );
};
export default Repos;
