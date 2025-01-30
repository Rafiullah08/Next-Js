import React from 'react'

function Footer() {
  return (
    <div>
     <footer className='bg-black text-gray-400 py-12'>
<div className='max-w-6xl mx-auto grid gird-cols-1 sm:grid-cols-2 lg:grid-cols-4
 gap-8 px-4 sm:px-6 lg:px-8'>
    <div>
        <h2 className='text-white font-semi-bold'>About Us</h2>
    </div>
    <div>
        <h2 className='text-white font-semi-bold'>Quick Links</h2>
    </div>
    <div>
    <h2 className='text-white font-semi-bold'>Follow Us</h2>
    </div>
    <div>
        <h2 className='text-white font-semi-bold'>Contact Us</h2>
    </div>
</div>
<p className='text-center pt-8 text-xs'>@ 2025 TechNova Academy. All Rights Reserverd</p>
     </footer> 
    </div>
  )
}

export default Footer
