import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./Pages/Auth";
import Otp from "./Pages/Otp";
import Home from "./Pages/Home";
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import Cart from "./Pages/Cart";
import LoanPage from "./Pages/LoanPage";
import LinkAccount from "./Pages/LinkAccount";
import LoanCalculation from "./Pages/LoanCalCulation";
import SpecificProduct from "./Pages/SpecificProduct";
import CreditScore from "./Pages/CreditScore";
import UploadDocement from "./Pages/UploadDocement";
import LoanDashBoard from "./Pages/LoanDashBoard";
import Tools from "./Pages/Tools";
import More from "./Pages/More";
import ProductBundle from "./Pages/ProductBundleDetailPage";
import SolarBundle from "./Pages/SolarBundle";
import SolarBuilder from "./Pages/SolarBuilder";
import TermsPage from "./Component/MobileSectionResponsive/TermsPage";
import InverterLoadCalculator from "./Component/InverterLoadCalculator";
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route
          path="/inverterLoadCalculator"
          element={<InverterLoadCalculator />}
        />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:category" element={<SpecificProduct />} />
        <Route path="/homePage" element={<HomePage />} />
        <Route path="/verification" element={<Otp />} />
        <Route path="/creditscore" element={<CreditScore />} />
        <Route path="/loan" element={<LoanPage />} />

        <Route path="/tools" element={<Tools />} />

        <Route path="/loanDetails/loanDashboard" element={<LoanDashBoard />} />
        <Route path="/uploadDocument" element={<UploadDocement />} />
        <Route path="/uploadDetails" element={<UploadDocement />} />
        <Route path="/loanDetails" element={<UploadDocement />} />

        <Route path="/loanCalculate" element={<LoanCalculation />} />
        <Route path="/linkAccount" element={<LinkAccount />} />
        <Route path="/homePage/product/:id" element={<ProductDetails />} />
        <Route path="/productBundle/details/:id" element={<ProductBundle />} />

        <Route path="/solar-bundles" element={<SolarBundle />} />
        <Route path="/solar-builder" element={<SolarBuilder />} />
        <Route path="/more" element={<More />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </div>
  );
};

export default App;
