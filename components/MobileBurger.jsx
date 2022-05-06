import { Menu, Transition } from "@headlessui/react";
import { Fragment, useEffect, useRef, useState } from 'react'
import Hamburger from "./icon/Hamburger";
import Link from "next/link";


const MobileBurger = ({page}) => {
 return (
  <Menu as="button" className="relative">
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
    <Menu.Items className="absolute">
      <Menu.Item>
        <div id="home" className={`ml-16 ${page === 1 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/"><a>Home</a></Link></div>
      </Menu.Item>
      <Menu.Item>
        <div id="extra" className={`ml-16 ${page === 2 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/extraclass" ><a>Extra class</a></Link></div>
      </Menu.Item>
      <Menu.Item>
        <div id="about" className={`ml-16 ${page === 3 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/aboutme"><a>About us</a></Link></div>
      </Menu.Item>
    </Menu.Items>
    </Transition>
</Menu>
 )
}

export default MobileBurger;