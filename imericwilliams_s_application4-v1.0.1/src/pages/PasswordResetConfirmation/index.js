import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const PasswordResetConfirmationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-start mx-[auto] p-[336px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Img
          src="images/img_checkmark.svg"
          className="h-[68px] object-cover w-[68px]"
          alt="checkmark"
        />
        <Text
          className="font-inter font-semibold mt-[45px] text-indigo_900 text-left"
          as="h6"
          variant="h6"
        >
          <span className="text-indigo_900 text-[34px] tracking-ls025 font-montserrat font-bold sm:tracking-ls11 sm:text-[30px] md:tracking-ls11 md:text-[32px]">
            Password Has Been Updated!
            <br />
          </span>
          <span className="text-indigo_900 text-[20px]">
            <br />
          </span>
        </Text>
        <Button
          className="common-pointer cursor-pointer font-bold font-montserrat leading-[normal] mb-[43px] mt-[75px] sm:text-[30px] md:text-[32px] text-[34px] text-center text-white_A700 tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[418px]"
          onClick={() => navigate("/login")}
        >
          Continue
        </Button>
      </div>
    </>
  );
};

export default PasswordResetConfirmationPage;
