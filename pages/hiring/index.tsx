import Head from "next/head";
import Template from "../../components/common/Template";
import Job, {IJob} from "../../components/hiring/Job";
import { nanoid } from "nanoid";
import { useSession } from "next-auth/react";
import { useState } from "react";
import SearchHiringBox from "../../components/hiring/SearchHiringBox";

const testdata: IJob[] = [
   {
     uid: nanoid(),
     price: 100,
     workerimage: '/favicon-32x32.png',
     worker: 'oPun',
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
     description: nanoid(21),
   },
   {
    uid: nanoid(),
    price: 100,
    workerimage: '/favicon-32x32.png',
    worker: 'oPun',
    tags: [
     {
       name: 'ชีววิทยา',
       id: 1,
     },
     {
       name: 'Presentation',
       id: 2,
     }
    ],
    name: 'Awesome Job',
    description: nanoid(21),
  },
  {
    uid: nanoid(),
    price: 100,
    workerimage: '/favicon-32x32.png',
    worker: 'oPun',
    tags: [
     {
       name: 'ภูมิศาสตร์',
       id: 1,
     },
     {
       name: 'Poster',
       id: 2,
     }
    ],
    name: 'Awesome Job',
    description: nanoid(21),
  },
  {
    uid: nanoid(),
    price: 100,
    workerimage: '/favicon-32x32.png',
    worker: 'oPun',
    tags: [
     {
       name: 'คณิตศาสตร์',
       id: 1,
     },
     {
       name: 'HW',
       id: 2,
     }
    ],
    name: 'Awesome Job',
    description: nanoid(21),
  },
]

const Hiring = () => {
  const { data: session } = useSession()
  const [workName, setWorkName] = useState();
  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template className="mx-64">
        <SearchHiringBox state={setWorkName}/>
        <div className="grid grid-cols-6 gap-2 medium-tablet:grid-cols-3 big-device:grid-cols-6 mt-16 place-items-center">
          {testdata?.map((job) => {if (job) {if (session) job.workerimage=session?.user?.image as string;} return (<Job key={job.uid} jobInfo={job}/>)})}
        </div>

        
      </Template>

    </div>
  )
}

export default Hiring;