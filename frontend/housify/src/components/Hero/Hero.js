import HeroImageBox from "../utils/HeroImageBox";
import useFetch from "../utils/useFetch";

const Hero = () => {
  const { items } = useFetch();

  return (
    <div className="w-full">
      <div className="max-w-[1440px] mx-auto py-5 px-10  md:flex justify-between">
        <div className="md:grid text-center md:text-left grid-cols-2 gap-10">
          {/* Header Text */}
          <div className="my-10 md:my-auto">
            <h1 className="pb-8 text-4xl md:text-6xl">{items.header}</h1>
            {/* <p>{items.text} </p> */}
            <p className="text-6xl mb-10">{items.text}</p>
          </div>

          {/* HeroImageBox component */}
          <HeroImageBox p="Texas ChampHouse UK" url={items[0]?.url} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
