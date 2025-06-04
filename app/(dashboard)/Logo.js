import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <div>
        <Link href="/">
        <div className='items-center hidden lg:flex '>
            <Image src="logo.svg" alt='logo' height={28} width={ 28}/>
            <p className=' font-semibold text-white text-2xl  ml-2.5'>Crime Report App</p>
        </div>
        </Link>
    </div>
  )
}

export default Logo

