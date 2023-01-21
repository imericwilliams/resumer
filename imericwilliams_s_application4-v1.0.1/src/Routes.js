import React from "react";
import UpdateResume from "pages/UpdateResume";
import PasswordReset from "pages/PasswordReset";
import Profile from "pages/Profile";
import ChangePassword from "pages/ChangePassword";
import DeleteAccount from "pages/DeleteAccount";
import PasswordResetConfirmation from "pages/PasswordResetConfirmation";
import VerificationCode from "pages/VerificationCode";
import AccountSettings from "pages/AccountSettings";
import GeneratedResume from "pages/GeneratedResume";
import CreateNewPassword from "pages/CreateNewPassword";
import EmailVerification from "pages/EmailVerification";
import Settings from "pages/Settings";
import GeneratingResume from "pages/GeneratingResume";
import EmailResetPasswordLink from "pages/EmailResetPasswordLink";
import SignUp from "pages/SignUp";
import Welcome from "pages/Welcome";
import Home1 from "pages/Home1";
import Typeform from "pages/Typeform";
import ForgotPassword from "pages/ForgotPassword";
import Login from "pages/Login";
import Splash from "pages/Splash";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const ProjectRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Splash />} />
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/splash" element={<Splash />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/typeform" element={<Typeform />} />
        <Route path="/home1" element={<Home1 />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/signup" element={<SignUp />} />
        <Route
          path="/emailresetpasswordlink"
          element={<EmailResetPasswordLink />}
        />
        <Route path="/generatingresume" element={<GeneratingResume />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/emailverification" element={<EmailVerification />} />
        <Route path="/createnewpassword" element={<CreateNewPassword />} />
        <Route path="/generatedresume" element={<GeneratedResume />} />
        <Route path="/accountsettings" element={<AccountSettings />} />
        <Route path="/verificationcode" element={<VerificationCode />} />
        <Route
          path="/passwordresetconfirmation"
          element={<PasswordResetConfirmation />}
        />
        <Route path="/deleteaccount" element={<DeleteAccount />} />
        <Route path="/changepassword" element={<ChangePassword />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/passwordreset" element={<PasswordReset />} />
        <Route path="/updateresume" element={<UpdateResume />} />
      </Routes>
    </Router>
  );
};
export default ProjectRoutes;
