import Head from "next/head"
import Script from "next/script"
import { useEffect, useRef, useState } from "react"

const CLOUD_NAME = "pnnnp"

declare var window: any

type CloudinaryUploadWidget = {
  open: () => void
  destroy: () => void
} | null

const ImageUploader = ({preset, callback}: {preset: string, callback: (data: any) => void}) =>{
  let uploader = useRef(null as CloudinaryUploadWidget)
  const [isReady, setReady] = useState(false)
  useEffect(()=> {
    if(isReady === true)
      if (!uploader.current && window.cloudinary) {
        uploader.current = window?.cloudinary.createUploadWidget(
          {
            cloudName: CLOUD_NAME,
            uploadPreset: preset,
            resourceType: 'image',
            clientAllowedFormats: ['jpeg', 'jpg', 'png'],
            maxFileSize: 5500000
          },
          (error: any, result: any) => {
            if (!error && result && result.event === 'success') {
              callback(result.info)
            }
          }
        )
      }
  },[preset, callback, isReady])

  const open = () => {
    if (uploader.current)
      uploader.current.open()
  }

  return (
  <>
    <Script onLoad={() => setReady(true)} src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"/>
    <input type="button" className="bg-blue-700 p-2" onClick={(e) => {e.preventDefault();open()}} value="Upload"/>
  </>
  )
}

export default ImageUploader