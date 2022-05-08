import Intensive from "../components/Intensive";
import NavBar from "../components/NavBar";
import TutorFind from "../components/TutorFind";

const Extraclass = () => {

  return(
    <div className="bg-[#181818] relative font-Kanit w-screen">
      <div className="sticky top-0 z-50">
        <NavBar page={2}/>
      </div>
      <div className="flex flex-col">
        <Intensive/>
        <TutorFind/>
      </div>
     </div>
  )
}

export default Extraclass;