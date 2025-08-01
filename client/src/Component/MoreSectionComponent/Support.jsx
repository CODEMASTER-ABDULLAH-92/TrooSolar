import React, { useState } from 'react';
import { PiTicket } from "react-icons/pi";
import NewTicket from './NewTicket';

const TABS = ['Pending', 'Answered', 'Closed'];

const ticketsData = [
  { id: '123', date: '5 May, 25 - 06:22 AM', status: 'Pending' },
  { id: '124', date: '4 May, 25 - 10:30 AM', status: 'Pending' },
  { id: '125', date: '3 May, 25 - 02:15 PM', status: 'Answered' },
  { id: '126', date: '2 May, 25 - 09:00 AM', status: 'Pending' },
  { id: '127', date: '1 May, 25 - 04:45 PM', status: 'Closed' },
  { id: '128', date: '30 Apr, 25 - 11:00 AM', status: 'Pending' },
];




const Support = () => {
  const [activeTab, setActiveTab] = useState('Pending');
  const filteredTickets = ticketsData.filter(ticket => ticket.status === activeTab);
  const [newTicket,setNewTicket] = useState(false);
  return (
    <div className="min-h-screen  flex items-center justify-center p-4 font-sans">
      <div className="bg-white rounded-xl shadow-lg border-gray-300 border p-6 w-full max-w-2xl">
        {
          newTicket ? <NewTicket/> : <div>
            {/* Header */}
        <h2 className="text-xl text-gray-800 mb-6 text-center">
          Support Tickets
        </h2>

        {/* Tabs */}
        <div className="flex border-2 border-gray-300/30 rounded-full justify-start gap-2 p-3 mb-6 w-full max-w-[70%]">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 px-2 text-xs  transition duration-200 text-center rounded-full ${
                activeTab === tab
                  ? 'bg-[#273e8e] text-white'
                  : 'text-gray-400'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tickets List */}
        <div className="space-y-4 max-h-96 overflow-y-auto pr-2">
          {filteredTickets.length ? (
            filteredTickets.map(({ id, date, status }) => (
              <div
                key={id}
                className="flex items-center justify-between bg-white rounded-2xl p-4 border-gray-400 border transition-shadow duration-200 hover:shadow-sm cursor-pointer"
              >
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-[#cccccc] rounded-full">
                    <PiTicket size={24} className="text-black" />
                  </div>
                  <div className='space-y-2'>
                    <p className="text-[#000000]">Ticket ID - {id}</p>
                    <p className="text-[#000000] text-xs">{date}</p>
                  </div>
                </div>
                <span className="bg-[#FFA50033] text-[#FFA500]  px-1.5 py-1.5 rounded-[10px] text-xs">
                  {status}
                </span>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500 py-10">
              No tickets in this category.
            </p>
          )}
        </div>

        {/* Create Ticket Button */}
        <div onClick={()=>setNewTicket(!newTicket)} className="mt-8 flex items-center justify-center bg-[#273e8e] text-white rounded-full py-4 px-6 shadow cursor-pointer hover:bg-[#1f3270] transition">
          Create New Ticket
        </div>
          </div>
        }
      </div>
    </div>
  );
};

export default Support;
