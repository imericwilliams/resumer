import React from "react";

import { Text, Stack, List, Line, Button } from "components";
import { useNavigate } from "react-router-dom";

const VerificationCodePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[320px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Text
          className="font-bold text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
          as="h4"
          variant="h4"
        >
          Enter Verification Code
        </Text>
        <Stack className="h-[207px] mt-[28px] relative md:w-[100%] sm:w-[100%] w-[90%]">
          <Text
            className="absolute font-normal inset-x-[0] mx-[auto] not-italic text-center text-indigo_900 top-[0] w-[100%]"
            as="h5"
            variant="h5"
          >
            <span className="text-indigo_900 text-[24px] font-montserrat sm:text-[20px] md:text-[22px]">
              We just sent the verification code to{" "}
            </span>
            <span className="text-indigo_900 text-[24px] font-montserrat font-bold sm:text-[20px] md:text-[22px]">
              your@email.com
            </span>
            <span className="text-indigo_900 text-[24px] font-montserrat sm:text-[20px] md:text-[22px]">
              . Please enter the verification code below within 20 minutes to
              continue
            </span>
          </Text>
          <List
            className="absolute bottom-[0] flex sm:flex-col sm:flex-none flex-row h-[92px] inset-x-[0] justify-center mx-[auto] sm:self-stretch sm:w-[100%] w-[295px]"
            orientation="horizontal"
          >
            <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                0
              </Text>
              <Line className="bg-black_900 h-[1px] self-stretch w-[99%]" />
            </div>
            <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                0
              </Text>
              <Line className="bg-black_900 h-[1px] self-stretch w-[99%]" />
            </div>
            <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                0
              </Text>
              <Line className="bg-black_900 h-[1px] self-stretch w-[99%]" />
            </div>
            <div className="bg-white_A700 flex flex-col gap-[10px] items-center justify-center mx-[0] p-[8px] md:self-stretch sm:self-stretch w-[100%]">
              <Text
                className="font-bold text-black_900 text-left w-[auto]"
                as="h5"
                variant="h5"
              >
                0
              </Text>
              <Line className="bg-black_900 h-[1px] self-stretch w-[99%]" />
            </div>
          </List>
        </Stack>
        <Button
          className="common-pointer cursor-pointer font-bold leading-[normal] mt-[24px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[314px]"
          onClick={() => navigate("/login")}
          size="xl"
        >
          Verify Email
        </Button>
      </div>
    </>
  );
};

export default VerificationCodePage;
