import { ShareIcon, UserIcon } from "@heroicons/react/solid";
import { trusted } from "mongoose";
import Image from "next/image";
import Link from "next/link";
import { IJobListing } from "../../models/JobListing";
import { HydratedJobListing } from "../../pages/hiring";

const colorTag = (tagName: string) => {
  const dict: any = {
    'ฟิสิกส์': 'bg-red-300',
    'HW': 'bg-green-500'
  }
  return dict[tagName] || 'bg-gray-700'
}

const Listing = ({listingInfo: listingInfo}: {listingInfo: HydratedJobListing}) => {
  let i = 0;
  return (
    <div className="flex flex-col gap-2 z-10 place-items-center">
      <div className="text-center box-content big-device:h-[14rem] medium-tablet:h-[10rem] big-device:w-48 medium-tablet:w-40 bg-white text-white pb-8 py-4 rounded-md overflow-hidden transition drop-shadow px-4 relative">
        <div className="w-full">
          <div className="big-device:visible medium-tablet:hidden mobile:hidden">
            <Image width={200} height={120} src={listingInfo.image} alt="rectest" className="rounded-md w-20 h-20"/>
          </div>
          <div className="big-device:hidden medium-tablet:visible mobile:hidden">
            <Image width={150} height={80} src={listingInfo.image} alt="rectest" className="rounded-md w-20 h-20"/>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col w-full">
            <div className=" text-black text-left big-device:text-xl medium-tablet:text-lg truncate">{listingInfo.name}</div>
            <div className=" text-black text-left big-device:text-base medium-tablet:text-sm truncate">{listingInfo.description}</div>
          </div>
          <div className=" flex w-full mt-2 gap-2  overflow-y-hidden overflow-x-scroll">
            {listingInfo.tags?.map((tag: string) => (
              <div key={listingInfo?.uid+i++} className=" bg-black font-light big-device:text-xs medium-tablet:text-[0.5rem] flex flex-row rounded-full px-3 py-1 place-items-center scroll-smooth ">
                <div className={colorTag(tag)+' mr-2 text-sm w-3 h-3 rounded-full'}/>
                <div className=" truncate">
                  {tag}
                </div>
              </div>))}
          </div>
          <div className="flex flex-row place-content-end text-black place-items-center">
            <div className="text-originalBlue text-2xl mr-auto">{"฿" + listingInfo.price}</div>
            <div className=" text-xs text-right w-2/3 mr-4 ml-1 truncate">{'โดย ' + listingInfo.userinfo?.worker_profile?.name}</div>
            {listingInfo.userinfo.worker_profile.image ? <img src={listingInfo.userinfo.worker_profile.image} alt={listingInfo.userinfo.worker_profile.name} width={24} height={24} className="rounded-full select-none"/> : <UserIcon className="h-8 w-8 rounded-full select-none "/>}
          </div>
        </div>
        <button className="absolute -top-10 -right-10 h-20 w-20 rounded-full bg-black">
          <div className="relative w-full h-full">
            <ShareIcon className="absolute w-5 h-5 left-4 bottom-4"/>
          </div>
        </button>
        
      </div>
      <button className=" place-self-center bg-black text-white w-max rounded-full px-2 text-base">จ้างงาน</button>
      <button className=" place-self-center place-items-center text-base text-originalBlue flex flex-row gap-1">
        <Link href={`/hiring/${listingInfo.uid}`} passHref={true}>
          <p className="underline text-xs w-max">ดูเพิ่มเติม</p>
        </Link>
        <p>{'>'}</p>
      </button>
    </div>
  );
};

export default Listing;
