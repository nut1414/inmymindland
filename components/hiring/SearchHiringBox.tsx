import { Menu, Transition } from "@headlessui/react";
import { RefreshIcon, SearchIcon } from "@heroicons/react/solid";
import { Dispatch, SetStateAction, useState } from "react";
import FilterBox from "./FilterBox";
import SpecialFilterBox from "./SpecialFilterBox";

type SearchHiringBoxData = {
 search: () => void,
 searchTextState: Dispatch<SetStateAction<string>>,
 workState: Dispatch<SetStateAction<string>>,
 schoolState: Dispatch<SetStateAction<string>>,
 sortByState: Dispatch<SetStateAction<string>>
}

const Category = {
  "วิชาการ": ["โจทย์ ข้อสอบ", "รายงาน Essay", "แปลภาษา", "ใบงานต่างๆ", "งานวิชามหาลัย"],
  "ออกแบบ": ["อินโฟกราฟิก", "สไลด์พรีเซนต์", "มายแมพปิ้ง", "ตัดต่อ", "เขียนโปรแกรม"]
}

const SearchHiringBox = ({search, searchTextState, workState, schoolState, sortByState}: SearchHiringBoxData ) => {
  const [boxSchool, setBoxSchool] = useState("สถาณศึกษา")
  const [boxSort, setBoxSort] = useState("เรียงโดย")
  const [boxCategory, setboxCategory] = useState("ประเภทของงาน")
  const refreshHandle = () => {
    console.log("click")
    setBoxSchool("ระดับการศึกษา")
    setBoxSort("เรียงโดย")
    setboxCategory("ประเภทของงาน")
  }
  return (
    <form className="flex flex-col w-full place-items-center" onSubmit={(e) => {e.preventDefault(); search();}}>
        <div className="flex flex-row w-1/2 rounded-full bg-white py-2 place-items-center gap-4 px-2">
          <SearchIcon className="w-5 h-5"/>
          <input className="w-full focus:border-0  outline-none placeholder:text-[#D9D9D9] placeholder:text-sm placeholder:font-light " placeholder="ค้นหางานที่คุณต้องการ" onChange={(e) => {searchTextState(e.target.value)}}/>
        </div>
        <div className="flex flex-row gap-2  z-50 place-items-center ">
          <div className="px-2 py-1">ตัวกรอง: </div>
          <SpecialFilterBox boxname={setboxCategory} boxVal={boxCategory} option={Category} state={workState} width="w-36"/>
          <FilterBox boxname={setBoxSchool} boxVal={boxSchool} option={["โรงเรียน", "มหาลัย"]} state={schoolState} width="w-[7rem]"/>
          <FilterBox boxname={setBoxSort} width="w-24" boxVal={boxSort} option={["ราคา: จากต่ำสุดไปสูงสุด", "ราคา: จากสูงสุดไปต่ำสุด", "รีวิว: คะแนนสูงสุดไปต่ำสุด", "ยอดนิยม: จำนวนงานที่ทำสำเร็จ"]} state={sortByState}/>
          <RefreshIcon className="w-5 h-5" onClick={() => refreshHandle()}/>
        </div>
    </form>
  )
}

export default SearchHiringBox;