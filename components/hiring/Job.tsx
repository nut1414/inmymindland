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
    <div className="flex flex-col gap-2 ">
    <div className="text-center box-content h-[11rem] w-[12rem] bg-white text-white pb-8 py-4 rounded-md overflow-hidden transition drop-shadow px-4">
        <div className="flex flex-col">
            <div className="flex flex-col w-3/4">
              <div className=" text-black text-left text-xl truncate">{jobInfo.name}</div>
              <div className=" text-black text-left text-base truncate">{jobInfo.description}</div>
            </div>
          <div className=" flex w-full my-2 gap-2  overflow-y-hidden overflow-x-scroll">
            {jobInfo.tags?.map((tag: TagInfo) => (
              <div key={jobInfo.uid+i++} className=" bg-black font-light text-xs flex flex-row rounded-full px-3 py-1 place-items-center">
                <div className={colorTag(tag.name)+' mr-2 text-sm w-3 h-3 rounded-full '}/>
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
