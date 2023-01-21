import React from "react";

import { Img, Text, Button } from "components";
import { useNavigate } from "react-router-dom";

const ProfilePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[16px] w-[100%]">
        <Img
          src="images/img_arrowleft.svg"
          className="common-pointer h-[50px] mt-[48px] object-cover md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[50px]"
          onClick={() => navigate(-1)}
          alt="arrowleft"
        />
        <Text
          className="mt-[46px] text-indigo_900 text-left w-[auto]"
          as="h3"
          variant="h3"
        >
          Profile
        </Text>
        <Button
          className="common-pointer cursor-pointer font-bold leading-[normal] mb-[609px] mt-[92px] sm:text-[30px] md:text-[32px] text-[34px] text-center text-white_A700 tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[418px]"
          onClick={() => navigate("/updateresume")}
        >
          Update Resume
        </Button>
      </div>
    </>
  );
};

export default ProfilePage;
