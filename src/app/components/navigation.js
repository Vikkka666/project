export default function Nav() {
  return  ( <div className="flex justify-around px-[20px] mt-[12px] border-b border-[#636363] pb-[12px] w-full">
        <nav>
            <ul className="flex justify-between gap-40">
                <li>
                  <a href="#" className=" transition duration-300 hover:text-[#f2f2f2] hover:bg-[black] rounded-md text-[15pt] p-[5px]"> menu1 </a>  
                </li>
                <li>
                  <a href="#" className=" transition duration-300 hover:text-[#f2f2f2] hover:bg-[black] rounded-md text-[15pt] p-[5px]"> menu2 </a>  
                </li>
                <li>
                  <a href="#" className=" transition duration-300 hover:text-[#f2f2f2] hover:bg-[black] rounded-md text-[15pt] p-[5px]"> menu3 </a>  
                </li>
                <li>
                  <a href="#" className=" transition duration-300 hover:text-[#f2f2f2] hover:bg-[black] rounded-md text-[15pt] p-[5px]"> menu4 </a>  
                </li>
            </ul>
        </nav>
    </div>
  )
}