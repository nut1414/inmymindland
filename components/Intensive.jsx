import { useState } from "react";
import Swal from 'sweetalert2';

const Intensive = () => {
  const [formData, setFormData] = useState({fname: '', lname: '', email: '', detail: ''})
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const response = await fetch('/api/classregister',{
      method: 'POST',
      body:  JSON.stringify({ 
        fname: formData.fname,
        lname: formData.lname,
        email: formData.email,
        detail: formData.detail,  
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    Swal.fire(
      'เราได้รับข้อมูลของท่านแล้ว',
      'ขอบคุณสำหรับการลงทะเบียนเข้าร่วมกิจกรรม\n รายละเอียดเพิ่มเติมท่านจะได้รับผ่านทางอีเมล',
      'success'
    )
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }
  return(
    <div className="item-center flex mobile:flex-col medium-tablet:flex-col flex-row text-center place-items-center text-white mt-8 ">
      <div className="flex flex-col pb-16">
        <div className="text-6xl font-normal text-center mobile:px-5 mobile:text-5xl">ลงทะเบียน Intensive class</div>
        <form className="flex flex-col text-black text-2xl justify-self-center items-center mobile:px-2 justify-items-center gap-12 mt-10 mb-10 medium-tablet:px-32 big-device:px-48" onSubmit={handleSubmit}>
          <div className="flex big-device:flex-row flex-col  gap-12 place-content-center w-full">
            <input className="font-extra py-5  rounded-sm placeholder:font-light pl-5 big-device:w-3/5" type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="ชื่อจริง *" required/>
            <input className="font-extra py-5 rounded-sm placeholder:font-light pl-5 big-device:w-3/5" type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="นามสกุล *" required/>
          </div>
          <input className="font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="อีเมล *" required/>
          <textarea className="font-extra w-full py-5 h-72 px-4 rounded-sm placeholder:font-light" type="text" name="detail" value={formData.detail} onChange={handleChange} placeholder="ทำไมถึงอยากเข้าร่วมกิจกรรมนี้ *" required/>
          <input type="submit"value="ยืนยันการลงทะเบียน" className="text-white text-xl font-light bg-[#1B1B1B] hover:bg-[#0080FF] py-4 px-24 border-2 border-[#C7C7C7]"/>
        </form>
      </div>
      <div className="w-2/5 place-items-center mb-16 pr-8 mobile:pr-0 medium-tablet:pr-0">
        <svg viewBox="0 0 500 500" width="500" height="500" className="fill-[#C4C4C4] w-full items-center">
          <rect width="500" height="500"/>
        </svg>
      <p className="underline underline-offset-2 mt-4">รายละเอียดเพิ่มเติม</p>
      </div>
    </div>
  )
};

export default Intensive;