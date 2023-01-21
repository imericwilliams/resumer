import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Text, Input, Button } from "components";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat md:gap-[40px] sm:gap-[40px] gap-[80px] items-center justify-start mx-[auto] p-[214px] sm:px-[20px] md:px-[40px] w-[100%]">
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
          <Button
            className="common-pointer cursor-pointer font-bold leading-[normal] md:ml-[0] sm:ml-[0] ml-[15px] mt-[62px] sm:text-[30px] md:text-[32px] text-[34px] text-center text-white_A700 tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[290px]"
            onClick={() => loginWithRedirect()}
            size="md"
          >
            Login
          </Button>
          <Text
            className="common-pointer font-bold md:ml-[0] sm:ml-[0] ml-[64px] mt-[23px] text-indigo_900 text-left tracking-ls015000000596046448 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
            as="h6"
            variant="h6"
            onClick={() => navigate("/forgotpassword")}
          >
            Forgot Password?
          </Text>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
