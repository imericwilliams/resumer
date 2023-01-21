import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


import { Img, Text } from "components";
import { useNavigate } from "react-router-dom";

const GeneratedResumePage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();
  // const login = () => loginWithRedirect();
  // const signUp = () => loginWithRedirect({ allowLogin: false});

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] p-[19px] w-[100%]">
        <Img
          src="images/img_close.svg"
          className="hidden"
          onClick={() => navigate(-1)}
          alt="close"
        />
        <Text
          className="mt-[9px] text-indigo_900 text-left w-[auto]"
          as="h3"
          variant="h3"
        >
          Complete!
        </Text>
        <Text
          className="font-normal mt-[33px] mx-[auto] not-italic text-center text-indigo_900"
          as="h5"
          variant="h5"
        >
          <span className="text-indigo_900 text-[24px] font-montserrat sm:text-[20px] md:text-[22px]">
            Based on your responses, <br />
          </span>
          <span className="text-indigo_900 text-[24px] font-montserrat font-bold sm:text-[20px] md:text-[22px]">
            Résumer
          </span>
          <span className="text-indigo_900 text-[24px] font-montserrat sm:text-[20px] md:text-[22px]">
            {" "}
            has generated
            <br /> this resume which best represents you
          </span>
        </Text>
        <div className="flex sm:flex-col flex-row gap-[6px] items-start justify-start mb-[80px] mt-[592px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[auto]">
          <Text
            className="common-pointer font-bold text-indigo_900 text-left w-[auto]"
            as="h5"
            variant="h5"
            onClick={() => loginWithRedirect()}
          >
            Sign Up
          </Text>
          <Text
            className="font-normal not-italic text-indigo_900 text-left w-[auto]"
            as="h5"
            variant="h5"
          >
            now to download your FREE resume
          </Text>
        </div>
      </div>
    </>
  );
};

export default GeneratedResumePage;
