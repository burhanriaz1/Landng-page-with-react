import React from 'react'

export default function Footer() {
  return (
    <div className='flex gap-4 justify-between py-6 container mx-auto'>
        <h1 className='text-5xl font-bold'>Logo</h1>
        <div className='links flex flex-col gap-5'>
            <div className='top'><h1>Links</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <h2>FAQ</h2>
            <h2>Help</h2>
            <h2>Support</h2>
            </div>
        </div>
        <div className='legal flex flex-col gap-5'>
            <div className='top'><h1>Legal</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <h2>FAQ</h2>
            <h2>Help</h2>
            </div>
        </div>
        <div className='social flex flex-col gap-5'>
            <div className='top'><h1>Social</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <h2>FAQ</h2>
            <h2>Help</h2>
            <h2>Support</h2>
            </div>
        </div>
        <div className='company flex flex-col gap-5'>
            <div className='top'><h1>Social</h1></div>
            <div className='bottom flex flex-col gap-1'>
            <h2>FAQ</h2>
            <h2>Help</h2>
            <h2>Support</h2>
            </div>
        </div>
    </div>
  )
}
