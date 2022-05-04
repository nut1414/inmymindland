
import Logo from "./icon/logo.jsx";

const NavBar = () => {
  let Nav, button, extra, about, icon, interest;

  if(typeof document != "undefined" ) {
    Nav = document.getElementById('navbar');
    button = document.getElementById('btn');
    extra = document.getElementById('extra');
    about = document.getElementById('about');
    icon = document.getElementById('icon');
    interest = document.getElementById('interest');
  }
  if(typeof window != "undefined") {
    window.addEventListener("scroll", () => {
    if(window.scrollY > 100) {
      Nav.classList.remove('bg-[#181818]');
      about.classList.remove('text-white');
      extra.classList.remove('text-white');
      icon.classList.remove('fill-white');
      interest.classList.remove('border-white');
      interest.classList.remove('text-white');
      Nav.classList.add('bg-[#FFFFFF]');
      about.classList.add('text-black');
      extra.classList.add('text-black');
      icon.classList.add('fill-black');
      interest.classList.add('border-black');
      interest.classList.add('text-black');

    }
    else {
      Nav.classList.remove('bg-[#FFFFFF]');
      about.classList.remove('text-black');
      extra.classList.remove('text-black');
      icon.classList.remove('fill-black');
      interest.classList.remove('border-black');
      interest.classList.remove('text-black');
      Nav.classList.add('bg-[#181818]');
      about.classList.add('text-white');
      extra.classList.add('text-white');
      icon.classList.add('fill-white');
      interest.classList.add('border-white');
      interest.classList.add('text-white');
    }
  })
  }

  const btclick = () => {
    if(typeof window != "undefined") {
      window.scrollTo(0, document.body.scrollHeight);
    }
  }
  
  
  return (
    <div id="navbar" className="bg-[#181818] flex flex-row font-normal text-xl place-content-center px-72 items-center	py-8 transition-all duration-500 ease-in-out ">
      <Logo/>
      <div className="ml-16 text-[#0080FF]">Home</div>
      <div id="extra" className="ml-16 text-white txtchange">Extra class</div>
      <div id="about" className="ml-16 text-white txtchange">About us</div>
      <button id="interest" onClick={btclick} className="ml-auto border-2 border-white text-white p-3">ลงทะเบียนให้ความสนใจ</button>


    </div>
  )
};

export default NavBar;
