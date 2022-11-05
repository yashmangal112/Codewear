import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingBag } from 'react-icons/gi';
import { IoIosCloseCircle } from 'react-icons/io';
import { BsFillBagCheckFill } from 'react-icons/bs';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { useRef } from 'react';

const Navbar = () => {
  const toggleCart = ()=>{
    if (ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-full')
      ref.current.classList.add('translate-x-0')
    }
    else if (!ref.current.classList.contains('translate-x-full')) {
      ref.current.classList.remove('translate-x-0')
      ref.current.classList.add('translate-x-full')
    }
  }

  const ref = useRef()

  useEffect(() => {
    // Update the document title using the browser API
    console.log(`You clicked ${count} times`) 
    if (count<1) {
      console.log("clearCart function use");
    }
  });


  const [count, setCount] = useState(1);
  return (
    <div className='flex flex-col md:justify-start md:flex-row items-center justify-between py-2 shadow-xl'>
      <div className="logo mx-5">
        <Link href={'/'}><a>
        <Image src="/codewear-logo (1).png" alt="" width={200} height={60} /></a></Link>
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-sm'>
          <Link href={'/tshirts'}><a><li>Tshirts</li></a></Link>
          <Link href={'/hoodies'}><a><li>Hoodies</li></a></Link>
          <Link href={'/sticker'}><a><li>Stickers</li></a></Link>
          <Link href={'/mugs'}><a><li>Mugs</li></a></Link>
        </ul>
      </div>
      <div onClick={toggleCart} className="cursor-pointer  hover:text-indigo-900 cart right-0 top-4 absolute mx-5">
        <GiShoppingBag className= "text-xl md:text-2xl"/>
      </div>
      <div ref={ref} className="w-72 h-full sideCart z-10 absolute top-0 right-0 bg-indigo-100 py-10 px-8 transform transition-transform translate-x-full">
        <h2 className="font-bold text-xl text-center">Shopping Cart</h2>
        <span onClick={toggleCart} className="absolute top-5 right-3 cursor-pointer hover:text-indigo-600 text-2xl"><IoIosCloseCircle/></span>
        <ol className='list-decimal font-semibold'>

          
          {/* Cart name */}
          <li>
            <div className="item flex my-5">
              <div className='w-2/3 font-semibold'>Tshirts - Wear the code</div>
              <div className='flex w-1/3 font-semibold items-center justify-center text-lg'>
                <AiFillMinusCircle onClick={()=> setCount(count-1)} className='cursor-pointer text-indigo-500'/>
                <span className='mx-2 text-sm'>{count}</span>
                <AiFillPlusCircle onClick={()=> setCount(count+1)} className='cursor-pointer text-indigo-500'/>
              </div>
            </div>
          </li>

        </ol>
        <div className="flex">
        <button class="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"><BsFillBagCheckFill className='m-1'/>Checkout</button>
        <button class="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">ClearCart</button>

        </div>
      </div>
    </div>
  )
}

export default Navbar