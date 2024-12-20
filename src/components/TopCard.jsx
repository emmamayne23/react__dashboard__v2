/* eslint-disable react/prop-types */
const TopCard = ({
  title = "portfolio",
  subtitle = "Explore Our Latest Works",
}) => {
  return (
    <>
      <div className="bg-primary_dark grid place-items-center  h-64 md:h-80 lg:h-96 xl:h-[400px]">
        <div>
          <p className=" text-primary uppercase text-center mt-10">{title}</p>
          <h1 className="font-bold text-3xl text-center md:text-4xl lg:text-5xl">
            {subtitle}
          </h1>
        </div>
      </div>
    </>
  );
};

export default TopCard;
