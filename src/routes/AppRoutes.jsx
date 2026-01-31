import { Routes, Route } from "react-router-dom";
import MainLayout from "../layout/MainLayout";

import ProtectedRoute from "./ProtectedRoute";

import Home from "../pages/home/Home";
import MyTeam from "../pages/myteam/MyTeam";
import Kyc from "../pages/myteam/Kyc";
import Lead from "../pages/lead/Lead";
import Training from "../pages/training/Training";
import Help from "../pages/help/help";
import Notifications from "../pages/notifications/Notifications";

import Login from "../pages/auth/login/login";
import VerifyOtp from "../pages/auth/login/VerifyOtp";
import Profiledetails from "../pages/auth/signup/Profiledetails";
import Profile from "../pages/profile/Profile";
import PersonalInfo from "../pages/profile/personalinfo/PersonalInfo";
import VistingCard from "../pages/profile/vistingcard/VistingCard";
import PanCardDetails from "../pages/profile/pandetails/PanCardDetails";
import BankDetails from "../pages/profile/bankdetails/BankDetails";
import MyWebsite from "../pages/profile/mywebsite/MyWebsite";
import MyTeamProfile from "../pages/profile/myteam/MyTeamProfile";
import MyReferrals from "../pages/profile/myreferals/MyReferals";
import Agency from "../pages/profile/agency/Agency";
import ProfileEarning from "../pages/profile/profileearning/ProfileEarning";
import CustomerSupport from "../pages/profile/customersupport/CustomerSupport";
import TermsCondition from "../pages/profile/terms-conditions/TermsConditions";
import PrivacyPolicy from "../pages/profile/privacypolicy/PrivacyPolicy";
import DeleteAccount from "../pages/profile/deleteaccount/DeleteAccount";
import PendingEarnings from "../pages/earnings/PendingEarnings";
import MyEarnings from "../pages/earnings/MyEarnings";
import DetailsProject from "../pages/projects/allprojects/Detailsproject";
import AllServices from "../pages/projects/allprojects/AllProjects";
import DetailsForm from "../pages/projects/allprojects/DetailsForm";

const AppRoutes = () => {
  return (
    <Routes>
      {/* ===== PUBLIC ROUTES ===== */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
      </Route>

      <Route path="/login" element={<Login />} />
      <Route path="/verify-otp" element={<VerifyOtp />} />
      <Route path="/profiledetails" element={<Profiledetails />} />

      {/* ===== PROTECTED ROUTES ===== */}
      <Route element={<ProtectedRoute />}>
        <Route element={<MainLayout />}>
          <Route path="/team" element={<MyTeam />} />
          <Route path="/kycpan" element={<Kyc />} />
          <Route path="/lead" element={<Lead />} />
          <Route path="/training" element={<Training />} />
          <Route path="/help" element={<Help />} />
          <Route path="/notify" element={<Notifications />} />

          {/* ===== PROJECT ROUTES ===== */}
          <Route path="/allproject" element={<AllServices />} />
          <Route path="/detailsproject" element={<DetailsProject />} />
          <Route path="/detailsform" element={<DetailsForm />} />

          <Route path="/profile" element={<Profile />}>
            <Route path="personalinfo" element={<PersonalInfo />} />
            <Route path="visitcard" element={<VistingCard />} />
            <Route path="pancarddetails" element={<PanCardDetails />} />
            <Route path="bankdetails" element={<BankDetails />} />
            <Route path="myweb" element={<MyWebsite />} />
            <Route path="myteam" element={<MyTeamProfile />} />
            <Route path="myreferal" element={<MyReferrals />} />
            <Route path="agency" element={<Agency />} />
            <Route path="earn" element={<ProfileEarning />} />
            <Route path="customer" element={<CustomerSupport />} />
            <Route path="terms&con" element={<TermsCondition />} />
            <Route path="policy" element={<PrivacyPolicy />} />
            <Route path="deleteaccount" element={<DeleteAccount />} />
          </Route>

          <Route path="/pending-earnings" element={<PendingEarnings />} />
          <Route path="/my-earnings" element={<MyEarnings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
