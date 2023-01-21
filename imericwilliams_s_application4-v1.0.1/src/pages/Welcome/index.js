import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Text, Img, Button } from "components";
import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-start justify-start mx-[auto] pr-[118px] sm:pr-[20px] md:pr-[40px] py-[118px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[144px] md:gap-[40px] sm:gap-[40px] items-start justify-start mb-[125px] md:w-[100%] sm:w-[100%] w-[99%]">
          <div className="flex flex-col gap-[51px] justify-start md:w-[100%] sm:w-[100%] w-[67%]">
            <Text
              className="md:ml-[0] sm:ml-[0] ml-[578px] text-indigo_900 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h2"
              variant="h2"
            >
              Résumer
            </Text>
            <Img
              src="images/img_imggroup2.svg"
              className="h-[537px] mr-[14px] object-cover w-[auto]"
              alt="imgGroupTwo"
            />
          </div>
          <div className="flex flex-col items-center justify-start mt-[313px] md:w-[100%] sm:w-[100%] w-[23%]">
            <Text
              className="font-bold text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
              as="h4"
              variant="h4"
            >
              Welcome
            </Text>
            <Text
              className="font-medium mt-[31px] text-indigo_900 text-left tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
              as="h6"
              variant="h6"
            >
              Time to get you job ready!
            </Text>
            <Button
              className="common-pointer cursor-pointer font-bold leading-[normal] mt-[78px] text-[20px] text-center text-white_A700 tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[290px]"
              onClick={() => navigate("/typeform")}
              size="3xl"
            >
              Let’s Get Started!
            </Button>
            <div className="flex flex-row gap-[5px] items-start justify-start mt-[25px] md:w-[100%] sm:w-[100%] w-[auto]">
              <Text
                className="font-medium text-indigo_900 text-left tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                as="h6"
                variant="h6"
              >
                Already a user?
              </Text>
              <Text
                className="common-pointer font-bold text-indigo_900 text-left tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                as="h6"
                variant="h6"
                onClick={() => loginWithRedirect()}
              >
                Login
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
