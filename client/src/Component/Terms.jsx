import React, { useState } from 'react';
import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Terms = ({ link }) => {
  const location = useLocation();
  const isCreditScorePage = location.pathname.includes("/creditscore");
  const [hide, setHide] = useState(true);
  const [accepted, setAccepted] = useState(false);

  const termsContent = [
    {
      title: "1. Eligibility",
      content: "You must be at least 18 years old and legally capable of entering into binding contracts to use this service. By applying, you confirm that all information provided is accurate, complete, and truthful."
    },
    {
      title: "2. Loan Application Process",
      content: "Submitting a loan application does not guarantee approval. All applications are subject to evaluation and verification."
    },
    {
      title: "3. Accuracy of Information",
      content: "You agree to provide true, current, and complete information. False information may result in disqualification or legal action."
    },
    {
      title: "4. Use of Personal Data",
      content: "By using our service, you consent to the collection and use of your data as outlined in our Privacy Policy."
    },
    {
      title: "5. Loan Terms and Repayment",
      content: "You must review and agree to the repayment terms before disbursement. Non-compliance may result in fees or legal consequences."
    },
    {
      title: "6. Prohibited Activities",
      listItems: [
        "Illegal or fraudulent use",
        "Using someone else's identity",
        "Interfering with platform operation"
      ]
    },
    {
      title: "7. Limitation of Liability",
      content: "We are not liable for any damages or losses arising from use of this service, including application rejections or delays."
    },
    {
      title: "8. Modifications",
      content: "We may update these terms at any time. Continued use implies acceptance of updates."
    },
    {
      title: "9. Governing Law",
      content: "These terms are governed under the laws of [Insert Jurisdiction]."
    },
    {
      title: "10. Contact Us",
      content: "For questions or support, contact us at [Insert Contact Info]."
    }
  ]

  const handleClose = () => {
    setHide(false);
  };

  if (!hide) return null;

  return (
    <div className={`${isCreditScorePage ? "w-full py-3" : "w-[430px] h-[850px]"} bg-white rounded-2xl shadow-md overflow-hidden flex flex-col`}>
      <div className="relative pt-3 flex-shrink-0">
        {!isCreditScorePage && (
          <>
            <p className="text-center text-xl font-semibold">Terms of Use Agreement</p>
            <X
              size={28}
              className="absolute right-4 top-4 cursor-pointer hover:text-gray-600 transition-colors"
              onClick={handleClose}
              aria-label="Close terms"
            />
            <hr className="my-4" />
          </>
        )}
      </div>

      <div className="px-6 text-sm flex-1 flex flex-col">
        <h2 className="text-[#273e8e] font-semibold text-base mb-2 flex-shrink-0">
          Read and accept the following terms before proceeding
        </h2>

        {isCreditScorePage && (
          <div className='border border-[#273e8e] p-4 my-2 rounded-2xl flex-shrink-0'>
            <h2 className="text-[#273e8e] font-semibold text-base mb-2">
              One time Credit Check fee
            </h2>
            <p>By proceeding you agree that a credit check fee of N50 will be deducted from your linked bank account</p>
          </div>
        )}

        <div className={`border rounded-2xl flex-1 ${isCreditScorePage ? "max-h-[400px]" : "max-h-[600px]"} flex flex-col`}>
          <div className={`overflow-y-auto p-4 space-y-3 flex-1`}>
            <h3 className="text-[#273e8e] font-semibold">Terms of Use</h3>
            <p>
              Welcome to Mono. By accessing or using our loan application platform ("Service"), you agree to be
              bound by the following Terms of Usage. Please read them carefully before applying for a loan.
            </p>

            {termsContent.map((term, index) => (
              <div key={`term-${index}`} className="mb-3">
                <h4 className="font-semibold">{term.title}</h4>
                {term.content && <p className="mt-1">{term.content}</p>}
                {term.listItems && (
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    {term.listItems.map((item, i) => (
                      <li key={`item-${i}`}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>

        {!isCreditScorePage && (
          <div className="space-y-4 mt-4 pt-4 flex-shrink-0">
            <label htmlFor="accept-terms" className="flex items-center gap-2 font-medium cursor-pointer">
              <input
                type="checkbox"
                id="accept-terms"
                checked={accepted}
                onChange={(e) => setAccepted(e.target.checked)}
                className="h-4 w-4 text-[#273e8e] focus:ring-[#273e8e] border-gray-300 rounded"
              />
              I accept the following terms of data usage
            </label>

            <div className="flex justify-center pb-4">
              <Link 
                to={link}
                className={`px-6 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-[#273e8e] focus:ring-offset-2 ${
                  accepted 
                    ? 'bg-[#273e8e] text-white hover:bg-[#1d2f6b]' 
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
                onClick={(e) => !accepted && e.preventDefault()}
              >
                Proceed
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default React.memo(Terms);