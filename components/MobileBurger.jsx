import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from 'react'
import Hamburger from "./icon/Hamburger";
import Link from "next/link";
import { useRouter } from "next/router";


const MobileBurger = () => {
 const route = useRouter()
 const pathName = route.pathname;
 return (
  <Menu as="div" className="relative w-1/3">
    <Menu.Button>
      <Hamburger/>
    </Menu.Button>
    <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
    <Menu.Items className="absolute w-max mt-5  bg-[#242424] rounded-b-md shadow-lg ">
      <Menu.Item className={`text-2xl items-center text-center w-full py-5 px-8 border-b border-[#D2D2D7]  ${pathName === '/' ? 'text-[#0080FF]' : 'text-white'}`}>
        <div className={`ml-16 `}><Link href="/"><a>Home</a></Link></div>
      </Menu.Item>
      <Menu.Item className={`text-2xl items-center text-center  w-full py-5 px-8 border-b border-[#D2D2D7]  ${pathName === '/extraclass' ? 'text-[#0080FF]' : 'text-white'}`}>
        <div className={`ml-16 `}><Link href="/extraclass" ><a>Extra class</a></Link></div>
      </Menu.Item>
      <Menu.Item className={`text-2xl  items-center text-center  w-full py-5 px-8   ${pathName === '/aboutus' ? 'text-[#0080FF]' : 'text-white'}`}>
        <div className={`ml-16`}><Link href="/aboutus"><a>About us</a></Link></div>
      </Menu.Item>
    </Menu.Items>
    </Transition>
</Menu>
 )
}

export default MobileBurger;