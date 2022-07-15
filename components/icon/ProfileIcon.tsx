/* eslint-disable @next/next/no-img-element */
import { Popover, Transition  } from "@headlessui/react";
import { UsersIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const ProfileIcon = () => {
  const { data: Session } = useSession()
  const router = useRouter()
  signOut
  return(
    <Popover>
      <Popover.Button className="relative">{() => {return Session ?  
        <img height="40" width="40" className="rounded-full" alt={`userprofile_${Session.user?.name}`} src={`${Session.user?.image}`}/>
        : <UsersIcon className="h-8 w-8 rounded-full"/> }}</Popover.Button>
      <Transition 
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >

        <Popover.Panel as="div" className="flex flex-col absolute bg-[#282828] w-32 right-4 z-10"> 
          <button className="text-white w-full bg-red-500" onClick={() => {Session ? signOut() : signIn()}}>{Session ? "sign out" : "sign in"}</button>
          <div>{Session?.user?.name}</div>
          
          <button className={`text-white ${Session ? "" : "invisible"} w-full`} onClick={() => {router.push('/profile')}}>แก้ไขข้อมูล</button>
          <div>2</div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}

export default ProfileIcon;

