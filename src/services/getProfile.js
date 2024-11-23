const getProfile = async (name) => {
  try {
    const data = await fetch(`https://api.github.com/users/${name}`);
    const response = await data.json();
    if (response.status === "404") throw new Error(response.message);
    return response;
  } catch (error) {}
};
export default getProfile;
