import { trusted } from "mongoose";
import Image from "next/image";
import Link from "next/link";

export type TagInfo = {
  id: number
  name: string
}

export interface IJob {
  uid: string,
  price: number,
  worker: string,
  workerimage: string,
  tags: TagInfo[],
  name: string,
  description?: string,
}

const colorTag = (tagName: string) => {
  const dict: any = {
    'ฟิสิกส์': 'bg-red-300',
    'HW': 'bg-green-500'
  }
  return dict[tagName] || 'bg-gray-700'
}

const Job = ({jobInfo}: {jobInfo: IJob}) => {
  let i = 0;
  return (
    <div className="flex flex-col gap-2">
    <div className="text-center box-content h-[9rem] w-[12rem] bg-[#0080FF] text-white pb-8 py-4 rounded-md overflow-hidden transition drop-shadow ">
        <div className="flex flex-col">
          <div className="bg-white rounded-md px-4  text-black pt-2 pb-1 mx-4">
            <div className="text-center font-semibold text-2xl">{jobInfo.price}</div>
            <div className=" text-right font-medium text-xl">บาท</div>
          </div>
          <div className=" flex w-full my-2 gap-2 mx-4 overflow-x-hidden overflow-y-scroll">
            {jobInfo.tags?.map((tag: TagInfo) => (
              <div key={jobInfo.uid+i++} className=" bg-black font-light text-xs flex flex-row rounded-full px-3">
                <div className={colorTag(tag.name)+' mr-2 text-xs '}>•</div>
                {tag.name}
              </div>))}
          </div>
          <div className="flex flex-row h-full">
            <div className="flex flex-col w-3/4">
              <div className="ml-4 text-left text-xl truncate">{jobInfo.name}</div>
              <div className="ml-4 text-left text-base truncate">{jobInfo.description}</div>
            </div>
            <div className="flex flex-col w-1/4">
              <img src={jobInfo.workerimage} alt={jobInfo.name} width={20} height={20} className="rounded-full place-self-end mt-auto"/>
              <div className="text-xs text-right mr-4">{'โดย ' + jobInfo.worker}</div>
            </div>
          </div>
        </div>
      </div>
      <button className=" place-self-center bg-black text-white w-max rounded-full px-2 text-base">จ้างงาน</button>
      <button className=" place-self-center place-items-center text-base text-originalBlue flex flex-row gap-1">
        <Link href={`/hiring/${jobInfo.uid}`} passHref={true}>
          <p className="underline text-xs">ดูเพิ่มเติม</p>
        </Link>
        <p>{'>'}</p>
      </button>
    </div>
  );
};

export default Job;
