import Link from 'next/link';

export default function Header() {
    return (
        <div className="flex px-[20px] w-full py-[25px]">
            <Link href="/" passHref>
            <button className="bg-[#D8A876] rounded-lg w-[35px] pl-[5px] text-white hover:text-gray-300 transition duration-300">
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
           
            <h1 className="text-2xl ml-4">ФОТО ВЫСТАВКА</h1>

            
            
        </div>
    );
}