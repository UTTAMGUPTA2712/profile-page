"use client"
import React from 'react'
import Image from 'next/image'

import { DisplayField } from '@/components/displayField'
import { checkCount } from '@/utils/helper'

export const PostCard = (props: PostCardPropsType) => {
  const { key, data } = props
  const [isPinned, setIsPinned] = React.useState(false)
  return (
    <div key={key} className='p-6 flex flex-col gap-6 border-b-2'>
      <div className='flex items-center justify-between'>
      <h1 className="mt-3 text-4xl font-extrabold text-gray-900 group-hover:text-gray-600">{data.title}</h1>
      <Image src={'/thumb.png'} width={35} height={35} alt="pinned" />
      </div>
      <div onClick={()=>setIsPinned(p=>!p)} className={`${!isPinned&&'line-clamp-4'} leading-12`}>
        {
          data.description.map((item, index) => <DisplayField key={index} data={item} />)
        }
      </div>
      <div className="flex justify-between items-center gap-x-12 text-lg">
          <span className='font-semibold'><span className='text-[#33BBC5]'>{data.category}</span> by {data.author} </span>
          <span className='text-base text-[grey] items-center flex gap-1'>
            {new Date(data.timeStamp).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
            <p className='h-[2px] w-[2px] bg-[grey] inline-block'/>
            {data.readingTime} Read 
            <p className='h-[2px] w-[2px] bg-[grey] inline-block'/>
            {checkCount(data.views)} Views
            </span>
      </div>
    </div>
  )
}
