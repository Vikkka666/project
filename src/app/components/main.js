"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function Main() {
  const [isAuthenticated, setIsAuthenticated] = useState(false); 

  useEffect(() => {
    const token = localStorage.getItem('token'); 
    if (token) {
      setIsAuthenticated(true); 
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token'); 
    setIsAuthenticated(false); 
  };

  return (
    <div className='flex justify-around w-full flex-wrap mb-[50px] bg-white'>
      <div className="relative">
        <img src="/фон.jfif" className="w-[1210px] h-[758] object-cover object-center rounded-tl-[200px] rounded-br-[200px]" />
        <div className="absolute inset-0 bg-black opacity-30 rounded-tl-[200px] rounded-br-[200px]"></div>
        <p className="pl-[50px] absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-[65px]">
          Добро пожаловать в мир неограниченного творчества!
        </p>
        <p className="pl-[50px] absolute top-[450px] left-1/3 transform -translate-x-1/2 -translate-y-1/2 text-white text-[22px]">
          Присоединяйтесь к тысячам креативных людей, которые уже нашли всё необходимое для своих проектов.
        </p>

        <div className="absolute left-[200px] transform -translate-x-1/2 top-[500px] bg-white flex justify-around rounded-[10px] w-[275px] h-[60px] p-[5px]">
          {isAuthenticated ? (
            <>
              <Link href="/userProfile" passHref>
                <button className="w-[130px] h-[50px] flex items-center bg-[#D8A876] rounded-[10px] text-white hover:text-gray-700 p-[10px]">
                  Профиль
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform scale-x-[-1] ml-[5px]"
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
              <button
                onClick={handleLogout}
                className="w-[130px] h-[50px] flex items-center bg-[#D8A876] rounded-[10px] ml-[5px] text-white hover:text-gray-700 p-[10px]"
              >
                Выйти
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-[5px] h-6 w-6 transform scale-x-[-1]"
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
            </>
          ) : (
            <>
              <Link href="/registration" passHref>
                <button className="w-[130px] h-[50px] flex items-center bg-[#D8A876] rounded-[10px] text-white hover:text-gray-700 p-[10px]">
                  Регистрация
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 transform scale-x-[-1] ml-[5px]"
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
              <Link href="/login" passHref>
                <button className="w-[130px] h-[50px] flex items-center bg-[#D8A876] rounded-[10px] ml-[5px] text-white hover:text-gray-700 p-[10px]">
                  Вход 
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-[5px] h-6 w-6 transform scale-x-[-1]"
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
            </>
          )}
        </div>
      </div>
    </div>
  );
}
