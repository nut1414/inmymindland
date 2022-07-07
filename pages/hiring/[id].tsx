import Head from "next/head";
import { useRouter } from "next/router";
import Template from "../../components/common/Template";
import Image from "next/image";
import { useState } from "react";

type JobProps = {
  uid: string,
  image: string,
  description: string,
  price: string,
  worker: string,
  name: string
}

const testdata: JobProps = {
  uid: 'asdasdasdasdasdasdasdajsghdf',
  name: 'Pun kak zaza',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque venenatis sem eu hendrerit scelerisque. Phasellus in purus vel mi pretium pharetra. Nunc in elementum ligula. Suspendisse luctus feugiat nisl, non dictum ipsum lacinia sit amet. Nunc ac hendrerit mauris, id aliquet risus. Donec sit amet posuere justo. In elementum, diam eget egestas laoreet, augue eros venenatis augue, quis congue nunc ante sed odio. Nam accumsan volutpat nunc eget pulvinar. Duis dictum ornare interdum. Suspendisse sit amet ex iaculis leo dictum suscipit non id risus. ',
  image: '/showimg.png',
  price: '9999999B',
  worker: 'Thor the lord of the god',
}


const Id = () => {
  const route = useRouter()
  const [data, setdata] = useState(testdata)

  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template>
        <div className="h-screen container m-auto text-white">
          <div className="flex">
            <Image src={data.image} width='300' height='300' className='grow w-[25%] h-[25%]'/>
            <div className='text-center justify-self-end'>
              <div>
                {data.name}
              </div>
              <div className="word-break">
                {data.description}
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex">

            </div>
            <div className="flex flex-col">
              <button>Hire</button>
              <button>Chat</button>
            </div>
          </div>
          <div>

          </div>
          <div className="flex">

          </div>
        </div>
      </Template>

    </div>
  )
}

export default Id;