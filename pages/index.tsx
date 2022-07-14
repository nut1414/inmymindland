import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Template from "../components/common/Template";
import Feature from "../components/Feature";
import InterestForm from "../components/InterestForm";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className="bg-[#181818] relative font-Kanit w-screen">
      <Head>
        <title>Inmymind</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
      </Head>
      <Template>
        <div className="flex flex-col gap-8 text-center text-2xl my-8 place-content-center">
          <div className="">คำอธิบายเกี่ยวกับเว็ปไซต์</div>
          <div>คำอธิบายเกี่ยวกับเว็ปไซต์คำอธิบายเกี่ยวกับเว็ปไซต์</div>
          <div className="flex flex-row place-content-center gap-4">
            <div className="bg-[#D9D9D9] px-8 py-2">ATC</div>
            <div className="bg-[#D9D9D9] px-8 py-2">ATC</div>
          </div>
        </div>
        <div className=" border-y border-black place-content-center flex flex-col text-center text-2xl pt-4 pb-8 gap-4 my-8">
          <div>Our Service</div>
          <div className="flex flex-row place-content-center justify-items-center gap-32">
            <div className="flex flex-row place-items-center w-1/4"> 
              <Image src="/mock/circle.png" alt="about1" width="100" height="100"/>
              <div >This website is about.................................................</div>
            </div>
            <div className="flex flex-row place-items-center w-1/4 gap-32"> 
              <Image src="/mock/circle.png" alt="about2" width="100" height="100"/>
              <div>This website is about</div>
            </div>
          </div>
        </div>
        <div className="flex flex-row place-content-center my-8">
            <Image src="/mock/Rectangle.png" alt="POV1" width="700" height="500"/>
          </div>
      </Template>
    </div>
  );
}
