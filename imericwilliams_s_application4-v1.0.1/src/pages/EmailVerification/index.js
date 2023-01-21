import React from "react";

import { Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const EmailVerificationPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col items-center justify-end mx-[auto] p-[341px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Text
          className="font-inter font-semibold mt-[6px] text-indigo_900 text-left"
          as="h6"
          variant="h6"
        >
          <span className="text-indigo_900 text-[34px] tracking-ls025 font-montserrat font-bold sm:tracking-ls11 sm:text-[30px] md:tracking-ls11 md:text-[32px]">
            Thank You for signing up!
            <br />
          </span>
          <span className="text-indigo_900 text-[20px]">
            <br />
          </span>
        </Text>
        <Text
          className="font-montserrat font-normal mt-[20px] not-italic text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11"
          variant="body1"
        >
          <span className="text-indigo_900 text-[24px] sm:text-[20px] md:text-[22px]">
            Verify your email address
            <br />
          </span>
          <span className="text-indigo_900 text-[16px]">
            <br />
          </span>
        </Text>
        <Text
          className="font-montserrat font-normal mt-[55px] sm:mx-[0] mx-[auto] not-italic text-center text-indigo_900 tracking-ls051 md:tracking-ls11 sm:tracking-ls11 sm:w-[100%] w-[49%]"
          variant="body1"
        >
          <span className="text-indigo_900 text-[16px]">
            Please confirm that you want to use{" "}
          </span>
          <span className="text-indigo_900 text-[16px] font-bold">
            your@email.com
          </span>
          <span className="text-indigo_900 text-[16px]">
            {" "}
            as your email address
          </span>
        </Text>
        <Button
          className="common-pointer cursor-pointer font-bold font-montserrat leading-[normal] mt-[80px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[314px]"
          onClick={() => navigate("/verificationcode")}
          size="xl"
        >
          Verify Email
        </Button>
      </div>
    </>
  );
};

export default EmailVerificationPage;
