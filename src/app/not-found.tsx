import Image from 'next/image';
import Link from 'next/link';
import hero from "%/hero.svg";
import {RiHome6Fill} from 'react-icons/ri'
const NotFound = () => {
  return (
    <main className="flex p-4 flex-col h-full grow ">
      <div className="w-full flex flex-col items-center  justify-center grow h-full">
        {/* first section */}
        <div className='sm:w-full text-6xl sm:text-7xl font-semibold py-2'>
        <h1 className="">
          You are <br /> on <br /> wrong Page
        </h1>
        <Link className='text-2xl font-semibold inline-flex items-center bg-black gap-2 rounded-md text-white pr-4 p-2' href='/'><RiHome6Fill size={30}/>HOME</Link>
      </div>
      </div>
    </main>
  )
}

export default NotFound