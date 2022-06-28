import Image from "next/image";
import Link from "next/link";

type JobProps = {
  id: string,
  image: string,
  price: number,
  worker: string,
  name: string
}

const Job = ({id, image, price, worker, name}: JobProps) => {
  return (
    <>
    <div className="text-center box-content h-[24rem] w-[22rem] bg-[#404040] text-white py-8 rounded-md overflow-hidden transition hover:scale-[1.1] drop-shadow hover:z-50">
        <Image className="rounded-md place-items-center" src={image} width={256} height={256} alt={id}/>
        <div className="flex flex-col">
          <div className="break-all h-10">
            {name}
          </div>
          <div className="flex flex-col text-left justify-around content-center m-2">
            <div className=" truncate">
              {`Hiring by:  ${worker}`}
            </div>
            <div>
              {`price: ${price} Baht`}
            </div>
          </div>
          <button className="h-[3.25rem] text-center bg-[#282828] ">
            <Link href={`/hiring/${id}`} passHref={true}>
              รายละเอียดเพิ่มเติม
            </Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Job;
