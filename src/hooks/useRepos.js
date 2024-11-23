import { useEffect, useState } from "react";
import getRepos from "../services/getRepos";
const useRepos = (url, limit) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    getRepos(url).then((repos) => setData(repos.slice(0, limit)));
  }, [url, limit]);
  return data;
};
export default useRepos;
