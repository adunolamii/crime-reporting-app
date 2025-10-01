import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
// import Welcome from './Welcome'

const Header = () => {
  return (
    <div className='h-34 sm: bg-blue-950 px-4 py-8 lg:px-14 pb-36'>
    <div className=' max-w-screen-2xl mx-auto'>
      <div className='w-full flex items-center justify-between mb-14'>
        <div className=' flex items-center lg:gap-x-16'>
          <Logo/>
          <Navigation/>
        </div>
      </div>

    </div>
    {/* <Welcome/> */}
    
    </div>
  )
}

export default Header