import React from 'react'

const LoanCard = ({ amount = "1,000,000", duration = "12 Months" }) => {
  return (
    <div className='max-w-[556px] h-[100px] p-3 rounded-2xl text-white bg-gradient-to-r from-[#273E8E] to-[#FFA500]'>
      <div className='flex justify-between h-full'>
        <div className='flex flex-col justify-between'>
          <p className='text-sm'>Congratulations you are eligible for</p>
          <h1 className='text-2xl font-semibold'>N{amount}</h1>
        </div>
        <div className='flex flex-col justify-between text-left'>
          <span className='text-sm'>Period</span>
          <h1 className='text-lg'>{duration}</h1>
          <h1 className='text-sm'>Repay Monthly</h1>
        </div>
      </div>
    </div>
  )
}

export default React.memo(LoanCard)
