import Link from "next/link";
import { useRouter } from "next/router";
import Logo from "./icon/Logo";

const NavBar = ({page}) => {
  let Nav, button, extra, about, icon, interest, home;
  if(typeof window != "undefined") {
    Nav = document.getElementById('navbar');
    home = document.getElementById('home');
    extra = document.getElementById('extra');
    about = document.getElementById('about');
    icon = document.getElementById('icon');
    interest = document.getElementById('interest');
    window.addEventListener("scroll", () => {
  
    if(window.scrollY > 100) {
      Nav.classList.remove('bg-[#181818]');
      home.classList.remove(page === 1 ? 'text-[#0080FF]' : 'text-white');
      extra.classList.remove(page === 2 ? 'text-[#0080FF]' : 'text-white');
      about.classList.remove(page === 3 ? 'text-[#0080FF]' : 'text-white');
      icon.classList.remove('fill-white');
      interest.classList.remove('border-white');
      interest.classList.remove('text-white');

      Nav.classList.add('bg-[#FFFFFF]');
      home.classList.add(page === 1 ? 'text-[#0080FF]' : 'text-black');
      extra.classList.add(page === 2 ? 'text-[#0080FF]' : 'text-black');
      about.classList.add(page === 3 ? 'text-[#0080FF]' : 'text-black');
      icon.classList.add('fill-black');
      interest.classList.add('border-black');
      interest.classList.add('text-black');
    }
    else {
      Nav.classList.remove('bg-[#FFFFFF]');
      home.classList.remove(page === 1 ? 'text-[#0080FF]' : 'text-black')
      extra.classList.remove(page === 2 ? 'text-[#0080FF]' : 'text-black');
      about.classList.remove(page === 3 ? 'text-[#0080FF]' : 'text-black');
      icon.classList.remove('fill-black');
      interest.classList.remove('border-black');
      interest.classList.remove('text-black');
      
      Nav.classList.add('bg-[#181818]');
      home.classList.add(page === 1 ? 'text-[#0080FF]' : 'text-white');
      extra.classList.add(page === 2 ? 'text-[#0080FF]' : 'text-white');
      about.classList.add(page === 3 ? 'text-[#0080FF]' : 'text-white');
      icon.classList.add('fill-white');
      interest.classList.add('border-white');
      interest.classList.add('text-white');
    }
  })
  }

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
    <div id="navbar" className="bg-[#181818] flex flex-row font-normal text-xl place-content-center mx-64 px-12 rounded-b-sm round items-center	py-8 transition-all duration-500 ease-in-out ">
      <Logo/>
      <div id="home" className={`ml-16 ${page === 1 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/"><a>Home</a></Link></div>
      <div id="extra" className={`ml-16 ${page === 2 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/extraclass" ><a>Extra class</a></Link></div>
      <div id="about" className={`ml-16 ${page === 3 ? 'text-[#0080FF]' : 'text-white'}`}><Link href="/aboutme"><a>About us</a></Link></div>
      <button id="interest" onClick={btclick} className="ml-auto border-2 border-white text-white p-3"><a href="#regisForm">ลงทะเบียนให้ความสนใจ</a></button>
    </div>
  )
};

export default NavBar;