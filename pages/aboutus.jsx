import Member from "../components/Member";
import NavBar from "../components/NavBar";
import Head from "next/head";

const Aboutus = () => {
  return(
    <div className="bg-[#181818] relative font-Kanit">
      <Head>
        <title>Extral Class | Inmymind</title>
      </Head>
      <div className="sticky top-0 z-50">
        <NavBar page={3}/>
      </div>
      <div className="flex flex-col items-center py-32 mobile:py-16 medium-tablet:py-16 border-b">
        <p className="text-[#0080FF] font-light text-xl">Inmymind</p>
        <p className="text-white text-2xl font-normal text-center">“You Never Go Bankrupt On Knowledge”</p>
        <p className="text-white font-light text-xl">คุณไม่มีวันล้มละลายบนความรู้</p>
      </div>
      <div className="flex flex-col py-12 mobile:px-8 medium-tablet:px-8 px-64 gap-5">
        <p className="text-white text-xl text-left w-full font-normal mobile:text-center medium-tablet:text-center">เกี่ยวกับเรา</p>
        <div className="flex flex-col text-white font-light px-16 mobile:px-0 mobile:text-center ">
          <p >{'"Inmymind" อินมายมายด์เว็บไซต์ที่จัดทำขึ้นมาพื่อเผยแพร่กระจายสื่อการศึกษาและโอกาสทางการศึกษาให้เข้าถึงแก่ นักเรียน นักศึกษาหรือ ผู้ที่ต้องการศึกษาหาความรู้ รวมถึงเรายังมีบริการที่จะช่วยคุณค้นหาติวเตอร์หรือกวดวิชาที่ตรงกับความต้องการคุณเมื่อคุณต้องการที่จะเรียนรู้เพิ่มเติมต่อยอดจากพื้นฐานที่คุณมี โดยที่เราได้ทำการแบ่งฟังก์ชั่นการใช้งานดังกล่าวออกมาเป็น 3 ส่วนหลักๆ ได้แก่'}</p>
        </div>
        <div className="flex flex-col text-white font-light pl-24 mobile:pl-0 mobile:gap-2  medium-tablet:pl-0 medium-tablet:gap-2">
          <div className="flex flex-row mobile:flex-col mobile:place-items-center medium-tablet:flex-col medium-tablet:place-items-center mobile:gap-1 medium-tablet:gap-1">
            <div className="flex flex-row ">
              <p className="text-[#0080FF]">self learning</p>
              <p>(เรียนรู้ด้วยตนเอง)</p>
            </div>
            <p>ส่วนที่จะเผยแพร่เนื้อหาสำหรับการศึกษาให้ทุกคนอย่างเสรี</p>
          </div>
          <div className="flex flex-row mobile:flex-col mobile:place-items-center medium-tablet:flex-col medium-tablet:place-items-center mobile:gap-1 medium-tablet:gap-1">
            <div className="flex flex-row">
              <p className="text-[#0080FF]">opportunity</p>
              <p>(โอกาสทางการศึกษา)</p>
            </div>
            <p>ส่วนที่จะเผยแพรโอกาสและข่าวสารที่เกี่ยวเนื่องกับการศึกษาให้ทุกคนอย่างเสรี</p>
          </div>
          <div className="flex flex-row mobile:flex-col mobile:place-items-center medium-tablet:flex-col medium-tablet:place-items-center mobile:gap-1 medium-tablet:gap-1">
            <div className="flex flex-row">
              <p className="text-[#0080FF]">extra class</p>
              <p>(คลาสเรียนพิเศษ)</p>
            </div>
            <p>ส่วนที่จะช่วยหาคลาสเรียนพิเศษของคุณตามที่คุณต้องการ</p>
          </div>
        </div>
        <div className="flex flex-col text-white font-light px-16 mobile:px-0 ">
          <p className="mobile:text-center">ทั้ง 3 ส่วนนี้ถูกแบ่งการใช้งานอย่างชัดเจนและครบจบภายในตัวเอง ซึ่งในอนาคตเราหวังว่าเราจะสามารถพัฒนาต่อยอดส่วนอื่นๆเพิ่มเติมรวมถึงการก้าวเข้าไปสู่การเป็น พื้นที่การเรียนรู้ในฝันสำหรับทุกคน</p>
        </div>
      </div>
      <div className="flex flex-col py-12 mobile:px-8 px-64 gap-5 medium-tablet:px-8">
        <p className="text-white text-xl text-left w-full font-normal mobile:text-center medium-tablet:text-center">ติดต่อเรา</p>
        <div className="flex flex-row mobile:flex-col w-full gap-5">
          <div className="flex flex-col text-white font-light pl-24 pr-32 mobile:p-2 w-1/2 mobile:w-full medium-tablet:w-full medium-tablet:p-2">
            <p className="border-b border-white">เบอร์โทรติดต่อ</p>
            <p className="indent-4">{'085-329-2092 (เล้ง)'}</p>
            <p className="indent-4">{'092-639-8220 (ปั้น)'}</p>
          </div>
          <div className="flex flex-col text-white w-1/2 font-light mobile:p-2 mobile:w-full medium-tablet:p-2 medium-tablet:w-full">
            <p className="border-b border-white">อีเมล</p>
            <p className="indent-4">inmymind.edu@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col py-12 mobile:px-8 px-64 gap-5 w-full">
        <p className="text-white text-xl text-left w-full font-normal mobile:text-center medium-tablet:text-center">ทีมงานของเรา</p>
        <div className="flex big-device:flex-row flex-col w-full gap-12 pl-16 mobile:pl-0 mobile:place-items-center medium-tablet:pl-0 medium-tablet:place-items-center">
          <Member img="/member/Leng.png" position="CEO" name="ยศกร ธรรมชื่นฤทัย" nickname="(เล้ง)"/>
          <Member img="/member/Pan.png" position="CFO" name="อานนท์ วัชระมานนท์" nickname="(ข้าวปั้น)"/>
          <Member img="/member/Nut.png" position="CIO" name="ปัณณพัทธ์ สิทธิโอภาสนันท์" nickname="(นัท)"/>
          <Member img="/member/Punn.png" position="CTO" name="ปุณณวัช นามวงษา" nickname="(ปุณณ์)"/>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;