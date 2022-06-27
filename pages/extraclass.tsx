import Intensive from "../components/Intensive";
import NavBar from "../components/NavBar";
import TutorFind from "../components/TutorFind";
import Head from "next/head";

const Extraclass = () => {

  return(
    <div className="bg-[#181818] relative font-Kanit w-screen">
      <Head>
      <title>Extral Class | Inmymind</title>
      </Head>
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="flex flex-col">
        <Intensive/>
        <TutorFind/>
      </div>
     </div>
  )
}

export default Extraclass;