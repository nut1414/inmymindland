
import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./icon/Logo";
import MobileBurger from "./MobileBurger";

const NavBar = ({page}) => {

  const route = useRouter();
  const btclick = () => {
    if(typeof window != "undefined" && page === 1) {
      window.scrollTo(0, document.body.scrollHeight);
    }
  
    else {
      route.push(`/#regisForm`)
  }
}

  return (
    <>
      <div className="bg-[#181818] flex flex-row font-normal text-xl place-content-center mobile:hidden drop-shadow-md big-device:px-64 w-screen px-12 rounded-b-sm round items-center 	py-8 transition-all duration-500 ease-in-out ">
      <Logo/>
        <div className={`ml-16 ${page === 1 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/"><a>Home</a></Link></div>
        <div className={`ml-16 ${page === 2 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/extraclass" ><a>Extra class</a></Link></div>
        <div className={`ml-16 ${page === 3 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/aboutme"><a>About us</a></Link></div>
        <button onClick={btclick} className="ml-auto border-2 border-white text-white p-3"><a href="#regisForm">ลงทะเบียนให้ความสนใจ</a></button>
      </div>
      <div className="bg-[#181818] flex font-normal text-xl justify-between medium-tablet:hidden big-device:hidden big-device:mx-64 px-12 rounded-b-sm round items-center	py-8 transition-all duration-500 ease-in-out ">
        <MobileBurger page={page}/>
        <Logo/>
        <button id="interest" onClick={btclick} className=" border-2 border-white text-white p-3"><a href="#regisForm">ลงทะเบียนให้ความสนใจ</a></button>
      </div>
    </>
    
  )
};

export default NavBar;