
import { useSession, signIn, signOut } from "next-auth/react"
import { ChatIcon, InboxIcon } from '@heroicons/react/solid'
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./icon/Logo";
import MobileBurger from "./MobileBurger";
import ProfileIcon from "./icon/ProfileIcon";

const NavBar = () => {
  const { data: Session } = useSession()
  const route = useRouter();
  const pathName = route.pathname;
  
  const btclick = () => {
      route.push(`/login`)
  
}

  return (
    <>
      <div className="bg-[#242424] flex flex-row text-xl justify-around medium-tablet:hidden mobile:hidden drop-shadow-md big-device:px-64 font-light px-12 rounded-b-sm round mobile:w-full items-center py-4 transition-all duration-500 ease-in-out ">
        <Logo/>
        <div className="flex flex-row place-items-center">
          <div className={`ml-16 ${pathName === '/' ? 'text-[#0080FF]' : 'text-white hover:text-[#0080FF]'}`}><Link href="/"><a>Home</a></Link></div>
          <div className={`ml-16 ${pathName === '/hiring' ? 'text-[#0080FF]' : 'text-white hover:text-[#0080FF]'}`}><Link href="/hiring"><a>Hiring</a></Link></div>
          <div className={`ml-16 ${pathName === '/findjob' ? 'text-[#0080FF]' : 'text-white hover:text-[#0080FF]'}`}><Link href="/findjob"><a>Findjob</a></Link></div>
          <div className={`ml-16 ${pathName === '/faq' ? 'text-[#0080FF]' : 'text-white hover:text-[#0080FF]'}`}><Link href="/faq"><a>Faq</a></Link></div>
        </div>
        <div className="flex flex-row items-center gap-4">
          <button>
            <ChatIcon className="h-12 w-12 text-white"/>
          </button>
           <button>
            <InboxIcon className="h-12 w-12 text-white"/>
           </button>
           <button className="text-white " onClick={() => {Session ? signOut() : signIn()}}>{Session ? "sign out" : "sign in"}</button>
          <Link href="/profile" passHref={true}>
            <button className={`text-white ${Session ? "" : "invisible"}`}>แก้ไขข้อมูล</button>
          </Link>
           <ProfileIcon/>
        </div>
      </div>
      <div className="bg-[#242424] relative flex font-normal text-xl w-screen drop-shadow-md  big-device:hidden  px-2 medium-tablet:px-8 rounded-b-sm round items-center    py-8 transition-all duration-500 ease-in-out ">
        <MobileBurger/>
        <Logo/>
        <button id="interest" onClick={btclick} className=" text-sm medium-tablet:text-lg w-1/3 border-2 border-white text-white p-2  mobile:py-1"><a href="#regisForm">Login</a></button>
      </div>
    </>
    
  )
};

export default NavBar;