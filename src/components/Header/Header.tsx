import Image from 'next/image'
import React from 'react'

export const Header = () => {
    return (
        <div className='bg-black flex p-4 px-8 items-center justify-between text-white	'>
            <span className='flex items-center gap-2'>
                <Image src='/logo.svg' alt='logo' width={40} height={40} /><span className='h-10 w-[1px] bg-[#FFC436]'/><span className='tracking-widest font-semibold'>STORIES</span>
            </span>
            <button className='text-black font-semibold	py-2 px-3 rounded h-min bg-[#FFC436]'><p className='m-0 p-0'>Courses</p></button>
        </div>
    )
}
