import Header from "../components/header";
import Link from 'next/link';


export default function userProfile(){
    return (
        <div>
           <Header>
           <div className="flex ml-[400px] justify-end p-8 ">
                <Link href="/"><p className="mt-[10px]  text-[20px] font-sans font-bold">Главная</p></Link>
                <Link href='/userProfile'><p className="ml-[40px] mt-[10px] text-[20px] font-sans font-bold">Профиль</p></Link>
            </div>
           </Header>
           <div className="flex flex-wrap justify-around">
            <form className="mt-[200px] max-w-md">
                <h1 className="text-[60px] mb-[20px] font-sans">Смена пароля</h1>
                <hr className="mb-[40px] border-b border-black w-full" />
            <input
              type="password"
              placeholder="Пароль"
              className="w-full p-1 mb-4 font-sans bg-[#F4F0EC]  rounded-lg text-[#CDA274] placeholder-[#CDA274] text-[30px] placeholder-[30px]  focus:outline-none focus:border-b-[#CDA274]"
             
            />
            <input
              type="password"
              placeholder="Повторите пароль"
              className="w-full p-1 mb-4 font-sans  bg-[#F4F0EC] rounded-lg text-[#CDA274] placeholder-[#CDA274] text-[30px] placeholder-[30px]  focus:outline-none focus:border-b-[#CDA274]"
              
            />
            <button
              type="submit"
              className="pl-[80px] flex items-center shadow-lg shadow-[#C0C0C059] w-[250px] h-[49px] mt-[20px] bg-[#CDA274] font-sans text-white text-[18px] p-3 rounded-[18px] hover:bg-[#B88E5F] transition-colors"
            >
              Сменить
              <svg
              xmlns="http://www.w3.org/2000/svg"
              className="ml-[10px] h-6 w-6 transform scale-x-[-1]"
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
            <p className="text-[#929C9A] text-[48px] font-sans mt-[30px] ">Удаление аккаунта</p>
            </form>
            <img src="userProfile.png" />
           </div>
        </div>
    );
}