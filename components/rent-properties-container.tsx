import type { NextPage } from "next";
import PropertyCard from "./property-card";

const RentPropertiesContainer: NextPage = () => {
  return (
    <div className="self-stretch flex flex-col items-center justify-start py-[86px] px-0 gap-[39px] text-center text-21xl text-primary-800 font-body-regular-600">
      <div className="self-stretch flex flex-col items-center justify-start gap-[40px] max-w-[95%px] md:pl-[60px] md:pr-[60px] md:box-border">
        <div className="w-[688px] flex flex-col items-center justify-start gap-[24px] max-w-[95%px] lg:max-w-[95%] md:self-stretch md:w-auto">
          <div className="self-stretch relative leading-[48px] font-semibold">
            Latest Properties of Rent
          </div>
          <div className="self-stretch relative text-xl leading-[28px] text-lightslategray">
            Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
            posuere cubilia curae; Proin sodales ultrices nulla blandit
            volutpat.
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-center justify-center py-0 px-2.5 gap-[32px]">
          <PropertyCard
            imageDimensions="/property-image7@2x.png"
            imageDimensionsText="/car7.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork7.svg"
            imageDimensionsText6="/heart4.svg"
            imageDimensionsText7="/plus4.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/property-image8@2x.png"
            imageDimensionsText="/car7.svg"
            imageDimensionsText2="/bathtub5.svg"
            imageDimensionsText3="/arrowsout2.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork8.svg"
            imageDimensionsText6="/heart4.svg"
            imageDimensionsText7="/plus4.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/property-image9@2x.png"
            imageDimensionsText="/car7.svg"
            imageDimensionsText2="/bathtub6.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork9.svg"
            imageDimensionsText6="/heart5.svg"
            imageDimensionsText7="/plus5.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
          <PropertyCard
            imageDimensions="/property-image10@2x.png"
            imageDimensionsText="/car8.svg"
            imageDimensionsText2="/bathtub7.svg"
            imageDimensionsText3="/arrowsout3.svg"
            imageDimensionsText4="/ellipse-1@2x.png"
            imageDimensionsText5="/sharenetwork9.svg"
            imageDimensionsText6="/heart5.svg"
            imageDimensionsText7="/plus5.svg"
            propWidth="unset"
            propFlex="1"
            propMinWidth="355px"
            propMaxWidth="400px"
          />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-3 px-6 bg-primary-500 rounded flex flex-row items-start justify-start hover:bg-steelblue sm:max-w-full">
        <div className="relative text-base leading-[24px] font-medium font-body-regular-600 text-gray-white text-center">
          Load more listing
        </div>
      </button>
    </div>
  );
};

export default RentPropertiesContainer;
