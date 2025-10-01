import React from 'react'
import { Link } from 'react-router-dom'
import { DATA } from '../../mock'

const Card = () => {
  return (
    <div className="container max-w-[1540px] relative m-auto">
      <div className="card w-[1430px] flex flex-wrap gap-6 mx-[85px] my-[50px]">
        {DATA.map((item) => (
          <Link 
            to={`/product/${item.id}`} 
            key={item.id}
            className="tavar w-[250px] h-[350px] border rounded-xl overflow-hidden block"
          >
            <img className="h-[230px] w-[250px]" src={item.url} alt={item.title} />
            <span className="text-[black] text-xl font-semibold mx-[30px]">{item.price}</span>
            <div className="qwerty flex gap-3 ml-[30px] my-[10px]">
              <span className='w-[50px] h-[25px] bg-[#7fec84] text-[16px] text-[white] rounded-2xl'>{item.star}</span>
              <span className='w-[100px] h-[25px] bg-[#d2cece75] font-bold text-[black] rounded-2xl flex items-center justify-center'>{item.people}</span>
            </div>
            <p className="mx-[30px]">{item.text}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Card
