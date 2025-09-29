import React, { useState } from 'react'
import { FaBookOpen } from "react-icons/fa6";
import { FaBorderAll } from "react-icons/fa";
import { SlBasketLoaded } from "react-icons/sl";
import { LuSmilePlus } from "react-icons/lu";

const Header = () => {
  const [color, setColor] = useState('white');
  return (
    <div className='container m-w-[1540px] relative m-auto  ' style={{ backgroundColor: color }}>
      <header className='w-[1440px]  mt-[15px] h-[80px] flex items-center justify-between bg-[red] rounded-2xl'>
        <div className="left w-[120px]">
          <h1 className='w-[120px] text-[white] text-3xl mx-[30px]    font-semibold'>AliExpress</h1>
        </div>
        <div className="center flex items-center w-[300px] ">
          <button  className='w-[60px] h-[60px] bg-red-600 flex  flex-col items-center justify-center mx-[-30px] text-[15px] rounded-xl  text-[white]'><FaBookOpen className='text-[25px] text-[white]' />Католог</button>
          <div className="input  w-[500px] h-[60px] bg-[white] absolute left-[465px] flex items-center rounded-xl">
            <input type="text" placeholder='фанарик' className='mx-[20px] outline-none'/>
            <button  className='w-[120px] h-[50px] bg-[#27df27] rounded-2xl absolute left-[370px]'>Найти</button>
          </div>
        </div>
        <div className="right">
          <ul className='flex w-[300px] gap-2.5 mx-[60px]'>
            <li>
              <button className='w-[60px] h-[60px] bg-red-600 flex  flex-col items-center justify-center text-[15px] rounded-xl  text-[white]'><FaBorderAll className='text-[25px] text-[white]' />Заказы</button>
            </li>
            <li>
              <button className='w-[60px] h-[60px] bg-red-600 flex  flex-col items-center justify-center text-[15px] rounded-xl  text-[white]'><SlBasketLoaded className='text-[25px] text-[white]' />Карзинка</button>
            </li>
            <li>
              <button className='w-[60px] h-[60px] bg-red-600 flex  flex-col items-center justify-center text-[15px] rounded-xl  text-[white]'><LuSmilePlus className='text-[25px] text-[white]' />Войти</button>
            </li>
            <li><button className='w-[60px] h-[60px] bg-[white] flex rounded-xl' onClick={()=> setColor('white')} ></button></li>
            <li><button className='w-[60px] h-[60px] bg-[black] flex rounded-xl' onClick={()=> setColor('black')} ></button></li>
          </ul>
        </div>
      </header>
    </div>
  )
}

export default Header