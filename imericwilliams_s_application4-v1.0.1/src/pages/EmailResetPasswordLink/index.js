import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const EmailResetPasswordLinkPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[320px] sm:px-[20px] md:px-[40px] w-[100%]">
        <Img
          src="images/img_send.svg"
          className="h-[68px] object-cover w-[68px]"
          alt="send"
        />
        <Text
          className="font-bold mt-[33px] text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
          as="h4"
          variant="h4"
        >
          Check Email To Reset Password
        </Text>
        <Text
          className="font-normal mt-[28px] mx-[auto] not-italic text-center text-indigo_900 tracking-ls051 md:tracking-ls11 sm:tracking-ls11"
          variant="body1"
        >
          <span className="text-indigo_900 text-[24px] font-montserrat sm:text-[20px] md:text-[22px]">
            An email with a link was sent to your@email.com to reset your
            password
            <br />
          </span>
          <span className="text-indigo_900 text-[16px] font-montserrat">
            <br />
          </span>
        </Text>
        <Button
          className="common-pointer cursor-pointer font-bold leading-[normal] mb-[5px] mt-[35px] sm:text-[20px] md:text-[22px] text-[24px] text-center text-white_A700 w-[314px]"
          onClick={() => navigate("/createnewpassword")}
          size="lg"
        >
          Reset Your Password
        </Button>
      </div>
    </>
  );
};

export default EmailResetPasswordLinkPage;
