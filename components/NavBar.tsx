
import { useSession, signIn, signOut } from "next-auth/react"
import { ChatIcon, InboxIcon } from '@heroicons/react/solid'
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./icon/Logo";
import MobileBurger from "./MobileBurger";
import ProfileIcon from "./icon/ProfileIcon";

type navbarProp = {
  bgColor?: string
}

const NavBar = ({bgColor}: navbarProp) => {
  const { data: Session } = useSession()
  const route = useRouter();
  const pathName = route.pathname;
  
  const btclick = () => {
      route.push(`/login`)
  
}

  return (
    <>
      <div className={`${ bgColor || "bg-white"} flex flex-row text-xl  medium-tablet:hidden mobile:hidden  big-device:px-64 font-light px-12 rounded-b-sm round mobile:w-full items-center py-4 transition-all duration-500 ease-in-out `}>
        <Logo className="mr-auto"/>
        <div className="flex flex-row place-content-center place-items-center gap-8 text-sm w-full">
          <div className="flex flex-row gap-8 place-items-center">
            <div className="flex flex-col place-items-center">
              <div className={`ml-1 text-black`}><Link href="/"><a>Home</a></Link></div>
              <div className={`${pathName === '/' ? 'border-b-2 border-black' : ''} w-1/2`}></div>
            </div>  
            <div className=" text-xl font-bold fill-black">•</div>
          </div>
          <div className="flex flex-row gap-8 place-items-center">
           <div className="flex flex-col place-items-center">
             <div className={`  text-black`}><Link href="/hiring"><a>Hiring</a></Link></div>
             <div className={`${pathName === '/hiring' ? 'border-b-2 border-black' : ''} w-1/2`}></div>
           </div>
           <div className=" text-xl font-bold fill-black">•</div>
          </div>
          <div className="flex flex-row gap-8 place-items-center">
            <div className="flex flex-col place-items-center">
              <div className={`  text-black`}><Link href="/findjob"><a>Findjob</a></Link></div>
              <div className={`${pathName === '/findjob' ? 'border-b-2 border-black' : ''} w-1/2`}></div>
            </div>
            <div className=" text-xl font-bold fill-black">•</div>
          </div>
          <div className="flex flex-row gap-8 place-items-center">
            <div className="flex flex-col place-items-center">
              <div className={`  text-black`}><Link href="/faq"><a>Faq</a></Link></div>
              <div className={`${pathName === '/faq' ? 'border-b-2 border-black' : ''} w-1/2`}></div>
            </div>
          </div>
        </div>
        <div className="flex flex-row place-content-center ml-auto gap-4">
          <button>
            <ChatIcon className="h-8 w-8 text-black"/>
          </button>
           <button>
            <InboxIcon className="h-8 w-8 text-black"/>
           </button>
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