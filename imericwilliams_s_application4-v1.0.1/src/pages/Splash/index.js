import React from "react";

import { Text } from "components";

const SplashPage = () => {
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-start mx-[auto] w-[100%]">
        <div className="bg-indigo_900 flex flex-col items-center justify-end p-[452px] sm:px-[20px] md:px-[40px] w-[100%]">
          <Text
            className="text-left text-white_A700 md:tracking-ls1 sm:tracking-ls1 tracking-ls125 w-[auto]"
            as="h1"
            variant="h1"
          >
            Résumer
          </Text>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
