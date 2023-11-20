import React from 'react'
import Image from 'next/image'

import { PostCard } from '@/components/postCard'
import { DisplayButton } from '@/components/displayButton'
import { checkCount } from '@/utils/helper'


export const Profile = (props: ProfilePagePropsType) => {
  const { data } = props
  return (
    <div>
      <div style={{ backgroundImage: `url(${data.profileBackgroundPic})` }} className="h-80 bg-cover bg-center" />
      <div className='px-12 flex gap-8'>
        <Image className='rounded-full -translate-y-[30%] border border-[grey] border-2' src={data.profilePic} alt="avatar" width={175} height={175} />
        <div>
          <h1 className='text-2xl my-4 font-bold flex items-center gap-2'>
            {data.name}
            {data.premium && <Image src={'/premium.png'} width={25} height={25} alt="premium" />}
            {data.verified && <Image src={'/verify.png'} width={25} height={25} alt="verified" />}
          </h1>
          <div className='flex gap-8'>
            <DisplayButton data='Followers' value={data.followers} />
            <DisplayButton data="Following" value={data.following} />
          </div>
        </div>
      </div>
      <div className='px-12'>
        <h2 className='text-3xl  leading-12 tracking-wide text-[grey]'>{data.designation}</h2>
        {data.socialLinks.map((item, index) => <a href={item.url} className='text-lg text-[#33BBC5]' key={index}>{item.url}</a>)}
        <p className='flex gap-4 my-4'>
          <Image src={'/star.png'} width={25} height={25} alt="star" /> {checkCount(data.starred)}
          <Image src={'/thumb.png'} width={25} height={25} alt="pinned" /> {checkCount(data.pinned)}
          <Image src={'/view.png'} width={25} height={25} alt="view" /> {checkCount(data.views)}
          <Image src={'/like.png'} width={25} height={25} alt="like" /> {checkCount(data.likes)}
        </p>
      </div>
      <div>
        <div className='flex'>
          <div className='border-2 p-3 rounded-tr-lg border-b-0 border-l-0 border-[grey] text-[#3C79F5] font-bold text-xl'>{data.posts.length} Posts</div>
          <div className='border-b-2 border-[grey] flex-1' />
        </div>
        {
          data.posts.map((post, index) => <PostCard key={index} data={post} />)
        }
      </div>
    </div>
  )
}
