import Image from "next/image";

type FeatureProps = {
  image: string,
  title: string,
  detail: string[]
}

const Feature = ({ image, title, detail } : FeatureProps) => {
  let i = 0;
  return (
    <div className="flex flex-col items-center justify-center">
      <Image
        src={image}
        width={200}
        height={200}
        layout="fixed"
        alt="mac"
      />
      <div className="text-2xl mt-10 mb-4">{title}</div>
      {detail.map((e :string) => {
        return <p key={title+i++} className="font-light text-xl">{e}</p>
      })}
    </div>
  );
};

export default Feature;
