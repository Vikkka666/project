import Link from 'next/link';

export default function Header({children}) {
    return (
            <div className='flex flex-wrap bg-white'>
            <div  className="flex item-center px-[20px]">
            <Link href="/" passHref>
            <button className="bg-[#D8A876] rounded-[15px] w-[40px] h-[40px] pl-[5px] text-white hover:text-gray-300 transition duration-300 m-8">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                    />
                </svg>
            </button>
</Link>
           
          <Link href="/image">  <h1 className="text-[40px] mt-[5px] p-5 text-black">ФОТО ВЫСТАВКА</h1> </Link>

          </div>
          
            {children}
            
        </div>
    );
}