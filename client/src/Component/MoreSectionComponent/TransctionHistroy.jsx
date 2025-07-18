import React from 'react';
import { ArrowUpRight } from 'lucide-react';

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
    <div className="bg-white rounded-2xl p-6 shadow-md w-full">
        <h2 className="text-xl pb-5 text-center text-gray-800">Transaction History</h2>
        <div className="flex gap-2 justify-between items-center mb-5 border border-gray-300 rounded-2xl p-3">
          <select className=" w-1/2 outline-none rounded-md px-2 py-1 text-sm text-gray-600">
            <option>Incoming</option>
            <option>Outgoing</option>
          </select>
          |
          <select className="outline-none border-none w-1/2 rounded-md px-2 py-1 text-sm text-gray-600">
            <option>Successful</option>
            <option>Failed</option>
          </select>
      </div>

      <div className="space-y-3">
        {transactions.map((tx, idx) => (
          <div key={idx} className="flex justify-between border-gray-300 border items-center bg-gray-50 rounded-2xl px-4 py-3  transition">
            <div className="flex items-center gap-3">
              <div className="bg-[#00800033] text-[#008000] rounded-full p-2">
                <ArrowUpRight size={20} />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-700">{tx.title}</h4>
                <p className="text-xs text-gray-500">{tx.date}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm  text-gray-800">{tx.amount}</p>
              <span className="text-xs bg-[#00800033] text-[#008000]  px-2 py-1.5 rounded-md">
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
