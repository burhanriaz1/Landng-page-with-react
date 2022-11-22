import React from 'react'
import img from "../img/hero.png"

export default function Hero() {
  return (
    <>
    <div className='gradient w-screen h-full tablet:h-screen pt-24 text-center'>
        <div className='flex flex-col text-white  tablet:flex-row container mx-auto '>
        <div className='w-full flex flex-col  tablet:items-start tablet:text-left'>
                    <p className='uppercase text-2xl mb-3'>What business are you?</p>
                    <h1 className='font-bold text-5xl my-4'>Main Hero Message to sell yourself!</h1>
                    <p className="leading-normal text-2xl mb-8">Sub-hero message, not too long and not too short. Make it just right!</p>
                    <button className='mx-auto tablet:mx-0 bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8'>Subscribe</button>
        </div>
            <div className='img tablet:w-4/5 tablet:text-center'>
            <img className='bg-cover' alt="img" src={img}/>
            </div>
        </div>
    </div>
</>
  )
}
