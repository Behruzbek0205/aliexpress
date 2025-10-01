import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { DATA } from '../../mock'
import { TbSettingsPlus } from 'react-icons/tb'

const SingleRoute = () => {
  const [number, usePlus] = useState(0)
  const { id } = useParams()
  const data = DATA.find((item) => item.id === id)
  if (!data) return <h2>Tavat topilmadi</h2>
  return (
    <div className='container max-w-[1540px] relative m-auto'>

      <div className="allin flex">
      <div className="card w-[800px] h-[500px] border-1 rounded-2xl mx-[100px] flex ">
        <img src={data.url[0]} alt={data.title} className='w-[400px] h-[400px] my-[40px]' />
        <div className="flexx my-[30px] mx-[80px]">
          <h2 className='text-[28px] font-semibold '>{data.title}</h2>
          <p className='text-[20px]  text-[black]'>{data.text}</p>
          <div className="fleeex flex gap-[10px] my-[10px]">
            <span className='w-[100px] h-[25px] bg-[#d2cece75] font-medium text-[black] rounded-2xl flex items-center justify-center'>{data.people}</span>
            <p className='w-[50px] h-[25px] bg-[#7fec84] text-[16px] text-[white] rounded-2xl'>{data.star}</p>
          </div>
        </div>
      </div>
      <div className="buy border-1 rounded-2xl p-[15px] bg-[#FCFCFD] h-[300px]">
        <div className="text flex items-center gap-5 ">
          <b className='text-[24px] text-[red]  my-[20px]'>{data.price}</b>
          <h3 className='w-[200px] h-[25px] bg-[#d2cece75] font-medium text-[black] rounded-2xl flex items-center justify-center'>Осталось 100+ шт.</h3>
        </div>
        <p className='text-3xl'>Количество {number}</p>
        <div className="quantity flex gap-[10px] mt-[20px] mx-[30px]">
            <button onClick={() => usePlus(number + 1)} className='w-[150px] h-[48px] bg-amber-300 rounded-2xl text-5xl flex items-center justify-center'>+</button>
            <button onClick={() => usePlus(number > 0 ? number -1 : 0)} className='w-[150px] h-[48px] bg-[#808080a4] rounded-2xl text-5xl flex items-center justify-center'>-</button>
          </div>
          <div className="button flex gap-[10px] my-[30px] mx-[30px]">
            <button className='w-[150px] h-[48px] bg-[#BEF550] p-[12px] rounded-2xl'>В корзинку</button>
            <button className='w-[150px] h-[48px] bg-[#FFE45B] p-[12px] rounded-2xl'>Купить сейчас</button>
          </div>
      </div>
      </div>
    </div>
  )
}

export default SingleRoute