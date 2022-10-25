import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GiShoppingBag } from 'react-icons/gi';
const Navbar = () => {
  return (
    <div className='flex flex-col md:justify-start md:flex-row items-center justify-between py-2 shadow-xl'>
      <div className="logo mx-5">
        <Image src="/codewear-logo (1).png" alt="" width={200} height={60} />
      </div>
      <div className="nav">
        <ul className='flex items-center space-x-6 font-bold md:text-sm cursor-pointer'>
          <Link href={'/tshirts'}><li>Tshirts</li></Link>
          <Link href={'/hoodies'}><li>Hoodies</li></Link>
          <Link href={'/sticker'}><li>Stickers</li></Link>
          <Link href={'/mugs'}><li>Mugs</li></Link>
        </ul>
      </div>
      <div className="cart right-0 top-4 absolute mx-5">
        <GiShoppingBag className= "text-xl md:text-2xl"/>
      </div>
    </div>
  )
}

export default Navbar