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
        <div className="text-white text-3xl text-center mt-12">
          <p>หิวข้าวมากเลยครับ </p>
          <p>อยากจะยืมตังพี่ซัก5000ได้มั้ยนะ จุ๊บๆ</p>
          <p>อีกบรรทัดคิดบ่ออก แย่จุง</p>
        </div>
      </Template>
    </div>
  );
}
