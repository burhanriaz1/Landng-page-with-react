import React from 'react'

export default function Blog() {
  return (
    <div>
        <main className='bg-slate-100 h-full w-screen py-7'>
        <h1 className='text-5xl text-center font-bold text-gray-700 pt-20 underline underline-offset-8'>Title</h1>
        <div className='cards flex flex-col items-center container mx-auto gap-5 tablet:flex-row mt-10'>
            <div className='card1 bg-white rounded-lg py-5 tablet:py-16 px-3 shadow-xl w-[327px] tablet:w-[427px] h-[340px]'>
                <p className='text-xl'>Getting Started</p>
                <h1 className='text-3xl font-semibold'>lorem ipsum dolor ipsum.</h1>
                <p className='text-xl py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                <button className='rounded-full gradient px-3 py-1'>Action</button>
            </div>
            <div className='card2 bg-white rounded-lg py-5 tablet:py-16 px-3 shadow-xl w-[327px] tablet:w-[427px] h-[340px]'>
                <p className='text-xl'>Getting Started</p>
                <h1 className='text-3xl font-semibold'>lorem ipsum dolor ipsum.</h1>
                <p className='text-xl py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                <button className='rounded-full gradient px-3 py-1'>Action</button>
            </div>
            <div className='card3 bg-white rounded-lg py-5 tablet:py-16 px-3 shadow-xl w-[327px] tablet:w-[427px] h-[340px]'>
                <p className='text-xl'>Getting Started</p>
                <h1 className='text-3xl font-semibold'>lorem ipsum dolor ipsum.</h1>
                <p className='text-xl py-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet ligula.</p>
                <button className='rounded-full gradient px-3 py-1'>Action</button>
            </div>
        </div>
        </main>
    </div>
  )
}
