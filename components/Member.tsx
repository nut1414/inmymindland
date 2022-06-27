import Image from "next/image";

type MemberProps = {
  img: string,
  position: string,
  name: string,
  nickname: string,
}

const Member = ({img, position, name, nickname}: MemberProps) => {
  return(
    <div className="flex flex-col mobile:place-items-center gap-2">
      <Image src={img} width={200} height={160} layout="fixed" alt={name}/>
      <div className="text-[#0080FF] text-lg">{position}</div>
      <div className="flex flex-col mobile:flex-row mobile:gap-1">
        <div className="font-extralight text-lg text-white">{name}</div>
        <div className="font-extralight text-lg text-white">{nickname}</div>
      </div>
      
    </div>
  )
};

export default Member;