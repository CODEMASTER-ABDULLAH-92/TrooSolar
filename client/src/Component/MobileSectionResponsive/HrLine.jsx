import React from 'react'

const HrLine = ({text}) => {
  return (
    <div>
         <div className="flex items-center gap-2">
              <h1 className="text-xl block sm:hidden font-medium">
                {text}
              </h1>
              <div className="flex-1 h-px sm:hidden bg-gray-400/40" />
            </div>
    </div>
  )
}

export default HrLine
