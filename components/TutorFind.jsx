import { useState } from "react";
import Swal from 'sweetalert2';


const TutorFind = () => {
  const [formData, setFormData] = useState({fname: '', lname: '', subjects: '', gender: '', level: '', email: '', phone: '', purpose: '', time: '', date: '', way: '', price: '', detail: ''})
  const handleSubmit =  async (e) => {
    e.preventDefault();
    const response = await fetch('/api/findtutor',{
      method: 'POST',
      body:  JSON.stringify({ 
        fname: formData.fname,
        lname: formData.lname,
        subjects: formData.subjects,
        gender: formData.gender,
        level: formData.level,
        email: formData.email,
        phone: formData.phone,
        purpose: formData.purpose,
        time: formData.time,
        date: formData.date,
        way: formData.way,
        price: formData.price,
        detail: formData.detail,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    Swal.fire(
      'เราได้รับข้อมูลของท่านแล้ว',
      'หากเราดำเนินการค้นหาติวเตอร์เสร็จสิ้น\nเราจะติดต่อกลับทางอีเมล หรือ เบอร์โทรศัพท์ของท่าน',
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
    <div >
      <div className="text-4xl text-white font-normal text-center mobile:px-5 mobile:text-5xl mb-12">ค้นหาติวเตอร์</div>
      <form className="flex flex-col mx-32 medium-tablet:mx-2 bg-[#181818] mobile:hidden items-center mb-8" onSubmit={handleSubmit}>
        <div className="flex flex-col bg-white">
          <div className="flex flex-col px-12 ">
            <div className="flex flex-row w-full gap-5  p-12 pb-8">
              <div className="flex flex-col w-1/2">
                <div> ชื่อจริง *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="ชื่อจริง" required/>
              </div>
              <div className="flex flex-col w-1/2">
                <div> นามสกุล *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="นามสกุล" required/>
              </div>
              <div className="flex flex-col w-1/5">
                <div> เพศ *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="เพศ" required/>
              </div>
              <div className="flex flex-col w-1/2">
                <div> วิชาที่ต้องการเรียน *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="วิชาชีวิต" required/>
              </div>
            </div>
            <div className="flex flex-row w-full gap-5 px-12 pb-8 border-b-2 border-[#C4C4C4]">
              <div className="flex flex-col w-2/12">
                <div> ระดับชั้น *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="level" value={formData.level} onChange={handleChange} placeholder="มหาลัย ปี2" required/>
              </div>
              <div className="flex flex-col w-4/12">
                <div> เบอร์โทร *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+66" required/>
              </div>
              <div className="flex flex-col w-6/12">
                <div> อีเมล *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email@mail.com" required/>
              </div>
            </div>
          </div>
          <div className="flex flex-col px-12 ">
            <div className="flex flex-row w-full gap-5 px-12 py-8">
              <div className="flex flex-col w-1/2">
                <div> จุดประสงค์ในการเรียน *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="ติวสอบเข้ามหาลัย" required/>
              </div>
              <div className="flex flex-col w-2/12">
                <div className="truncate"> เวลาที่ต้องการเรียน *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="time" value={formData.time} onChange={handleChange} placeholder="09.00-10.00" required/>
              </div>
              <div className="flex flex-col w-2/12">
                <div className="truncate"> วันที่ต้องการเรียน *</div>
                <select className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" onChange={handleChange} name="date" value={formData.date} require>
                  <option value="Sunday">วันอาทิตย์</option>
                  <option value="Monday">วันจันทร์</option>
                  <option value="Tuesday">วันอังคาร</option>
                  <option value="Wednesday">วันพุทธ</option>
                  <option value="Thursday">วันพฤหัส</option>
                  <option value="Friday">วันศุกร์</option>
                  <option value="Saturday">วันเสาร์</option>
                </select>
              </div>
              <div className="flex flex-col w-2/12">
                <div className="truncate"> ช่องทางการเรียน *</div>
                <select className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" onChange={handleChange} name="way" value={formData.way} require>
                  <option value="online">เรียนออนไลน์</option>
                  <option value="onsite">เรียนสด</option>
                </select>
              </div>
            </div>
            <div className="flex flex-row mobile:hidden  w-full gap-5 px-12 pb-8">
            <div className="flex flex-col w-1/6">
              <div className="truncate"> ราคาที่อยากได้ *</div>
              <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="price" value={formData.price} onChange={handleChange} placeholder="250 บาท ต่อชม" required/>
            </div>
            <div className="flex flex-col w-5/6">
              <div className="truncate"> ความต้องการอื่นๆ(ถ้ามี)</div>
              <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="detail" value={formData.detail} onChange={handleChange} placeholder="อยากได้พี่เป็นผู้หญิง คณะอักษร จุฬา"/>
            </div>
            
          </div>
          </div>
        </div>
        <input type="submit"value="ค้นหาติวเตอร์" className="text-white text-xl font-light bg-[#1B1B1B] hover:bg-[#0080FF] py-4 px-24 mt-12 border-2 border-[#C7C7C7]"/>
      </form>
      <form className="flex flex-col bg-[#181818] big-device:hidden medium-tablet:hidden items-center " onSubmit={handleSubmit}>
        <div className="flex flex-col bg-white mx-2">
          <div className="flex flex-col ">
            <div className="flex flex-col w-full gap-5 p-12  pb-8 border-b-2 border-[#C4C4C4]">
              <div className="flex flex-col">
                <div className="text-sm"> ชื่อจริง *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="ชื่อจริง" required/>
              </div>
              <div className="flex flex-col">
                <div className="text-sm"> นามสกุล *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="นามสกุล" required/>
              </div>
              <div className="flex flex-row gap-12">
                <div className="flex flex-col w-2/5">
                  <div className="text-sm"> เพศ *</div>
                  <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="gender" value={formData.gender} onChange={handleChange} placeholder="เพศ" required/>
                </div>
                <div className="flex flex-col w-3/5">
                  <div className="text-sm"> ระดับชั้น *</div>
                  <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="level" value={formData.level} onChange={handleChange} placeholder="มหาลัย ปี2" required/>
                </div>
              </div>
              <div className="flex flex-col ">
                <div className="text-sm"> วิชาที่ต้องการเรียน *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="subjects" value={formData.subjects} onChange={handleChange} placeholder="วิชาชีวิต" required/>
              </div>
              
              <div className="flex flex-col ">
                <div className="text-sm"> เบอร์โทร *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="+66" required/>
              </div>
              <div className="flex flex-col ">
                <div className="text-sm"> อีเมล *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="email" value={formData.email} onChange={handleChange} placeholder="email@mail.com" required/>
              </div>
            </div>
            <div className="flex flex-col">
            <div className="flex flex-col w-full gap-5 px-12 py-8">
              <div className="flex flex-col ">
                <div className="text-sm"> จุดประสงค์ในการเรียน *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="purpose" value={formData.purpose} onChange={handleChange} placeholder="ติวสอบเข้ามหาลัย" required/>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col w-3/5">
                  <div className="text-sm"> เวลาที่ต้องการเรียน *</div>
                  <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="time" value={formData.time} onChange={handleChange} placeholder="09.00-10.00" required/>
                </div>
                <div className="flex flex-col w-2/5">
                  <div className="text-sm"> วันที่ต้องการเรียน *</div>
                  <select className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" onChange={handleChange} name="date" value={formData.date} require>
                    <option value="Sunday">วันอาทิตย์</option>
                    <option value="Monday">วันจันทร์</option>
                    <option value="Tuesday">วันอังคาร</option>
                    <option value="Wednesday">วันพุทธ</option>
                    <option value="Thursday">วันพฤหัส</option>
                    <option value="Friday">วันศุกร์</option>
                    <option value="Saturday">วันเสาร์</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-row gap-5">
                <div className="flex flex-col w-2/5">
                  <div className="text-sm"> ช่องทางการเรียน *</div>
                  <select className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" onChange={handleChange} name="way" value={formData.way} require>
                    <option value="online">เรียนออนไลน์</option>
                    <option value="onsite">เรียนสด</option>
                  </select>
                </div>
                <div className="flex flex-col w-3/5">
                <div className="text-sm"> ราคาที่อยากได้ *</div>
                <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="price" value={formData.price} onChange={handleChange} placeholder="250 บาท ต่อชม" required/>
            </div>
              </div>
            <div className="flex flex-col ">
              <div className="text-sm"> ความต้องการอื่นๆ(ถ้ามี)</div>
              <input className="border-2 border-[#C7C7C7] font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="detail" value={formData.detail} onChange={handleChange} placeholder="อยากได้พี่เป็นผู้หญิง คณะอักษร จุฬา"/>
            </div>
            </div>
          </div>
          </div>
        </div>
        <input type="submit" value="ค้นหาติวเตอร์" className="  text-white text-xl font-light bg-[#1B1B1B] hover:bg-[#0080FF] py-4 px-24 mt-4 border-2 border-[#C7C7C7]"/>
      </form>
    </div>
    
  )
};

export default TutorFind;