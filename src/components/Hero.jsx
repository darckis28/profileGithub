import Search from "../icons/Search";
import Result from "./Result";
const Hero = ({ onInput, data, onSubmit }) => {
  return (
    <header
      style={{ backgroundImage: "url(/images/hero.png)" }}
      className="pt-4 w-full h-60 bg-no-repeat bg-cover bg-center"
    >
      <form
        onSubmit={onSubmit}
        id="form"
        className="relative mx-auto w-80"
      >
        <input
          type="text"
          className="w-full bg-background-basic py-3 pl-11 rounded-lg outline-none focus:outline-outline placeholder:text-text-dark font-bold"
          placeholder="Username"
          onInput={onInput}
        />
        <span className="absolute top-3 left-2 block">
          <Search />
        </span>
      </form>
      {data && (
        <Result
          login={data.login}
          avatar_url={data.avatar_url}
          bio={data.bio}
        />
      )}
    </header>
  );
};
export default Hero;
