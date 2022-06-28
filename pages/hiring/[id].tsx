import Head from "next/head";
import { useRouter } from "next/router";
import Template from "../../components/common/Template";
import Image from "next/image";

type JobProps = {
  id: string,
  image: string,
  price: number,
  worker: string,
  name: string
}


const Id = () => {
  const route = useRouter()
  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template>
        <div className="">
          <div className="flex">

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