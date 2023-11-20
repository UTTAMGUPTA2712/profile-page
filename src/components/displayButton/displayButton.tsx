import React from 'react'

export const DisplayButton = (props: DisplayButtonPropsType) => {
  const { key, data, value } = props
  return (
    <div key={key} className='flex flex-col items-center'>
      <div className='border border-2 rounded-lg border-[grey] w-24 h-12 text-2xl text-[grey] font-bold flex items-center justify-center'>{value}</div>
      <span className='text-xs'>
        {data}
      </span>
    </div>
  )
}
