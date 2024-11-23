async function getRepos(url) {
  try {
    const data = await fetch(url);
    const response = await data.json();
    if (response.status === "404") throw new Error(response.message);
    return response;
  } catch (error) {}
}
export default getRepos;
