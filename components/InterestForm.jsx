import { useState } from "react";

const InterestForm = () => {

  const [formData, setFormData] = useState({fname: '', lname: '', email: '', optional: ''})
  const handleSubmit =  async (e) => {
    e.preventDefault();
    // const response = await fetch('/api/forminfo',{
    //   method: 'POST',
    //   body:  JSON.stringify({ 
    //     fname: formData.fname,
    //     lname: formData.lname,
    //     email: formData.email,
    //     optional: formData.optional,  
    //   }),
    //   headers: {
    //     'Content-Type': 'application/json'
    //   }
    // })
    alert(formData.fname);
  }
  const handleChange = (e) => {
    const value = e.target.value;
    setFormData({
      ...formData,
      [e.target.name]: value,
    })
  }
  return(
    <form className="flex flex-col text-black text-2xl w-screen justify-self-center items-center justify-items-center gap-16 my-20 px-96" onSubmit={handleSubmit}>
      <div className="flex flex-row gap-12 place-content-center w-full">
        <input className="font-extra py-5 px-4 rounded-sm placeholder:font-light w-1/2" type="text" name="fname" value={formData.fname} onChange={handleChange} placeholder="ชื่อจริง *" required/>
        <input className="font-extra py-5 px-4 rounded-sm placeholder:font-light w-1/2" type="text" name="lname" value={formData.lname} onChange={handleChange} placeholder="นามสกุล *" required/>
      </div>
      <input className="font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="อีเมลล์ *" required/>
      <textarea className="font-extra w-full py-5 px-4 rounded-sm placeholder:font-light" type="text" name="optional" value={formData.optional} onChange={handleChange} placeholder="คำแนะนำเพิ่มเติม *" required/>
      <input type="submit"value="ยืนยันการลงทะเบียน" className="text-white text-xl font-light bg-[#1B1B1B] py-4 px-24 border-2 border-[#C7C7C7]"/>
  </form>
  )
}

export default InterestForm;