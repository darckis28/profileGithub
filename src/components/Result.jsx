const Result = ({ avatar_url, login, bio }) => {
  return (
    <div className="bg-status w-80 mx-auto mt-2 rounded-lg flex gap-2 p-2">
      <img
        src={avatar_url}
        alt={`imagen de ${login}" `}
        className="w-20 rounded-lg aspect-square"
      />
      <div className="flex flex-col justify-center gap-2">
        <h2 className="font-bold">{login}</h2>
        <p className="text-xs">{bio}</p>
      </div>
    </div>
  );
};
export default Result;
