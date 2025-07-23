import React, { useState } from "react";
import TopNavbar from "../Component/TopNavbar";
import SideBar from "../Component/SideBar";
import { assets } from "../assets/data";
import { Input } from "../Component/Input";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoanRepaymentCard from "../Component/LoanRepaymentCard";
import LoanPopUp from "../Component/LoanPopUp";
import { GiCheckMark } from "react-icons/gi";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Document types for the select dropdown
const documentTypes = [
  { value: "", label: "-- Select a document --" },
  { value: "passport", label: "Passport" },
  { value: "id", label: "National ID" },
  { value: "license", label: "Driver's License" },
];

// Repayment duration options
const repaymentDurations = [
  { value: "", label: "Select duration" },
  { value: "30", label: "30 days" },
  { value: "60", label: "60 days" },
  { value: "90", label: "90 days" },
];

const UploadDocument = () => {
  // State management for all form fields
  const [formData, setFormData] = useState({
    selectedDocument: "",
    selectedFile: null,
    beneficiaryName: "",
    beneficiaryRelationship: "",
    beneficiaryEmail: "",
    beneficiaryPhone: "",
    loanAmount: "",
    repaymentDuration: "",
    purpose: "",
  });

  // Router hooks for navigation and location
  const location = useLocation();
  const navigate = useNavigate();

  // Determine current form view based on path
  const isUploadDocumentPage = location.pathname.includes("/uploadDocument");
  const isBeneficiaryPage = location.pathname.includes("/uploadDetails");
  const isLoanPage = location.pathname.includes("/loanDetails");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);

    // Navigate to next step based on current page
    if (isUploadDocumentPage) {
      navigate("/uploadDetails");
    } else if (isBeneficiaryPage) {
      navigate("/loanDetails");
    } else if (isLoanPage) {
      navigate("/"); // Or wherever the final submission goes
    }
  };

  return (
    <>
    {/* Desktop View  */}
      <div className="sm:flex hidden min-h-screen w-full bg-gray-50">
        {/* Sidebar component */}
        <SideBar />

        {/* Main content area */}
        <div className="w-full sm:w-[calc(100%-250px)]">
          <TopNavbar />

          <main className="bg-[#F5F7FF] p-5">
            {/* Document Upload Form */}
            {isUploadDocumentPage && (
              <div className="w-full md:w-1/2 py-4">
                <header className="mb-6">
                  <h1 className="text-2xl font-medium text-gray-800 mb-2">
                    Upload Documents (1{" "}
                    <span className="text-gray-400/80">/3</span>)
                  </h1>
                  <p className="text-gray-600">
                    Before you continue your application process, kindly upload
                    required documents.
                  </p>
                  <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                    <div className="w-1/3 bg-[#273e8e] h-full rounded-full"></div>
                  </div>
                </header>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <label
                        htmlFor="selectedDocument"
                        className="block text-gray-700 mb-2"
                      >
                        Select Document
                      </label>
                      <select
                        id="selectedDocument"
                        name="selectedDocument"
                        value={formData.selectedDocument}
                        onChange={handleChange}
                        className="w-full p-4 bg-white border border-gray-300 rounded-md outline-none"
                        required
                      >
                        {documentTypes.map((doc) => (
                          <option key={doc.value} value={doc.value}>
                            {doc.label}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-gray-700 mb-2">
                        Upload Document
                      </label>
                      <div className="border-2 bg-white py-14 outline-none border-gray-300 rounded-md p-6 text-center">
                        <input
                          type="file"
                          id="file-upload"
                          name="selectedFile"
                          className="hidden"
                          onChange={handleChange}
                          required
                        />
                        <label
                          htmlFor="file-upload"
                          className="inline-flex flex-col items-center justify-center cursor-pointer"
                        >
                          <img
                            src={assets.uploadArea}
                            alt="Upload document"
                            className="mb-3"
                          />
                          <p className="text-gray-500">
                            {formData.selectedFile
                              ? `Selected: ${formData.selectedFile.name}`
                              : "Select a clear copy of your document to upload"}
                          </p>
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-3 bg-[#273e8e] text-white text-sm font-medium rounded-full hover:bg-[#1e3275] transition-colors"
                  >
                    Proceed
                  </button>
                </form>
              </div>
            )}

            {/* Beneficiary Details Form */}
            {isBeneficiaryPage && (
              <div className="w-full md:w-1/2 py-4">
                <header className="mb-6">
                  <h1 className="text-2xl font-medium text-gray-800 mb-2">
                    Beneficiary Details (2{" "}
                    <span className="text-gray-400/80">/3</span>)
                  </h1>
                  <p className="text-gray-600">
                    Kindly add your beneficiary details
                  </p>
                  <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                    <div className="w-2/3 bg-[#273e8e] h-full rounded-full"></div>
                  </div>
                </header>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <Input
                      id="beneficiaryName"
                      name="beneficiaryName"
                      label="Beneficiary Name"
                      placeholder="Enter Beneficiary Name"
                      // value={formData.beneficiaryName}
                      // onChange={handleChange}
                      required
                    />
                    <Input
                      id="beneficiaryRelationship"
                      name="beneficiaryRelationship"
                      label="Beneficiary Relationship"
                      placeholder="Enter Beneficiary Relationship"
                      // value={formData.beneficiaryRelationship}
                      // onChange={handleChange}
                      required
                    />
                    <Input
                      id="beneficiaryEmail"
                      name="beneficiaryEmail"
                      label="Beneficiary Email"
                      placeholder="Enter Beneficiary Email"
                      type="email"
                      // value={formData.beneficiaryEmail}
                      // onChange={handleChange}
                      required
                    />
                    <Input
                      id="beneficiaryPhone"
                      name="beneficiaryPhone"
                      label="Beneficiary Phone Number"
                      placeholder="Enter Beneficiary Phone Number"
                      type="tel"
                      // value={formData.beneficiaryPhone}
                      // onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="flex gap-4 items-center">
                    <Link
                      to="/uploadDocument"
                      className="w-[30%] text-center py-4 px-3 border text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                    >
                      Back
                    </Link>
                    <button
                      type="submit"
                      className="w-full py-4 px-3 bg-[#273e8e] text-white text-sm font-medium rounded-full hover:bg-[#1e3275] transition-colors"
                    >
                      Proceed
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* Loan Details Form */}
            {isLoanPage && (
              <div className="w-full  py-4 gap-8 flex">
                <div className="w-1/2">
                  <header className="mb-6">
                    <h1 className="text-2xl font-medium text-gray-800 mb-2">
                      Loan Details (3{" "}
                      <span className="text-gray-400/80">/3</span>)
                    </h1>
                    <p className="text-gray-600">
                      Please provide your loan information
                    </p>
                    <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                      <div className="w-full bg-[#273e8e] h-full rounded-full"></div>
                    </div>
                  </header>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-4">
                      <Input
                        id="loanAmount"
                        name="loanAmount"
                        label="Loan Amount"
                        placeholder="Enter loan amount"
                        type="number"
                        value={formData.loanAmount}
                        onChange={handleChange}
                        required
                      />

                      <div>
                        <label
                          htmlFor="repaymentDuration"
                          className="block text-gray-700 mb-2"
                        >
                          Repayment Duration
                        </label>
                        <select
                          id="repaymentDuration"
                          name="repaymentDuration"
                          value={formData.repaymentDuration}
                          onChange={handleChange}
                          className="w-full p-4 bg-white border border-gray-300 rounded-md outline-none"
                          required
                        >
                          {repaymentDurations.map((duration) => (
                            <option key={duration.value} value={duration.value}>
                              {duration.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="flex gap-4 items-center">
                      <Link
                        to="/beneficiaryDetails"
                        className="w-[30%] text-center py-4 px-3 border text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                      >
                        Back
                      </Link>
                      <button
                        type="submit"
                        className="w-full py-4 px-3 bg-[#273e8e] text-white text-sm font-medium rounded-full hover:bg-[#1e3275] transition-colors"
                      >
                        Submit Application
                      </button>
                    </div>
                  </form>
                </div>
                <div className=" mt-20 h-full w-1/2">
                  <div className="bg-gray-300/60">
                    <LoanRepaymentCard />
                  </div>
                  <LoanPopUp
                    icon={<GiCheckMark size={22} color="white" />}
                    text="Your loan application has been submitted successfully"
                    link1Text="Back"
                    link1="/loanDetails"
                    link2Text="Loan Dashboard"
                    link2="loanDashboard"
                    imgBg="bg-[#008000]"
                  />
                </div>
              </div>
            )}
          </main>
        </div>
      </div>
      {/* Mobile View  */}
      <div className="flex min-h-screen w-full bg-gray-50 sm:hidden ">
      {/* Main content area */}
      <div className="w-full sm:w-[calc(100%-250px)]">
        <main className="bg-[#F5F7FF] p-5">


          <div className="flex my-5">
            <ChevronLeft/>
            <p className="absolute left-56">Loan Application</p>
          </div>
          {/* Document Upload Form */}
          {isUploadDocumentPage && (
            <div className="w-full md:w-1/2 py-4">
              <header className="mb-6">
                <h1 className="text-2xl font-medium text-gray-800 mb-2">
                  Upload Documents (1 <span className="text-gray-400/80">/3</span>)
                </h1>
                <p className="text-gray-600">
                  Before you continue your application process, kindly upload required documents.
                </p>
                <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                  <div className="w-1/3 bg-[#273e8e] h-full rounded-full"></div>
                </div>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label htmlFor="selectedDocument" className="block text-gray-700 mb-2">
                      Select Document
                    </label>
                    <select
                      id="selectedDocument"
                      name="selectedDocument"
                      value={formData.selectedDocument}
                      onChange={handleChange}
                      className="w-full p-4 bg-white border border-gray-300 rounded-md outline-none"
                      required
                    >
                      {documentTypes.map((doc) => (
                        <option key={doc.value} value={doc.value}>
                          {doc.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-700 mb-2">Upload Document</label>
                    <div className="border-2 bg-white py-14 outline-none border-gray-300 rounded-md p-6 text-center">
                      <input
                        type="file"
                        id="file-upload"
                        name="selectedFile"
                        className="hidden"
                        onChange={handleChange}
                        required
                      />
                      <label
                        htmlFor="file-upload"
                        className="inline-flex flex-col items-center justify-center cursor-pointer"
                      >
                        <img 
                          src={assets.uploadArea} 
                          alt="Upload document" 
                          className="mb-3"
                        />
                        <p className="text-gray-500">
                          {formData.selectedFile 
                            ? `Selected: ${formData.selectedFile.name}`
                            : "Select a clear copy of your document to upload"}
                        </p>
                      </label>
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-3 bg-[#273e8e] text-white text-sm font-medium rounded-full hover:bg-[#1e3275] transition-colors"
                >
                  Proceed
                </button>
              </form>
            </div>
          )}

          {/* Beneficiary Details Form */}
          {isBeneficiaryPage && (
            <div className="w-full md:w-1/2 py-4">
              <header className="mb-6">
                <h1 className="text-2xl font-medium text-gray-800 mb-2">
                  Beneficiary Details (2 <span className="text-gray-400/80">/3</span>)
                </h1>
                <p className="text-gray-600">
                  Kindly add your beneficiary details
                </p>
                <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                  <div className="w-2/3 bg-[#273e8e] h-full rounded-full"></div>
                </div>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    id="beneficiaryName"
                    name="beneficiaryName"
                    label="Beneficiary Name"
                    placeholder="Enter Beneficiary Name"
                    // value={formData.beneficiaryName}
                    // onChange={handleChange}
                    required
                  />
                  <Input
                    id="beneficiaryRelationship"
                    name="beneficiaryRelationship"
                    label="Beneficiary Relationship"
                    placeholder="Enter Beneficiary Relationship"
                    // value={formData.beneficiaryRelationship}
                    // onChange={handleChange}
                    required
                  />
                  <Input
                    id="beneficiaryEmail"
                    name="beneficiaryEmail"
                    label="Beneficiary Email"
                    placeholder="Enter Beneficiary Email"
                    type="email"
                    // value={formData.beneficiaryEmail}
                    // onChange={handleChange}
                    required
                  />
                  <Input
                    id="beneficiaryPhone"
                    name="beneficiaryPhone"
                    label="Beneficiary Phone Number"
                    placeholder="Enter Beneficiary Phone Number"
                    type="tel"
                    // value={formData.beneficiaryPhone}
                    // onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex gap-4 items-center">
                  <Link
                    to="/uploadDocument"
                    className="w-[30%] text-center py-4 px-3 border text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="w-full py-4 px-3 bg-[#273e8e] text-white text-sm font-medium rounded-full hover:bg-[#1e3275] transition-colors"
                  >
                    Proceed
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Loan Details Form */}
          {isLoanPage && (
            <div className="w-full  py-4 gap-8 flex">
              <div className="w-1/2">
              <header className="mb-6">
                <h1 className="text-2xl font-medium text-gray-800 mb-2">
                  Loan Details (3 <span className="text-gray-400/80">/3</span>)
                </h1>
                <p className="text-gray-600">
                  Please provide your loan information
                </p>
                <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                  <div className="w-full bg-[#273e8e] h-full rounded-full"></div>
                </div>
              </header>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <Input
                    id="loanAmount"
                    name="loanAmount"
                    label="Loan Amount"
                    placeholder="Enter loan amount"
                    type="number"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    required
                  />

                  <div>
                    <label htmlFor="repaymentDuration" className="block text-gray-700 mb-2">
                      Repayment Duration
                    </label>
                    <select
                      id="repaymentDuration"
                      name="repaymentDuration"
                      value={formData.repaymentDuration}
                      onChange={handleChange}
                      className="w-full p-4 bg-white border border-gray-300 rounded-md outline-none"
                      required
                    >
                      {repaymentDurations.map((duration) => (
                        <option key={duration.value} value={duration.value}>
                          {duration.label}
                        </option>
                      ))}
                    </select>
                  </div>


                </div>

                <div className="flex gap-4 items-center">
                  <Link
                    to="/beneficiaryDetails"
                    className="w-[30%] text-center py-4 px-3 border text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
                  >
                    Back
                  </Link>
                  <button
                    type="submit"
                    className="w-full py-4 px-3 bg-[#273e8e] text-white text-sm font-medium rounded-full hover:bg-[#1e3275] transition-colors"
                  >
                    Submit Application
                  </button>
                </div>
              </form>


              </div>
              <div className=" mt-20 h-full w-1/2">
             <div className="bg-gray-300/60">
             <LoanRepaymentCard/>
             </div>
              <LoanPopUp icon={<GiCheckMark size={22} color="white" />} text="Your loan application has been submitted successfully" link1Text="Back" link1="/loanDetails" link2Text="Loan Dashboard" link2="loanDashboard" imgBg="bg-[#008000]"/>
              </div>
            </div>



          )}

        </main>
      </div>
    </div>
    </>
  );
};

export default UploadDocument;
