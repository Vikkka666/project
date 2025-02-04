"use client"
import { useState } from "react";
import Link from "next/link";
import Header from "../components/header";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Ошибка входа');
      }

   
      const data = await response.json();
      localStorage.setItem('token', data.token); 
      alert("Пользователь успешно авторизован!");
      router.push("/userProfile");
    } catch (error) {
      console.error('Ошибка:', error);
      setErrorMessage('Ошибка входа: ' + error.message);
    }
  };
  return (
    <div>
      <Header />
      <div className="bg-[#1E1E1E] w-full h-[1000px] min-h-screen flex">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <p className="text-white text-[65px] font-bold mb-4">Добро пожаловать!</p>
          <p className="text-white text-[22px] font-sans mb-8">Доступ к миллионам изображений за пару кликов</p>

          <form className="max-w-md" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 font-sans bg-transparent border border-t-transparent border-l-transparent border-r-transparent border-b-white rounded-lg text-[#CDA274] placeholder-[#CDA274] text-[30px] placeholder-[30px] focus:outline-none focus:border-b-[#CDA274]"
              onChange={handleEmailChange}
              value={email}
            />
            <input
              type="password"
              placeholder="Пароль"
              className="w-full p-3 mb-6 font-sans bg-transparent border border-t-transparent border-l-transparent border-r-transparent border-b-white rounded-lg text-[#CDA274] placeholder-[#CDA274] text-[30px] placeholder-[30px] focus:outline-none focus:border-b-[#CDA274]"
              onChange={handlePasswordChange}
              value={password}
            />
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <Link href='/registration'><p className="text-white text-[22px] font-sans mb-[10px]">Еще нет учетной записи?</p></Link>
            <button
              type="submit"
              className="pl-[80px] flex items-center shadow-lg shadow-[#C0C0C059] w-[250px] h-[65px] mt-[50px] bg-[#CDA274] font-sans text-white text-[18px] p-3 rounded-[18px] hover:bg-[#B88E5F] transition-colors"
            >
              Войти
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 transform scale-x-[-1]"
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
          </form>
        </div>

        <div className="flex-1 overflow-hidden mt-[50px]"> 
          <div className="absolute w-[452px] h-[874px] bg-[#CDA274] rounded-[500px] "></div>
          <img
            src="/логин_картинка.png"
            className="absolute w-[226px] h-[874px] object-cover object-center rounded-bl-[500px] rounded-tl-[500px]"
          />
        </div>
      </div>
    </div>
  );
}
