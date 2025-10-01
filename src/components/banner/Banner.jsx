  import React from 'react'
  import { IoLocationOutline } from "react-icons/io5";

  const Banner = () => {
    return (
      <div className='container m-w-[1540px] relative m-auto'>
        <div className="bottom w-[1440px] flex items-center justify-between my-[20px]">
          <div className="left flex gap-2">
            <button className='w-[140px] h-[40px] bg-[red] text-xl font-bold text-[white]  rounded-2xl'>ДНИ ВЫГОДЫ</button>
            <button className='w-[180px] h-[40px] bg-[#d2cece75] text- font-bold text-[black]  rounded-2xl'>КАЛЕНДАРЬ СКИДОК</button>
            <button className='w-[140px] h-[40px] rounded-2xl bg-[#d2cece75] text-[15px]'>Горящие тавары🔥</button>
            <button className='w-[140px] h-[40px] rounded-2xl bg-[#d2cece75] text-[15px]'>Топ-тавары</button>
          </div>
          <div className="right  flex gap-2">
            <button className='w-[200px] h-[40px] border-solid border-1 rounded-2xl pl-[10px] border-black flex items-center text-[18px] gap-1.5'><IoLocationOutline />Чиланзарский р-н</button>
            <button className='w-[50px] h-[40px] border-solid border-1 rounded-2xl pl-[10px] border-black flex items-center text-[18px] gap-1.5'>RU</button>
            <button className='w-[60px] h-[40px] border-solid border-1 rounded-2xl  border-black flex items-center text-[18px] gap-1.5 bg-[#d2cece75] pl-[13px]'>UZS</button>
          </div>
        </div>
      </div>
    )
  }

  export default Banner;