import React from "react";
import { ChevronRight } from "lucide-react";
import {Input} from "../Input"

const EditProfile = () => {
  return (
    <div className="w-full bg-white rounded-2xl p-6 shadow-md border border-blue-500">
      <h2 className="text-xl text-center text-gray-800 mb-6">Edit Profile</h2>
      <div className="flex flex-col items-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xl font-bold text-gray-400">
          QA
        </div>
      </div>
      <form className="space-y-4">
        <Input id="firstName" label="First Name" placeholder="First Name" />
        <Input id="surname" label="Surname" placeholder="Surname" />
        <Input id="Email" label="Email Address" placeholder="Enter Email Address" />
        <Input id="phone" label="Phone Number" placeholder="Enter Phone Number" />
        <Input
          id="password"
          label="Password"
          placeholder="Enter Password"
          icon={<ChevronRight size={24} color="black" />}
        />
        <button
          type="submit"
          className="w-full bg-[#273e8e] text-white text-sm py-4 rounded-full mt-4"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditProfile;