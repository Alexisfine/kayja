import React from 'react'

const ProductCard = ({Icon, title}) => {
  return (
    <div className=' flex flex-col w-36 h-36 rounded-md cursor-pointer 
        items-center border  py-3 bg-sky-300 hover:bg-sky-400'>
        <Icon className='mx-auto my-auto w-12 h-12 '/>
        <h3 className='text-center'>{title}</h3>
    </div>
  )
}

export default ProductCard