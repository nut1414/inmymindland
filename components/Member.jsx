import Image from "next/image";


const Member = ({img, position, name, nickname}) => {
  return(
    <div className="flex flex-col mobile:place-items-center">
      <Image src={img} width={200} height={160} layout="fixed" alt={name}/>
      <div className="text-[#0080FF]">{position}</div>
      <div className="flex flex-col mobile:flex-row mobile:gap-1">
        <div className="font-extralight text-white">{name}</div>
        <div className="font-extralight text-white">{nickname}</div>
      </div>
      
    </div>
  )
};

export default Member;