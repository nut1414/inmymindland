import Image from "next/image";
import Link from "next/link";
import Feature from "../components/Feature";
import InterestForm from "../components/InterestForm";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[#181818] relative font-Kanit">
      <div className="sticky top-0 z-50">
        <NavBar />
      </div>
      <div className="item-center flex flex-col text-center text-white mt-32">
        <div className="text-8xl font-normal">In My Mind</div>
        <div className="text-2xl font-light my-8">
          <p>แพลตฟอร์มเพื่อศึกษาสำหรับหาความรู้</p>
          <p>และแลกเปลี่ยนความรู้</p>
        </div>
        <div className="text-2xl font-light mt-8">
          <p>ติดตามเนื้อหาความรู้ได้ที่</p>
          <div className="flex flex-row justify-center my-8 gap-8">
            <button className="w-48 h-max bg-gradient-to-t p-4 font-light from-[#0078FF] to-[#00C6FF]">
              <Link href="https://www.facebook.com/">
                <a target="_blank">facebook</a>
              </Link>
            </button>
            <button className="w-48 h-max bg-gradient-to-r p-4 font-light from-[#feda75]  via-[#d62976] to-[#4f5bd5]">
              <Link href="https://www.instagram.com/">
                <a target="_blank">instragram</a>
              </Link>
            </button>
          </div>
        </div>
        <div className="width-max z-0 relative mt-8">
          <div className="absolute -bottom-36 h-96 bg-gradient-to-t from-[#0F0F0F] via-[#111111] to-[#181818] w-full"></div>
          <Image
            src="/mac.png"
            width={1100}
            height={671}
            layout="intrinsic"
            alt="mac"
          />
        </div>
        <div className="item-center flex flex-col text-center text-white mt-72">
          <div className="text-6xl font-normal text-center">ฟีเจอร์</div>
          <div className="flex flex-row justify-center items-start my-24 gap-64">
            <Feature image={"/features/feat1.png"} title={"พื้นที่สำหรับหาความรู้ด้วยตนเอง"} detail={['คุณสามารถเข้ามาศึกษาเนื้อหาความรู้', 'ที่ถูกรวบรวมไว้ภายในเว็ปไซต์ได้', 'รวมถึงสามารถแลกเปลี่ยนความรู้และ', 'พูดคุยกับคนที่มีความสนใจเหมือนกันได้']}/>
            <Feature image={"/features/feat2.png"} title={"ข่าวสารโอกาสทางการศึกษา"} detail={['คุณสามารถเข้ามาค้นหาโอกาส', 'ทางการศึกษาต่างๆ ที่เราได้ทำการ', 'รวบรวมเอาไว้ได้']}/>
            <Feature image={"/features/feat3.png"} title={"ตามหาที่เรียนพิเศษ"} detail={['คุณสามารถเข้ามาค้นหาที่เรียนพิเศษ', 'ที่เหมาะสมกับความต้องการของคุฯได้']}/>
          </div>
        </div>
        <div className="item-center flex flex-col text-center text-white mt-72">
          <div className="text-6xl font-normal text-center mb-8">ลงทะเบียนล่วงหน้าตอนนี้ !</div>
          <div className="flex flex-col text-2xl font-light">
            <p>เพื่อรับข้อมูลข่าวสารก่อนใครและเพื่อแสดงถึงความสนใจในแพลตฟอร์มของเรา</p>
            <p>โดยข้อมูลต่างๆของคุณจะไม่ถูกนำไปเผยแพร่สู่สาธารณะโดยเด็ดขาด</p>
            <p>ขอบคุณสำหรับความสนใจในแพลตฟอร์มของเรา!</p>
          </div>
        </div>
          <InterestForm/>
        
      </div>
    </div>
  );
}
