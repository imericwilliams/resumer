import React from "react";

import { Img, Text, Line, List } from "components";
import { useNavigate } from "react-router-dom";

const Home1Page = () => {

  const navigate = useNavigate();
  
  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-center justify-end mx-[auto] pt-[16px] px-[16px] w-[100%]">
        <div className="flex flex-col gap-[19px] items-end justify-end max-w-[1408px] ml-[auto] mr-[auto] mt-[108px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] w-[100%]">
          <Img
            src="images/img_menu.svg"
            className="h-[65px] mr-[5px] object-cover w-[auto]"
            alt="menu"
            onClick={() => navigate("/settings")}
          />
          <div className="flex flex-col items-start justify-start w-[100%]">
            <Text
              className="text-indigo_900 text-left tracking-ls05 md:tracking-ls1 sm:tracking-ls1 w-[auto]"
              as="h2"
              variant="h2"
            >
              Hello, John Doe!
            </Text>
            <Line className="bg-indigo_900 h-[10px] md:ml-[0] sm:ml-[0] ml-[194px] mt-[17px] w-[22%]" />
            <div className="flex md:flex-col sm:flex-col flex-row md:gap-[32px] sm:gap-[32px] items-center justify-between mt-[65px] w-[100%]">
              <aside className="md:hidden sm:hidden w-[19%]">
                <div className="flex flex-col items-center justify-start w-[100%]">
                  <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[67px] items-center justify-start w-[100%]">
                    <div className="bg-bluegray_100_1e border-4 border-indigo_900 border-solid flex flex-col items-center justify-start p-[59px] sm:px-[20px] md:px-[40px] w-[100%]">
                      <Img
                        src="images/img_plussquare.svg"
                        className="h-[135px] my-[51px] object-cover w-[auto]"
                        alt="plussquare"
                      />
                    </div>
                    <div className="bg-indigo_900_4c h-[359px] w-[100%]"></div>
                  </div>
                </div>
              </aside>
              <List
                className="flex flex-col sm:flex-none sm:gap-[22px] md:gap-[43px] gap-[60px] sm:self-stretch sm:w-[100%] w-[80%]"
                orientation="vertical"
              >
                <div className="gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-indigo_900_4c h-[359px] mb-[3px] w-[100%]"></div>
                  <div className="bg-indigo_900_4c h-[359px] mt-[3px] w-[100%]"></div>
                  <div className="bg-indigo_900_4c h-[359px] mb-[3px] w-[100%]"></div>
                  <div className="bg-indigo_900_4c h-[359px] mt-[3px] w-[100%]"></div>
                </div>
                <div className="gap-[32px] grid sm:grid-cols-1 md:grid-cols-2 grid-cols-4 items-center justify-between my-[0] w-[100%]">
                  <div className="bg-indigo_900_4c h-[359px] mt-[3px] w-[100%]"></div>
                  <div className="bg-indigo_900_4c h-[359px] mb-[3px] w-[100%]"></div>
                  <div className="bg-indigo_900_4c h-[359px] mt-[3px] w-[100%]"></div>
                  <div className="bg-indigo_900_4c h-[359px] mt-[3px] w-[100%]"></div>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home1Page;
