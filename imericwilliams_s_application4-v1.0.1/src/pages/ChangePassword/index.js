import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const ChangePasswordPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[18px] w-[100%]">
      <div className="hidden">
        <Img
          src="images/img_arrowleft_indigo_900.svg"
          className="common-pointer h-[50px] mt-[16px] object-cover md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[50px]"
          onClick={() => navigate(-1)}
          alt="arrowleft"
        />
        </div>
        
        <Text
          className="mt-[123px] text-indigo_900 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
          as="h2"
          variant="h2"
        >
          Résumer
        </Text>
        <div className="flex flex-col items-start justify-start mb-[190px] mt-[80px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[23%]">
          <Text
            className="font-bold text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            variant="body1"
          >
            Enter Current Password
          </Text>
          <Input
            className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
            wrapClassName="md:w-[100%] mt-[12px] sm:h-[auto] sm:w-[100%] w-[320px]"
            type="password"
            name="InputField"
            placeholder="Password"
            shape="RoundedBorder8"
            variant="OutlineGray600"
          ></Input>
          <Text
            className="font-bold mt-[23px] text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            variant="body1"
          >
            Enter New Password
          </Text>
          <Input
            className="font-normal leading-[normal] not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
            wrapClassName="md:w-[100%] mt-[5px] sm:h-[auto] sm:w-[100%] w-[320px]"
            type="password"
            name="InputField One"
            placeholder="New Password"
            shape="RoundedBorder8"
            variant="OutlineGray600"
          ></Input>
          <Text
            className="font-bold mt-[23px] text-indigo_900 text-left tracking-ls051 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            variant="body1"
          >
            Re-enter New Password
          </Text>
          <div className="bg-indigo_100 border border-gray_600 border-solid flex flex-col h-[57px] sm:h-[auto] items-start justify-center mt-[5px] p-[16px] rounded-radius8 md:w-[100%] sm:w-[100%] w-[320px]">
            <Input
              className="font-normal leading-[normal] sm:mx-[0] not-italic p-[0] text-[14px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
              wrapClassName="md:w-[100%] sm:w-[100%] w-[auto]"
              type="password"
              name="FrameOne"
              placeholder="Re-enter New Password"
              size="sm"
            ></Input>
          </div>
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[15px] mt-[62px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[290px]"
            onClick={() => navigate("/passwordreset")}
            size="2xl"
          >
            Update Password
          </Button>
        </div>
      </div>
    </>
  );
};

export default ChangePasswordPage;
