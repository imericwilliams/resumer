import React, { useEffect, useState } from "react";

import { Text, ProgressBar } from "components";
import { useNavigate } from "react-router-dom";



const SplashPage = () => {
  const navigate = useNavigate();
  { setTimeout(()=>{ navigate("/welcome") }, 5000)}
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

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
        
          <ProgressBar bgcolor={"#FFFFFF"} completed={completed}></ProgressBar>
        </div>
      </div>
    </>
  );
};

export default SplashPage;
