import React from 'react'

const RepaymentHistorySection = () => {
  return (
    <div className="relative"> {/* Added padding to make space for the line */}
      {/* Vertical dashed line (behind cards) */}
      <div className='absolute left-16 top-0 h-full border-l-[1px] border-dashed border-gray-600 z-0'></div>
      
      {/* First Card */}
      <div className='relative h-[100px] mt-10 flex justify-between items-center w-full py-3 px-2 bg-white border-gray-300 border rounded-2xl z-10 shadow-md shadow-[#FF0000]'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <span className='text-sm'>Next Repayment</span>
            <h1 className='text-lg font-medium text-[#FF0000]'>2 days overdue</h1>
          </div>
        </div>
          {/* Countdown Timer */}
          <div className="flex items-center gap-4">
          {/* Days */}
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center border border-[#ccc] rounded-[12px] shadow-[0_2px_0_#ccc]">
            <p className="text-[20px] font-bold leading-none">00</p>
            <p className="text-xs">Days</p>
          </div>

          {/* Colon */}
          <div className="text-[24px] font-extrabold">:</div>

          {/* Hours */}
          <div className="w-[60px] h-[60px] flex flex-col items-center justify-center border border-[#ccc] rounded-[12px] shadow-[0_2px_0_#ccc]">
            <p className="text-[20px] font-bold leading-none">00</p>
            <p className="text-xs">Hours</p>
          </div>
        </div>
        <h1 className='text-sm font-medium text-[#273e8e]'>N50,000</h1>
      </div>
      <div className='relative h-[100px] mt-10 flex justify-between items-center w-full py-3 px-2 bg-white border-gray-300 border rounded-2xl z-10'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <span className='text-sm'>Next Repayment</span>
            <h1 className='text-lg font-medium text-[#273e8e]'>Paid - 05 June, 25</h1>
          </div>
        </div>
        <h1 className='text-sm font-medium text-[#273e8e]'>N50,000</h1>
      </div>

      {/* Second Card */}
      <div className='relative h-[100px] mt-10 flex justify-between items-center w-full py-3 px-2 bg-white border-gray-300 border rounded-2xl z-10'>
        <div className='flex items-center'>
          <div className='ml-4'>
            <span className='text-sm'>Next Repayment</span>
            <h1 className='text-lg font-medium text-[#273e8e]'>Paid - 05 June, 25</h1>
          </div>
        </div>
        <h1 className='text-sm font-medium text-[#273e8e]'>N50,000</h1>
      </div>

    </div>
  )
}

export default RepaymentHistorySection