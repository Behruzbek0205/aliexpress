import React from 'react'

const Footer = () => {
  return (
    <div className='container m-w-[1540px] relative m-auto'>
      <footer className='w-[1521px] bg-[#80808055] ml-[-41px] h-[400px]'>
      <div className="topp flex w-[1240px] mx-[120px] justify-between absolute top-12">
      <div className="top">
        <h3 className='text-[20px] font-semibold '>Покупателям</h3>
        <ul>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Поддержка</button></li> 
          <li><button className='w-[183px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Календарь распродаж</button></li>
        </ul>
      </div>
      <div className="top ">
        <h3 className='text-[20px] font-semibold '>Партнёрам</h3>
        <ul className=''>
          <li><button className='w-[183px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Продавайте на AliExpress</button></li>
          <li><button className='w-[183px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Аффилиатная программа</button></li>
          <li><button className='w-[183px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Блог для продавца</button></li>
        </ul>
      </div>
      <div className="top">
        <h3 className='text-[20px] font-semibold '>О компании</h3>
        <ul>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Пресс-центр</button></li>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>AliTech</button></li>
          <li><button className='w-[203px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Блог о жизни компании</button></li>
          
        </ul>
      </div>
      <div className="top">
        <h3 className='text-[20px] font-semibold '>Мы в соцсетях</h3>
        <ul>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Вконтакте</button></li>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Одноклассники</button></li>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Telegram</button></li>
          <li><button className='w-[123px] h-[30px] bg-[white] rounded-xl mt-[15px]'>Дзен</button></li>
        </ul>
      </div>
      </div>
      <div className="bottom absolute top-[300px] flex mx-[120px]">
        <div className="bot">
          <h3 className='text-[20px] font-semibold w-[150px]'>© AliExpress®</h3>
          <p className='text-[20px] font-semibold'>2019 – 2025</p>
        </div>
        <div className="bot absolute left-[360px]">
          <p className='w-[290px]'>На информационном ресурсе применяются <span className='text-[blue]'>рекомендательные технологии</span></p>
        </div>
        <div className="bot w-[400px] absolute left-[720px]">
          <ul>
            <li className='text-[blue]'>Политика конфиденциальности</li>
            <li className='text-[blue]'>На информационном ресурсе применяются рекомендательные технологии</li>
          </ul>
        </div>
        <div className="bot  w-[200px] absolute left-[1110px]">
          <p className='text-[18px] text-[blue]'>created by NoName</p>
        </div>
      </div>
      </footer>
    </div>
  )
}

export default Footer