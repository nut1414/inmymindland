import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from 'react'
import Hamburger from "./icon/Hamburger";
import Link from "next/link";


const MobileBurger = ({page}) => {
 return (
  <Menu as="div" className="relative ">
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
    <Menu.Items className="absolute w-max mt-5 -left-12 bg-[#242424] rounded-md px-12 py-24">
      <Menu.Item className={`text-2xl items-center text-center my-5 ${page == 1 ? 'text-[#0080FF]' : 'text-white'}`}>
        <div className={`ml-16 `}><Link href="/"><a>Home</a></Link></div>
      </Menu.Item>
      <Menu.Item className={`text-2xl items-center text-center my-5 ${page == 2 ? 'text-[#0080FF]' : 'text-white'}`}>
        <div className={`ml-16 `}><Link href="/extraclass" ><a>Extra class</a></Link></div>
      </Menu.Item>
      <Menu.Item className={`text-2xl  items-center text-center my-5 ${page == 3 ? 'text-[#0080FF]' : 'text-white'}`}>
        <div className={`ml-16`}><Link href="/aboutus"><a>About us</a></Link></div>
      </Menu.Item>
    </Menu.Items>
    </Transition>
</Menu>
 )
}

export default MobileBurger;