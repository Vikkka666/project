import Header from "../components/header";

export default function Login() {
  return (
    <div>
      <Header />
      <div className="bg-[#1E1E1E] w-full h-[1000px] min-h-screen flex">
        <div className="flex-1 p-10 flex flex-col justify-center">
          <p className="text-white text-4xl font-bold mb-4">Добро пожаловать!</p>
          <p className="text-white text-lg mb-8">Доступ к миллионам изображений за пару кликов</p>

          <form className="max-w-md">
            <input
              type="text"
              placeholder="Email"
              className="w-full p-3 mb-4 bg-transparent border border-[#CDA274] rounded-lg text-[#CDA274] placeholder-[#CDA274] focus:outline-none focus:border-[#CDA274]"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 mb-6 bg-transparent border border-[#CDA274] rounded-lg text-[#CDA274] placeholder-[#CDA274] focus:outline-none focus:border-[#CDA274]"
            />
            <button
              type="submit"
              className="w-full bg-[#CDA274] text-white p-3 rounded-lg hover:bg-[#B88E5F] transition-colors"
            >
              Войти
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