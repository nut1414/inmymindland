import { useState } from "react";
import Swal from 'sweetalert2';

const InterestForm = () => {
  const [formData, setFormData] = useState({fname: '', lname: '', email: '', detail: ''})
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const response = await fetch('/api/addfollower',{
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
      'ขอบคุณสำหรับความสนใจของท่าน\nหามีการอัพเดตข่าวสารเราจะแจ้งท่านผ่านทางอีเมลก่อนใคร !',
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
    <form className="flex flex-col text-black text-2xl w-screen justify-self-center items-center justify-items-center gap-16 mt-20 mb-10 px-12 medium-tablet:px-48 big-device:px-64" onSubmit={handleSubmit}>
      <div className="flex big-device:flex-row flex-col  gap-12 place-content-center w-full">
        <input className="font-extra py-5 px-4 rounded-sm placeholder:font-light big-device:w-1/2" type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="ชื่อจริง *" required/>
        <input className="font-extra py-5 px-4 rounded-sm placeholder:font-light big-device:w-1/2" type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="นามสกุล *" required/>
      </div>
      <input className="font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="อีเมล *" required/>
      <textarea className="font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="detail" value={formData.detail} onChange={handleChange} placeholder="คำแนะนำเพิ่มเติม *"/>
      <div className="border-2 border-[#C7C7C7] w-full bg-[#1B1B1B] big-device:w-2/5">
        <input type="submit"value="ยืนยันการลงทะเบียน" className="text-white text-xl w-full font-light hover:bg-[#0080FF] py-4 "/>
      </div>
      
  </form>
  )
}

export default InterestForm;