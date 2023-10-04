import type { NextPage } from "next";

const Card5: NextPage = () => {
  return (
    <a className="[text-decoration:none] flex-1 rounded-lg h-[241px] flex flex-row items-start justify-start p-2.5 box-border relative bg-[url('/card-5@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-5xl text-gray-white font-body-regular-600 md:flex-[unset] md:self-stretch">
      <div className="my-0 mx-[!important] absolute top-[16px] left-[16px] flex flex-col items-start justify-start gap-[11px] z-[0]">
        <div className="relative leading-[32px] font-semibold">Centerville</div>
        <div className="relative text-base leading-[24px] text-center">
          25 listings
        </div>
      </div>
    </a>
  );
};

export default Card5;
