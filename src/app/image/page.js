import Link from "next/link";
import Header from "../components/header";

export default function Image(){
    return (<div>
        <Header>
            <div className="flex p-8">
                <input type="text" className="bg-[#F4F0EC] w-[380px] rounded-[10px] text-[#D8A876] placeholder-[#D8A876] font-bold pl-[10px]" placeholder="Найти"></input>
                <button className="relative right-[30px]"> <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-[#D8A876]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 10-7 7 7 7 0 007-7z"
            />
        </svg>
        </button>
                <Link href="/"><p className="mt-[10px] justify-end text-[20px] font-sans font-bold">Главная</p></Link>
                <Link href='/userProfile'><p className="ml-[40px] mt-[10px] justify-end text-[20px] font-sans font-bold">Профиль</p></Link>
            </div>
        </Header>
        <div className="flex flex-wrap gap-5 ml-[50px] mr-[50px]">
            <img src="1img.png" className="w-[474px] h-[699px] "></img>
            <img src="2img.png" className="w-[236px] h-[472px] "></img>
            <img src="3img.png" className="w-[408px] h-[577px] "></img>
            <img src="4img.png" className="w-[473px] h-[598px] "></img>
            <img src="5img.png" className="w-[200px] h-[475px] "></img>
            <img src="6img.png" className="w-[200px] h-[475px] "></img>
            <img src="7img.png" className="w-[200px] h-[278px] "></img>

        </div>
    </div>)
}