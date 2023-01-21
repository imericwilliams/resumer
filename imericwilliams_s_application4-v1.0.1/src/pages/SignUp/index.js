import React from "react";

import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start mx-[auto] p-[205px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Text
          className="text-indigo_900 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
          as="h2"
          variant="h2"
        >
          Résumer
        </Text>
        <div className="flex flex-col items-start justify-start md:w-[100%] sm:w-[100%] w-[32%]">
          <Text
            className="font-bold text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            variant="body1"
          >
            Enter Email Address
          </Text>
          <Input
            className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
            wrapClassName="md:w-[100%] mt-[12px] sm:h-[auto] sm:w-[100%] w-[320px]"
            type="email"
            name="InputField"
            placeholder="Email"
            shape="RoundedBorder8"
            variant="OutlineGray600"
          ></Input>
          <Text
            className="font-bold mt-[23px] text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            variant="body1"
          >
            Enter Password
          </Text>
          <Input
            className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
            wrapClassName="md:w-[100%] mt-[5px] sm:h-[auto] sm:w-[100%] w-[320px]"
            type="password"
            name="InputField One"
            placeholder="Password"
            shape="RoundedBorder8"
            variant="OutlineGray600"
          ></Input>
          <Text
            className="font-bold mt-[23px] text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            variant="body1"
          >
            Re-enter Password
          </Text>
          <div className="bg-indigo_100 border border-gray_600 border-solid flex flex-col h-[57px] sm:h-[auto] items-start justify-center mt-[5px] p-[16px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[320px]">
            <Input
              className="font-normal leading-[normal] sm:mx-[0] not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[auto]"
              type="password"
              name="FrameOne"
              placeholder="Re-enter Password"
              size="sm"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[15px] mt-[62px] sm:text-[30px] md:text-[32px] text-[34px] text-center text-white_A700 tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[290px]"
            onClick={() => navigate("/emailverification")}
            size="md"
          >
            Sign Up
          </Button>
        </div>
      </div>
    </>
  );
};

export default SignUpPage;
