import type { NextPage } from "next";
import Card2 from "./card2";
import Card3 from "./card3";
import Card4 from "./card4";
import Card5 from "./card5";

const AreaContainer: NextPage = () => {
  return (
    <div className="self-stretch flex-1 flex flex-col items-center justify-start py-[53px] px-[50px] gap-[45px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start py-0 px-[30px] gap-[24px] md:self-stretch md:w-auto">
        <div className="self-stretch relative leading-[48px] font-semibold">
          Properties by Area
        </div>
        <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
          posuere cubilia curae; Proin sodales ultrices nulla blandit volutpat.
        </div>
      </div>
      <div className="self-stretch flex-1 flex flex-row flex-wrap items-start justify-center py-0 px-2.5 box-border max-w-[95%px] text-left text-5xl text-gray-white">
        <div className="self-stretch flex-1 flex flex-col items-center justify-start gap-[24px] max-w-[1300px]">
          <div className="self-stretch flex flex-row items-start justify-center gap-[26px] lg:flex-row md:flex-col">
            <Card2 />
            <Card2 />
            <Card3 />
          </div>
          <div className="self-stretch flex flex-row items-start justify-center gap-[24px] lg:flex-row md:flex-col">
            <Card4 />
            <Card5 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AreaContainer;
