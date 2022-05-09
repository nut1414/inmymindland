import NavBar from "../components/NavBar";

const Aboutus = () => {
  return(
    <div className="bg-[#181818] relative font-Kanit">
      <div className="sticky top-0 z-50">
        <NavBar page={3}/>
      </div>
      <div className="flex flex-col items-center py-32 mobile:py-16 border-b-2">
        <p className="text-[#0080FF] font-light text-xl">Inmymind</p>
        <p className="text-white text-2xl font-normal text-center">“You Never Go Bankrupt On Knowledge”</p>
        <p className="text-white font-light text-xl">คุณไม่มีวันล้มละลายบนความรู้</p>
      </div>
      <div className="flex flex-col py-12 mobile:px-8 border-b-2 px-64 gap-5">
        <p className="text-white text-xl text-left w-full font-normal mobile:text-center">เกี่ยวกับเรา</p>
        <div className="flex flex-col text-white font-light pl-16 mobile:pl-0 ">
          <p >{'"Inmymind" อินมายมายด์เว็บไซต์ที่จัดทำขึ้นมาพื่อเผยแพร่กระจายสื่อการศึกษาและโอกาสทางการศึกษาให้เข้าถึงแก่ นักเรียน นักศึกษาหรือ ผู้ที่ต้องการศึกษาหาความรู้ รวมถึงเรายังมีบริการที่จะช่วยคุณค้นหาติวเตอร์หรือกวดวิชาที่ตรงกับความต้องการคุณเมื่อคุณต้องการที่จะเรียนรู้เพิ่มเติมต่อยอดจากพื้นฐานที่คุณมี โดยที่เราได้ทำการแบ่งฟังก์ชั่นการใช้งานดังกล่าวออกมาเป็น 3 ส่วนหลักๆ ได้แก่'}</p>
        </div>
        <div className="flex flex-col text-white font-light pl-24 mobile:pl-0 mobile:gap-2 ">
          <div className="flex flex-row mobile:flex-col mobile:place-items-center">
            <div className="flex flex-row ">
              <p className="text-[#0080FF]">self learning</p>
              <p>(เรียนรู้ด้วยตนเอง)</p>
            </div>
            <p>ส่วนที่จะเผยแพร่เนื้อหาสำหรับการศึกษาให้ทุกคนอย่างเสรี</p>
          </div>
          <div className="flex flex-row mobile:flex-col mobile:place-items-center">
            <div className="flex flex-row">
              <p className="text-[#0080FF]">opportunity</p>
              <p>(โอกาสทางการศึกษา)</p>
            </div>
            <p>ส่วนที่จะเผยแพรโอกาสและข่าวสารที่เกี่ยวเนื่องกับการศึกษาให้ทุกคนอย่างเสรี</p>
          </div>
          <div className="flex flex-row mobile:flex-col mobile:place-items-center">
            <div className="flex flex-row">
              <p className="text-[#0080FF]">extra class</p>
              <p>(คลาสเรียนพิเศษ)</p>
            </div>
            <p>ส่วนที่จะช่วยหาคลาสเรียนพิเศษของคุณตามที่คุณต้องการ</p>
          </div>
        </div>
        <div className="flex flex-col text-white font-light pl-16 mobile:pl-0">
          <p className="text-center">ทั้ง 3 ส่วนนี้ถูกแบ่งการใช้งานอย่างชัดเจนและครบจบภายในตัวเอง ซึ่งในอนาคตเราหวังว่าเราจะสามารถพัฒนาต่อยอดส่วนอื่นๆเพิ่มเติมรวมถึงการก้าวเข้าไปสู่การเป็น พื้นที่การเรียนรู้ในฝันสำหรับทุกคน</p>
        </div>
      </div>
    </div>
  )
}

export default Aboutus;