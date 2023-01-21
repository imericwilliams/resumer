import React from "react";

import { Img, Text } from "components";

const GeneratingResumePage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[183px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Img
          src="images/img_imggroup2_gray_300.svg"
          className="h-[437px] object-cover w-[auto]"
          alt="imgGroupTwo"
        />
        <Text
          className="mt-[46px] text-indigo_900 text-left w-[auto]"
          as="h3"
          variant="h3"
        >
          Almost there!
        </Text>
        <div className="bg-gradient  h-[18px] mb-[41px] mt-[64px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] rounded-radius6 w-[53%]"></div>
      </div>
    </>
  );
};

export default GeneratingResumePage;
