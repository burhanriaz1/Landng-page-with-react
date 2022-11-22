import React from 'react'

export default function Pricing() {
  return (
    <div className='bg-slate-100'>
        <h1 className='text-3xl font-bold uppercase underline underline-offset-8 text-center py-8'>Pricing</h1>
        <div className='cards relative flex flex-col tablet:flex-row items-center justify-center container mx-auto my-10 gap-5 tablet:gap-40'>
            <div className='card1 bg-white -z-1 rounded-lg  text-center w-[400px] h-[400px]'>
                <h1 className='py-5  border-b-4  text-3xl font-bold uppercase'>Basic</h1>
                <h1 className='py-3 w-full'>Price1</h1><hr/>
                <h1 className='py-3'>Price2</h1><hr/>
                <h1 className='py-3'>Price3</h1><hr/>
                <h1 className='py-3'>Price4</h1><hr/>
                <div className='pricesection py-3 flex flex-col gap-4 items-center'>
                    <h1 className='text-lg font-semibold'><span className='font-bold text-2xl'>9.95$</span>/per user</h1>
                    <button className=' rounded-full gradient text-xl font-bold py-3 px-3'>Sign Up</button>
                </div>
            </div>
            <div className='relative bg-white tablet:absolute z-10  tablet:-top-6 left-70 rounded-lg shadow-lg card2  text-center w-[400px] h-[400px]'>
                <h1 className='py-5  border-b-4 border-red-500 text-3xl font-bold uppercase'>pro</h1>
                <h1 className='py-3 w-full font-bold'>Price1</h1><hr/>
                <h1 className='py-3 font-bold'>Price2</h1><hr/>
                <h1 className='py-3 font-bold'>Price3</h1><hr/>
                <h1 className='py-3 font-bold'>Price4</h1><hr/>
                <div className='pricesection py-3 flex flex-col gap-4 items-center'>
                    <h1 className='text-lg font-semibold'><span className='font-bold text-2xl'>9.95$</span>/per user</h1>
                    <button className=' rounded-full gradient text-xl font-bold py-3 px-3'>Sign Up</button>
                </div>
            </div>
            <div className='card3 bg-white -z-1 text-center w-[400px] h-[400px]'>
                <h1 className='py-5 border-b-4 text-3xl font-bold uppercase'>advance</h1>
                <h1 className='py-3 w-full'>Price1</h1><hr/>
                <h1 className='py-3'>Price2</h1><hr/>
                <h1 className='py-3'>Price3</h1><hr/>
                <h1 className='py-3'>Price4</h1><hr/>
                <div className='pricesection py-3 flex flex-col gap-4 items-center'>
                    <h1 className='text-lg font-semibold'><span className='font-bold text-2xl'>9.95$</span>/per user</h1>
                    <button className=' rounded-full gradient text-xl font-bold py-3 px-3'>Sign Up</button>
                </div>
            </div>
        </div>
    </div>
  )
}
