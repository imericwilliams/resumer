import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Img, Text, Line } from "components";
import { useNavigate } from "react-router-dom";

const SettingsPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth0();
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="bg-white_A700 flex flex-col font-montserrat items-start justify-start mx-[auto] p-[16px] w-[100%]">
        <div className="flex md:flex-col sm:flex-col flex-row gap-[317px] md:gap-[40px] sm:gap-[40px] items-center justify-start mb-[53px] mt-[46px] md:pl-[20px] sm:pl-[20px] md:pr-[20px] sm:pr-[20px] md:w-[100%] sm:w-[100%] w-[64%]">
          <aside className="md:hidden sm:hidden w-[23%]">
            <div className="flex flex-col items-center justify-start w-[100%]">
              <div className="flex flex-col md:gap-[40px] sm:gap-[40px] gap-[800px] items-start justify-start w-[100%]">
                <div className="hidden">
                <Img
                  src="images/img_arrowleft.svg"
                  className="common-pointer h-[50px] object-cover w-[50px]"
                  onClick={() => navigate(-1)}
                  alt="arrowleft"
                />
                </div>
                
              </div>
            </div>
          </aside>
          <div className="flex flex-col items-center justify-start md:w-[100%] sm:w-[100%] w-[42%]">
            <div
              className="common-pointer flex flex-row items-center justify-between w-[100%]"
              onClick={() => navigate("/accountsettings")}
            >
              <Text
                className="flex-grow font-bold text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11"
                as="h4"
                variant="h4"
              >
                Account Settings
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[13px] object-cover w-[auto]"
                alt="arrowright"
              />
            </div>
            <Line className="bg-indigo_900 h-[4px] mt-[8px] w-[100%]" />
            <div
              className="common-pointer flex flex-row items-center justify-between mt-[37px] w-[100%]"
              onClick={() => navigate("/profile")}
            >
              <Text
                className="flex-grow font-bold text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11"
                as="h4"
                variant="h4"
              >
                Profile
              </Text>
              <Img
                src="images/img_arrowright.svg"
                className="h-[13px] object-cover w-[auto]"
                alt="arrowright One"
              />
            </div>
            <Line className="bg-indigo_900 h-[4px] mt-[12px] w-[100%]" />
          </div>
        </div>
        <div
                  className="common-pointer flex flex-row gap-[9px] items-center"
                  onClick={() => logout({ logoutParams: { returnTo: loginWithRedirect() } })}
                >
                  <Img
                    src="images/img_share.svg"
                    className="h-[43px] object-cover w-[43px]"
                    alt="share"
                  />
                  <div className="flex flex-col items-center">
                    <Text
                      className="font-normal not-italic text-indigo_900 text-left tracking-ls025 md:tracking-ls11 sm:tracking-ls11 w-[auto]"
                      as="h4"
                      variant="h4"
                    >
                      Log out
                    </Text>
                  </div>
                </div>
      </div>
    </>
  );
};

export default SettingsPage;
