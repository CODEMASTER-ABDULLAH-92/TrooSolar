import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "../Input";
import MessageSection from "./MessageSection";

const NewTicket = () => {
  const [message, setMessage] = useState(false);
  return (
    <>
      {message ? (
        <MessageSection />
      ) : (
        <div className="min-h-screen flex flex-col justify-between">
          {/* Header */}
          <div>
            <div className="relative flex items-center justify-center mb-6">
              <ChevronLeft className="absolute left-0 cursor-pointer" />
              <p className="text-lg font-semibold text-gray-800">New Ticket</p>
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <Input
                id="subject"
                label="Subject"
                placeholder="Select ticket subject"
                icon={<ChevronRight size={20} color="black" />}
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="6"
                className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-sm resize-none"
              />
            </div>
          </div>

          {/* Send Button */}
          <div className="mt-10">
            <button
              onClick={() => setMessage(!message)}
              className="w-full flex items-center justify-center bg-[#273e8e] text-white font-medium text-sm rounded-full py-4 px-6 shadow hover:bg-[#1e2f75] transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default NewTicket;
