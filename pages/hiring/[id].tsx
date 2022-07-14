import Head from "next/head";
import { useRouter } from "next/router";
import Template from "../../components/common/Template";
import Image from "next/image";
import { useState } from "react";
import { TagInfo } from "../../components/hiring/Job";
import { useSession } from "next-auth/react";


const testdata: any = {
  uid: 'test123',
  price: 100,
  workerimage: '/favicon-32x32.png',
  worker: 'oPun',
  image: '/showimg.png',
  tags: [
  {
    name: 'ฟิสิกส์',
    id: 1,
  },
  {
    name: 'HW',
    id: 2,
  }
  ],
  name: 'Awesome Job',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sem eu hendrerit scelerisque. Phasellus in purus vel mi pretium pharetra. Nunc in elementum ligula. Suspendisse luctus feugiat nisl, non dictum ipsum lacinia sit amet. Nunc ac hendrerit mauris, id aliquet risus. Donec sit amet posuere justo. In elementum, diam eget egestas laoreet, augue eros venenatis augue, quis congue nunc ante sed odio. Nam accumsan volutpat nunc eget pulvinar. Duis dictum ornare interdum. Suspendisse sit amet ex iaculis leo dictum suscipit non id risus. ',
}

/*
     
*/

const Id = () => {
  const route = useRouter()
  const [data, setdata] = useState(testdata)
  const { data: session } = useSession()
  let i = 0;
  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template className="mx-16">
        <div className="bg-white w-full text-black">
          <div className="flex flex-row bg-[#F9F8F8] rounded-t-3xl w-full pt-16 px-64">
            <div className="w-max h-max place-items-center">
              <Image src={data.image} width='3200' height='3200' alt='Hiring' className=''/>
            </div>
            <div className='flex flex-col ml-8 justify-self-end text-left gap-8'>
              <div className=" font-semibold text-2xl">
                {data.name}
              </div>
              <div className="word-break text-base">
                {data.description}
              </div>
              <div className="flex flex-row gap-4">
                <div className=" text-lg font-semibold">หมวด</div>
                {data.tags.map((tag: TagInfo) => (
              <div key={data.uid+i++} className=" bg-originalBlue w-max font-light flex flex-row rounded-sm text-base text-center text-white px-3">
                {tag.name}
              </div>))}
              </div>
              <div>
                <div className="flex flex-row gap-4">
                  <div className=" text-lg font-semibold">ราคา</div>
                  <div className="bg-originalBlue w-max font-light flex flex-row rounded-sm text-base text-center text-white px-3">{testdata.price}</div>
                  <div className=" text-lg font-light">บาท</div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-row relative w-96 h-96 ">
            <div className="bg-originalBlue w-96 h-96 absolute right-60 rounded-full"/>
            <div className="flex flex-col ml-64 h-full justify-center gap-8">
              <div className="text-6xl self-center text-center">โปรไฟล์</div>
              <div className="text-3xl self-center text-center text-originalBlue">ชื่อผู้รับงาน</div>
            </div>
            <div className="flex flex-col">
                {session ? <Image src={session.user?.image || ''} width='3200' height='3200' alt='imageprofile'/> : <></>}
            </div>
          </div>
        </div>
      </Template>

    </div>
  )
}

export default Id;