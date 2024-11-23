export const HeaderProfile = ({
  avatar_url,
  followers,
  following,
  location,
}) => {
  return (
    <div className="flex gap-3 mb-10 sm:gap-14">
      <div className="p-2 rounded-xl bg-background-basic -translate-y-14">
        <img
          src={avatar_url}
          alt=""
          className="w-24 rounded-xl"
        />
      </div>

      <div className="flex flex-col gap-5 lg:flex-row lg:items-center">
        <div className="bg-status p-3 rounded-lg flex gap-2 items-center">
          <span className="text-text-dark border-r-text-dark border-r block p-1">
            Followers
          </span>
          <span className="block">{followers}</span>
        </div>
        <div className="bg-status p-3 rounded-lg flex gap-2 items-center">
          <span className="text-text-dark border-r-text-dark border-r block p-1">
            Following
          </span>
          <span className="block">{following}</span>
        </div>
        <div className="bg-status p-3 rounded-lg flex gap-2 items-center">
          <span className="text-text-dark border-r-text-dark border-r block p-1">
            Location
          </span>
          <span className="block">{location}</span>
        </div>
      </div>
    </div>
  );
};
