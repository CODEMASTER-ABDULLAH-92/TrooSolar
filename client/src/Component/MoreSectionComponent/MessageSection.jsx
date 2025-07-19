import React from "react";
import { ChevronLeft } from "lucide-react";
import { assets } from "../../assets/data";

const ticketInfo = [
  { label: "Ticket ID", value: "123" },
  { label: "Subject", value: "Loan Issues" },
  { label: "First Repayment", value: "July 3, 2025" },
];

const MessageSection = () => {
  return (
    <div className="min-h-screen p-4 flex flex-col justify-between bg-gray-50">
      {/* Header */}
      <div>
        <div className="relative flex items-center justify-center mb-6">
          <ChevronLeft className="absolute left-0 cursor-pointer" />
          <h2 className="text-lg font-semibold text-gray-800">New Ticket</h2>
        </div>

        {/* Ticket Info */}
        <div className="bg-white border rounded-2xl p-4 shadow mb-6">
          {ticketInfo.map((item, index) => (
            <div key={index}>
              <div className="flex justify-between items-center py-2">
                <span className="text-gray-400">{item.label}</span>
                <span className="text-gray-700">{item.value}</span>
              </div>
              {index < ticketInfo.length - 1 && (
                <hr className="border-gray-200" />
              )}
            </div>
          ))}
        </div>

        {/* Messages */}
        <div className="space-y-4 mb-6">
          {/* Sent Message */}
          <div className="flex flex-col items-end">
            <div className="bg-[#273e8e] text-white rounded-full px-6 py-3 shadow">
              I need help with loan
            </div>
            <span className="text-xs text-gray-500 mt-1">08-07-2025 / 08:22 AM</span>
          </div>

          {/* Received Message */}
          <div className="flex flex-col items-start">
            <div className="bg-gray-200 text-gray-700 rounded-full px-6 py-3 shadow">
              Please provide your issue in detail.
            </div>
            <span className="text-xs text-gray-500 mt-1 ml-1">08-07-2025 / 08:25 AM</span>
          </div>
        </div>
      </div>

      {/* Message Input at Bottom */}
      <div className="relative">
        <textarea
          className="w-full border rounded-2xl px-4 py-3 resize-none h-[60px] pr-12"

        />
        <button className="absolute top-7 -translate-y-1/2 right-4">
          <img src={assets.telegram} alt="Send" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MessageSection;
