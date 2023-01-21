import React from "react";

import { Img, Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const DeleteAccountPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[16px] w-[100%]">
        <Img
          src="images/img_close.svg"
          className="common-pointer h-[42px] mt-[22px] object-cover md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[42px]"
          onClick={() => navigate(-1)}
          alt="close"
        />
        <Img
          src="images/img_warning.svg"
          className="h-[37px] mt-[215px] object-cover md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[auto]"
          alt="warning"
        />
        <Text
          className="font-bold mt-[33px] mx-[auto] text-center text-indigo_900 tracking-ls051 md:tracking-ls11 sm:tracking-ls11"
          variant="body1"
        >
          <span className="text-indigo_900 text-[34px] tracking-ls025 font-montserrat sm:tracking-ls11 sm:text-[30px] md:tracking-ls11 md:text-[32px]">
            Confirm Account Delete
            <br />
          </span>
          <span className="text-indigo_900 text-[20px] tracking-ls015000000596046448 font-montserrat font-medium sm:tracking-ls11 md:tracking-ls11">
            You will not be able to recover your account
            <br />
            or access any resumes that you have created
          </span>
        </Text>
        <Text
          className="font-medium mt-[42px] text-indigo_900 text-left tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
          as="h6"
          variant="h6"
        >
          <span className="text-indigo_900 text-[20px] font-montserrat">
            Type “
          </span>
          <span className="text-indigo_900 text-[20px] font-montserrat font-bold">
            DELETE
          </span>
          <span className="text-indigo_900 text-[20px] font-montserrat">
            ” to confirm
          </span>
        </Text>
        <Input
          className="font-medium leading-[normal] sm:mx-[0] p-[0] text-[20px] placeholder:text-indigo_900 text-indigo_900 text-left tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[100%]"
          wrapClassName="md:w-[100%] mt-[40px] sm:h-[auto] sm:w-[100%] w-[320px]"
          name="InputField"
          placeholder="DELETE"
          shape="RoundedBorder8"
          size="md"
          variant="OutlineGray600"
        ></Input>
        <Button
          className="common-pointer cursor-pointer font-bold leading-[normal] mb-[266px] mt-[39px] sm:text-[30px] md:text-[32px] text-[34px] text-center text-white_A700 tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[418px]"
          onClick={() => navigate("/welcome")}
        >
          Delete Account
        </Button>
      </div>
    </>
  );
};

export default DeleteAccountPage;
