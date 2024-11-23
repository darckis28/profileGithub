import Nesting from "../icons/Nesting";
import Star from "../icons/Star";
import Chield from "../icons/Chield";
import getUpadteDate from "../Utils/getUpdateDate";
const Card = ({
  name,
  description,
  pushed_at,
  stargazers_count,
  forks_count,
  license,
}) => {
  return (
    <li className="bg-card-gradient p-4 rounded-lg">
      <h3 className="text-lg font-bold mb-3">{name}</h3>
      <p className="text-sm mb-5">{description}</p>
      <div className="flex gap-5 items-center ">
        <div className="flex gap-5">
          {license && (
            <p className="flex gap-2">
              <Chield />
              <span>MIT</span>
            </p>
          )}
          <p className="flex gap-2">
            <Nesting />
            <span>{forks_count}</span>
          </p>
          <p className="flex gap-2">
            <Star />
            <span>{stargazers_count}</span>
          </p>
        </div>
        <span className="text-xs">
          {" "}
          updated {getUpadteDate(pushed_at)} days ago
        </span>
      </div>
    </li>
  );
};
export default Card;
