import React, { useState } from 'react';

// Sample assets import (you should replace this with your actual import path)
import { assets } from '../../assets/data';
const documentTypes = [
  { value: '', label: 'Select a document' },
  { value: 'cnic', label: 'CNIC' },
  { value: 'passport', label: 'Passport' },
  { value: 'license', label: 'Driving License' },
];     

const KycDetails = () => {
  const [formData, setFormData] = useState({
    selectedDocument: '',
    selectedFile: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'selectedFile') {
      setFormData((prev) => ({
        ...prev,
        selectedFile: files[0],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.selectedDocument || !formData.selectedFile) {
      alert('Please select a document and upload a file.');
      return;
    }
    // Submit logic here (e.g. API call)
    console.log('Submitted:', formData);
  };

  return (
        <main className="bg-[#ffffff] h-full rounded-2xl border border-gray-400  w-full p-5">
            <h1 className='text-center text-lg'>KYC Details </h1>
          <div className=" py-4">
            <header className="mb-6">
              <h1 className="text-2xl  text-gray-800 mb-2">
                Upload Documents (1 <span className="text-gray-400/80">/3</span>)
              </h1>
              <p className="text-gray-600 text-sm">
                Before you continue your application process, kindly upload required documents.
              </p>
              <div className="w-full bg-gray-400/40 my-7 rounded-full h-3">
                <div className="w-1/3 bg-[#273e8e] h-full rounded-full"></div>
              </div>
            </header>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="selectedDocument" className="block text-gray-700 mb-5">
                    Select Document
                  </label>
                  <select
                    id="selectedDocument"
                    name="selectedDocument"
                    value={formData.selectedDocument}
                    onChange={handleChange}
                    className="w-full p-4 bg-white border border-gray-300 rounded-md outline-none text-gray-400"
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
                  <label className="block text-gray-500 mb-5">Upload Document</label>
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
                      <p className="text-gray-500 text-sm">
                        {formData.selectedFile
                          ? `Selected: ${formData.selectedFile.name}`
                          : 'Select a clear copy of your document to upload'}
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
        </main>

  );
};

export default KycDetails;
