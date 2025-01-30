"use client";
import { useState } from "react";
import Header from "../components/header";
import useUserStore from "../store/userStore";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Registration(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const addUsers = useUserStore((state) => state.addUsers);
    const router = useRouter();
    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };
    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };
    const addUser = (e) => {
        e.preventDefault();
        addUsers({ email: email, password: password, id: Math.random() * 100 });
        clear();
        router.push("/userProfile");
    };
    const clear = () => {
        setEmail("");
        setPassword("");
    };    
    return (
        <div>
          <Header />
          <div className="bg-[#1E1E1E] w-full h-[1000px] min-h-screen flex">
            <div className="flex-1 p-10 flex flex-col justify-center">
              <p className="text-white text-4xl font-bold mb-4">Добро пожаловать!</p>
              <p className="text-white text-lg mb-8">Доступ к миллионам изображений за пару кликов</p>
    
              <form className="max-w-md" onSubmit={addUser}>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full p-3 mb-4 bg-transparent border border-[#CDA274] rounded-lg text-[#CDA274] placeholder-[#CDA274] focus:outline-none focus:border-[#CDA274]"
                  onChange={handleEmailChange}
                value={email}
                />
                <input
                  type="password"
                  placeholder="Пароль"
                  className="w-full p-3 mb-6 bg-transparent border border-[#CDA274] rounded-lg text-[#CDA274] placeholder-[#CDA274] focus:outline-none focus:border-[#CDA274]"
                  onChange={handlePasswordChange}
                  value={password}
                />
                <button
                  type="submit"
                  className="w-full bg-[#CDA274] text-white p-3 rounded-lg hover:bg-[#B88E5F] transition-colors"
                onClick={(e) => addUser()}
                >
                  Регистрация
                </button>
              </form>
            </div>
    
            <div className="flex-1 overflow-hidden mt-[50px]"> 
              
              <div className="absolute w-[452px] h-[874px] bg-[#CDA274]  rounded-[500px] "></div>
              <img
                src="/логин_картинка.png"
                className="absolute w-[226px] h-[874px] object-cover object-center rounded-bl-[500px] rounded-tl-[500px]"
              />
            </div>
    
        </div>
        </div>
      );
}