import Head from "next/head";
import { useRouter } from "next/router";
import Template from "../../components/common/Template";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { HydratedJobListing } from ".";
import { ChatIcon } from "@heroicons/react/solid";

const uid = () => {
  const route = useRouter()
  const { uid } = route.query
  const [data, setData] = useState({} as HydratedJobListing)
  const { data: session } = useSession()

  useEffect(() => {
    if(uid){
      let getData = fetch(`/api/joblists/${uid}` , {method: 'GET'}).then((res) => res.json()).then((res) => {
        setData(res.listing)
      })
    }
    
  },[uid])
  
  let i = 0;
  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template bgColor="bg-white" className="flex ">
        <div className="bg-white w-screen flex flex-col text-black place-items-center big-device:px-16 medium-tablet:px-4 mt-4 shadow-2xl">
          <div className="flex flex-row bg-[#F9F8F8] rounded-t-3xl w-full pt-16 big-device:px-64 medium-tablet:px-16">
            <div className="w-max h-max place-items-center">
              <div className="big-device:visible medium-tablet:hidden mobile:hidden">
                <Image src={data.image || '/temp.jpg'} layout="intrinsic" width='500' height='500' alt='Hiring' className=''/>
              </div>
              <div className="big-device:hidden medium-tablet:visible mobile:hidden">
                <Image src={data.image || '/temp.jpg'} layout="fixed" width='300' height='300' alt='Hiring' className=''/>
              </div>
            </div>
            <div className='flex flex-col ml-8 justify-self-end text-left gap-8 w-full'>
              <div className=" font-semibold text-2xl">
                {data.name}
              </div>
              <div className="word-break text-base">
                {data.description}
              </div>
              <div className="flex flex-row gap-4 w-full overflow-scroll">
                <div className=" text-lg font-semibold">หมวด</div>
                {data.tags?.map((tag) => (
              <div key={data.uid+i++} className=" bg-originalBlue w-max font-light flex flex-row rounded-sm big-device:text-base medium-tablet:text-sm medium-tablet:pt-1 text-center text-white px-3">
                {tag}
              </div>))}
              </div>
              <div>
                <div className="flex flex-row gap-4">
                  <div className=" text-lg font-semibold">ราคา</div>
                  <div className="bg-originalBlue w-max font-light flex flex-row rounded-sm text-base text-center text-white px-3">{data.price}</div>
                  <div className=" text-lg font-light">บาท</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row relative w-full big-device:h-96 medium-tablet:h-80">
            <div className="bg-originalBlue big-device:w-96 big-device:h-96 medium-tablet:w-80 medium-tablet:h-80  absolute -left-[14rem] rounded-full"/>
            <div className="flex flex-col big-device:ml-64 medium-tablet:ml-32 h-full justify-center gap-8">
              <div className="text-6xl self-center text-center">โปรไฟล์</div>
              <div className="text-3xl self-center text-center text-originalBlue">ชื่อผู้รับงาน</div>
              <div className="flex flex-row gap-2 place-content-center">
                  <div className="text-2xl bg-originalBlue text-white rounded-md px-2 py-1 pt-2">จ้างงาน</div>
                  <ChatIcon className="w-12 h-12 fill-black bg-[#D9D9D9] rounded-md px-2 py-1 text-center"/>
              </div>
            </div>
            <div className="flex flex-col ml-auto self-center">
            <div className="big-device:visible medium-tablet:hidden mobile:hidden">
              <img className="rounded-full" src={data?.userinfo?.worker_profile?.image || '/temp.jpg'} width='300' height='300' alt='imageprofile'/>
            </div>
            <div className="big-device:hidden medium-tablet:visible mobile:hidden">
              <img className="rounded-full" src={data?.userinfo?.worker_profile?.image || '/temp.jpg'} width='250' height='250' alt='imageprofile'/>
            </div>
            </div>
          </div>
          <div>คุณอาจจะสนใจสิ่งนี้</div>
        </div>
      </Template>

    </div>
  )
}

export default uid;