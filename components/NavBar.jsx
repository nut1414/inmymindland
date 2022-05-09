
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
      <div className="bg-[#242424] flex flex-row text-xl place-content-center medium-tablet:hidden mobile:hidden drop-shadow-md big-device:px-64 font-light px-12 rounded-b-sm round mobile:w-full items-center py-4 transition-all duration-500 ease-in-out ">
      <Logo/>
        <div className={`ml-16 ${page === 1 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/"><a>Home</a></Link></div>
        <div className={`ml-16 ${page === 2 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/extraclass" ><a>Extra class</a></Link></div>
        <div className={`ml-16 ${page === 3 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/aboutus"><a>About us</a></Link></div>
        <button onClick={btclick} className="ml-auto border-2 border-white text-white p-3"><a href="#regisForm">ลงทะเบียนให้ความสนใจ</a></button>
      </div>
      <div className="bg-[#242424] relative flex font-normal text-xl justify-between drop-shadow-md  big-device:hidden  px-2 medium-tablet:px-8 rounded-b-sm round items-center	py-8 transition-all duration-500 ease-in-out ">
        <MobileBurger page={page}/>
        <Logo/>
        <button id="interest" onClick={btclick} className=" text-[0.6rem] medium-tablet:text-lg border-2 border-white text-white p-2  mobile:py-1"><a href="#regisForm">ลงทะเบียนให้ความสนใจ</a></button>
      </div>
    </>
    
  )
};

export default NavBar;