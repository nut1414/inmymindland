import Head from "next/head";
import Template from "../../components/common/Template";
import Job from "../../components/hiring/Job";

const Hiring = () => {
  return (
    <div>
      <Head>
        <title>Hiring | Inmymind</title>
      </Head>
      <Template>
        <div className="grid grid-cols-2 gap-2 medium-tablet:grid-cols-3 big-device:grid-cols-4 mt-16 place-items-center">
          <Job name="JOBBBBbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb" image="/showimg.png" id="1" price={500} worker="punza namwonsakulmangkodyawlerah"/>
          <Job name="JOBBBB" image="/showimg.png" id="2" price={500} worker="punza"/>
          <Job name="JOBBBB" image="/showimg.png" id="3" price={500} worker="punza"/>
          <Job name="JOBBBB" image="/showimg.png" id="4" price={500} worker="punza"/>
          <Job name="JOBBBB" image="/showimg.png" id="5" price={500} worker="punza"/>
          <Job name="JOBBBB" image="/showimg.png" id="7" price={500} worker="punza"/>
          <Job name="JOBBBB" image="/showimg.png" id="6" price={500} worker="punza"/>
        </div>
      </Template>

    </div>
  )
}

export default Hiring;