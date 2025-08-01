import React from "react";

const LoanRepaymentCard = () => {
  const loanData = {
    productAmount: 1000000,
    loanAmount: 1000000,
    duration: "6 months",
    monthlyPayment: 135000,
    interestPercentage: "5% Monthly",
    repaymentDate: "25th Dec., 2025",
  };

  const labelStyle = "text-gray-600 text-[14px]";
  const valueStyle = "text-[14px]";

  const DetailRow = ({ label, value }) => (
    <>
      <div className="flex justify-between">
        <span className={labelStyle}>{label}</span>
        <span className={valueStyle}>{value}</span>
      </div>
      <hr className="text-gray-400" />
    </>
  );

  return (
    <div className="w-full max-h-full rounded-[10px] bg-[#ffff00]/10 border-dashed border-[2px] border-[#E8A91D] p-5 flex flex-col gap-4">
      <h2 className=" text-[17px]">Loan Repayment Calculation</h2>

      <div className="flex flex-col gap-3 text-sm">
        <DetailRow
          label="Product Amount"
          value={`N${loanData.productAmount.toLocaleString()}`}
        />
        <DetailRow
          label="Loan Amount"
          value={`N${loanData.loanAmount.toLocaleString()}`}
        />
        <DetailRow label="Duration" value={loanData.duration} />
        <DetailRow
          label="Monthly Payment"
          value={`N${loanData.monthlyPayment.toLocaleString()}`}
        />
        <DetailRow
          label="Interest Percentage"
          value={loanData.interestPercentage}
        />
          <div className="flex justify-between">
        <span className={labelStyle}>Repayment Date</span>
        <span className={valueStyle}>25th Dec., 2025</span>
      </div>
      </div>
    </div>
  );
};

export default LoanRepaymentCard;
