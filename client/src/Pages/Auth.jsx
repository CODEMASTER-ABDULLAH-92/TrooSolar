import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { assets } from "../assets/data";
import { Input } from "../Component/Input";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === "/login";
  const [formData, setFormData] = useState({
    firstName: "",
    surname: "",
    email: "",
    phone: "",
    bvn: "",
    password: "",
    code: "",
  });

  const [hidePassword, setHidePassword] = useState(true);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to your backend
  };

  return (
    <>
      {/* Large Screen Layout - Preserving all original classes */}
      <div className="w-full h-screen sm:flex hidden overflow-clip">
        {/* Image Section */}
        <div className="relative w-1/2 overflow-hidden">
          <img
            src={assets.loginImage}
            alt="Login Visual"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute bottom-24 left-12 text-white w-[80%]">
            <p className="text-lg  leading-relaxed">
              Providing affordable, sustainable and reliable <br />
              solar energy solutions for millions <br />
              of Nigerians
            </p>
          </div>
          <div className="absolute bottom-6 left-12 flex gap-4">
            <img src={assets.insta} alt="Instagram" className="h-10 w-10" />
            <img src={assets.whatsApp} alt="WhatsApp" className="h-10 w-10" />
            <img src={assets.twitter} alt="Twitter" className="h-10 w-10" />
            <img src={assets.yt} alt="YouTube" className="h-10 w-10" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-1/2 bg-[#f5f7ff] flex justify-center items-center">
          <div className="w-[90%] max-w-[600px] p-6 bg-white rounded-2xl shadow-lg">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="text-center">
                <img
                  src={assets.logo}
                  alt="Logo"
                  className="w-[200px] mx-auto mb-6"
                  loading="lazy"
                />
                <h2 className="text-3xl font-semibold">
                  {isLogin ? "Login" : "Create an Account"}
                </h2>
                <p className="text-sm text-gray-600 mt-2">
                  {isLogin
                    ? "Login to access your account"
                    : "Provide your personal information to help us know you better"}
                </p>
              </div>

              <div className="space-y-4">
                {!isLogin && (
                  <>
                    <Input
                      id="firstName"
                      label="First Name"
                      placeholder="First Name"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <Input
                      id="surname"
                      label="Surname"
                      placeholder="Surname"
                      value={formData.surname}
                      onChange={handleChange}
                    />
                  </>
                )}

                <Input
                  id="email"
                  label="Email"
                  placeholder="Email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                <div className="sm:hidden block">
                  {!isLogin && (
                    <>
                      <Input
                        id="password"
                        label="Password"
                        placeholder="Password"
                        isPassword={true}
                        hidePassword={hidePassword}
                        setHidePassword={setHidePassword}
                        value={formData.password}
                        onChange={handleChange}
                      />
                      <Input
                        id="bvn"
                        label="BVN Number"
                        placeholder="BVN Number"
                        type="number"
                        value={formData.bvn}
                        onChange={handleChange}
                      />
                      <Input
                        id="code"
                        label="Referral Code (Optional)"
                        placeholder="Referral Code"
                        type="number"
                        value={formData.code}
                        onChange={handleChange}
                      />
                    </>
                  )}
                </div>

                <Input
                  id="phone"
                  label="Phone Number"
                  placeholder="Phone Number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#273e8e] text-white py-3 rounded-lg transition duration-200"
              >
                {isLogin ? "Login" : "Create Account"}
              </button>

              <p className="text-start text-sm">
                {isLogin
                  ? "Don't have an account?"
                  : "I already have an account"}
              </p>

              <button
                type="button"
                className="w-full bg-[#e8a91d] text-white py-3 rounded-lg transition duration-200"
              >
                {isLogin ? "Register" : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout - Preserving all original classes */}
      <div className="w-full min-h-screen sm:hidden block relative">
        <img
          src={assets.loginImageForSm}
          className="w-full h-[40vh] object-cover"
          alt="Mobile Background"
        />

        <div className="bg-[#273e8e] absolute top-[31vh] w-full rounded-t-4xl shadow-md p-6 text-center mb-6">
          <img src={assets.smLogo} alt="Logo" className="mx-auto mb-2 w-28" />
          <h1 className="text-2xl font-bold text-white">
            {isLogin ? "Login" : "Create an account"}
          </h1>
          <p className="text-xs text-white">
            {isLogin
              ? "Login to access your account"
              : "Provide your personal information to help us know you better"}
          </p>
        </div>

        <form className="space-y-4 p-4 mt-24" onSubmit={handleSubmit}>
          {!isLogin && (
            <>
              <Input
                id="firstName"
                label="First Name"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                isMobile={true}
              />
              <Input
                id="surname"
                label="Surname"
                placeholder="Surname"
                value={formData.surname}
                onChange={handleChange}
                isMobile={true}
              />
            </>
          )}

          <Input
            id="email"
            label="Email"
            placeholder="Email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            isMobile={true}
          />

          {!isLogin && (
            <>
              <Input
                id="phone"
                label="Phone Number"
                placeholder="Phone Number"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                isMobile={true}
              />
              <Input
                id="bvn"
                label="BVN Number"
                placeholder="BVN Number"
                type="number"
                value={formData.bvn}
                onChange={handleChange}
                isMobile={true}
              />
            </>
          )}

          <Input
            id="password"
            label="Password"
            placeholder="Password"
            isPassword={true}
            hidePassword={hidePassword}
            setHidePassword={setHidePassword}
            value={formData.password}
            onChange={handleChange}
            isMobile={true}
          />

          {!isLogin && (
            <Input
              id="code"
              label="Referral Code (Optional)"
              placeholder="Referral Code"
              type="number"
              value={formData.code}
              onChange={handleChange}
              isMobile={true}
            />
          )}

          <button
            type="submit"
            className="w-full bg-[#273e8e] text-white py-3 rounded-full"
          >
            {isLogin ? "Login" : "Create Account"}
          </button>

          <p className={isLogin ? "text-start text-sm" : "text-start text-sm"}>
            {isLogin ? "I don't have an account" : "I already have an account"}
          </p>

          <button
            type="button"
            className="w-full bg-[#e8a91d] text-white py-3 rounded-full"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </form>
      </div>
    </>
  );
};

export default Auth;
