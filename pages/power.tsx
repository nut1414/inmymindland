import { useSession } from "next-auth/react";
import Head from "next/head"
import Template from "../components/common/Template";
import Image from "next/image";
import { useMemo, useState } from "react";
import ImageUploader from "../components/common/ImageUploader";
import { CldImage } from "../models/schemas/Image";
import { TrashIcon } from "@heroicons/react/solid";


const Power = () => {
  const {data:session, status} = useSession()
  const [ listing, setListing ] = useState()
  const [ newlist, setnewlist ] = useState()
  const [ cldimg, setcldimg ] = useState<CldImage>()
  const thumburl = useMemo<string>(() =>  cldimg?.secure_url ? cldimg.secure_url : '/temp.jpg', [cldimg])
  const handleCreateListing = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await fetch('/api/joblists', {method:'POST',headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      status: 'published',
      image: cldimg?.secure_url ? {type: 'cloudinary',url: '/temp.jpg', pid: cldimg.public_id} : { type: 'url', url: '/temp.jpg' },
      name: (e.target.elements.namedItem('name') as any).value,
      description: (e.target.elements.namedItem('desc') as any).value,
      price: (e.target.elements.namedItem('price') as any).value,
      tags: ['รายงาน Essay','โรงเรียน'],
    }
    )}).then((res) => res.json())
    console.log(result)
    setnewlist(result)
  }
  const handleDeleteListing = async (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault()
    const result = await fetch(`/api/joblists/${(e.target.elements.namedItem('uid') as any).value}`, {method:'DELETE'}).then((res) => res.json())
    console.log(result)
    alert(JSON.stringify(result))
  }

  const handleGetListing = async () =>{
    const listsget = await fetch('/api/joblists',{method:'GET'}).then((res) => res.json())
    console.log(listsget || {})
    setListing(listsget?.result || [])
  }

  const handleDeleteCldImg = () => {
    if (cldimg) {
      setcldimg(undefined)
    }
  }

  return (
    <div>
      <Head>
        <title>Power | Inmymind</title>
      </Head>
      <Template className="flex">
        <div className="bg-black text-white container p-2 m-2 text-center ">
          {status !== "loading" ? (session?.role === 'admin' ? 
          <div className="p-5">
            Power Page
            <div className="p-2 m-3 bg-slate-800">
              Create listing
              <form id='listform' onSubmit={handleCreateListing} className="p-3 flex flex-col gap-3">
                <span>Listing Name: <input form='listform' name="name" className="rounded text-black" defaultValue="amazing listing"/></span>
                <span>Description: <textarea form='listform' name="desc" className="rounded text-black" defaultValue="amazing description"/></span>
                <span>Price: <input form='listform' name="price" type="number" className="rounded text-black" defaultValue="100"/>B</span>
                <span>Tag: รายงาน, โรงเรียน</span>
                <div className="flex place-content-center">Image: <Image width={200} height={120} src={thumburl} alt="temp"/> {cldimg && <TrashIcon onClick={handleDeleteCldImg} className="w-5 h-5"/>}</div>
                
                <ImageUploader preset="ntsplg" callback={(data) => {setcldimg(data);console.log(data)}}/>
                <input form='listform' type='submit' value='Create Listing' className="bg-slate-500 p-3"/>
              </form>
              {JSON.stringify(newlist)}

            </div>
            <div className="p-2 m-3 bg-slate-800 flex flex-col">
              Delete listing
              <form  id='deleteform' onSubmit={handleDeleteListing} className="p-3 flex flex-col gap-3">
                <span>UID: <input name="uid" form='deleteform' className="text-black"/></span>
                <input form='deleteform' type='submit' value='Delete Listing' className="bg-red-500  p-3"/>
              </form>
            </div>
            <div className="p-2 m-3 bg-slate-800 flex flex-col">
              Get listing
              <button className="bg-blue-500 m-3 p-3" onClick={handleGetListing}>Get</button>
              {JSON.stringify(listing)}
            </div>
          </div>
           : <>You must have power to view this page!</>) : <> Loading user info... </>}
        </div>
      </Template>

    </div>
  )
}

export default Power