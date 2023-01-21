import React from "react";

import { Img, Text, Line } from "components";
import { useNavigate } from "react-router-dom";

const AccountSettingsPage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-start justify-start mx-[auto] p-[16px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[277px] md:gap-[40px] sm:gap-[40px] items-start justify-start mb-[77px] mt-[46px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[66%]">
          <aside className="md:hidden sm:hidden w-[23%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[792px] justify-start w-[100%]">
                <Img
                  src="images/img_arrowleft.svg"
                  className="common-pointer h-[50px] object-cover w-[50px]"
                  onClick={() => navigate(-1)}
                  alt="arrowleft"
                />
                <div className="flex flex-col items-center justify-start md:ml-[0] sm:ml-[0] ml-[10px] md:w-[100%] sm:w-[100%] w-[96%]">
                  <Text
                    className="common-pointer font-bold text-indigo_900 text-left w-[auto]"
                    as="h5"
                    variant="h5"
                    onClick={() => navigate("/deleteaccount")}
                  >
                    Delete Account
                  </Text>
                </div>
              </div>
            </div>
          </aside>
          <div className="flex flex-col gap-[188px] md:gap-[40px] sm:gap-[40px] items-center justify-start mt-[178px] md:w-[100%] sm:w-[100%] w-[48%]">
            <Text
              className="text-indigo_900 text-left w-[auto]"
              as="h3"
              variant="h3"
            >
              Account Settings
            </Text>
            <div className="flex flex-col gap-[16px] items-center justify-start md:w-[100%] sm:w-[100%] w-[85%]">
              <div
                className="common-pointer flex flex-row items-center justify-between w-[100%]"
                onClick={() => navigate("/changepassword")}
              >
                <Text
                  className="flex-grow font-normal not-italic text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11"
                  as="h4"
                  variant="h4"
                >
                  Change Password
                </Text>
                <Img
                  src="images/img_arrowright.svg"
                  className="h-[13px] object-cover w-[auto]"
                  alt="arrowright"
                />
              </div>
              <Line className="bg-indigo_900 h-[4px] w-[100%]" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccountSettingsPage;
