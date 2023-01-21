import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const PasswordResetPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-end mx-[auto] p-[365px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Text
          className="font-inter font-semibold mt-[10px] text-indigo_900 text-left"
          as="h6"
          variant="h6"
        >
          <span className="text-indigo_900 text-[34px] tracking-ls025 font-montserrat font-bold sm:tracking-ls11 sm:text-[30px] md:tracking-ls11 md:text-[32px]">
            Password Reset
            <br />
          </span>
          <span className="text-indigo_900 text-[20px]">
            <br />
          </span>
        </Text>
        <Text
          className="font-montserrat font-normal mt-[26px] not-italic text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11"
          variant="body1"
        >
          <span className="text-indigo_900 text-[24px] sm:text-[20px] md:text-[22px]">
            Your password has been reset successfully!
            <br />
          </span>
          <span className="text-indigo_900 text-[16px]">
            <br />
          </span>
        </Text>
        <Button
          className="common-pointer cursor-pointer font-bold font-montserrat leading-[normal] mt-[120px] sm:text-[30px] md:text-[32px] text-[34px] text-center text-white_A700 tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[418px]"
          onClick={() => navigate("/home1")}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default PasswordResetPage;
