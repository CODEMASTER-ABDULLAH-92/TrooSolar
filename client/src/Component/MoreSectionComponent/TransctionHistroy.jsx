import React from 'react';
import { ArrowUpRight,ChevronDown } from 'lucide-react';

const transactions = [
  {
    title: 'Order Payment - Direct',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  {
    title: 'Order Payment - Loan',
    date: '15-May-25, 09:22 AM',
    amount: '20,000',
    status: 'Completed',
  },
  // You can duplicate or map more
];

const TransactionHistory = () => {
  return (
    <div className="bg-white rounded-2xl p-6  w-full">
        <h2 className="text-xl pb-5 text-center text-gray-800">Transaction History</h2>
        <div className="flex gap-2 justify-between items-center mb-5 border border-gray-300 rounded-2xl p-3">
        <div className="flex gap-4 w-full">
      {/* First Select */}
      <div className="relative w-1/2">
        <select className="w-full appearance-none outline-none rounded-md px-3 py-2 text-sm text-gray-600 ">
          <option>Incoming</option>
          <option>Outgoing</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
      </div>
<div className='h-6 w-[2px] flex justify-center mt-[6px] items-center bg-black'></div>
      {/* Second Select */}
      <div className="relative w-1/2">
        <select className="w-full appearance-none outline-none rounded-md px-3 py-2 text-sm text-gray-600">
          <option>Successful</option>
          <option>Failed</option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none w-5 h-5" />
      </div>
    </div>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <div key={idx} className="flex justify-between border-gray-300 border items-center bg-[#ffffff] rounded-2xl px-4 py-3  transition">
            <div className="flex items-center gap-3">
              <div className="bg-[#00800033] text-[#008000] rounded-full p-2">
                <ArrowUpRight size={23} />
              </div>
              <div className='space-y-3'>
                <h4 className="text-sm text-gray-700">{tx.title}</h4>
                <p className="text-[10px]">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm  text-[#273e8e]">{tx.amount}</p>
              <span className="text-[8px] bg-[#cce6cc] text-[#008000]  px-1 py-1.5 rounded-md">
                {tx.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionHistory;
