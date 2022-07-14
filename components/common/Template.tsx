import React from 'react'
import NavBar from '../NavBar'
import Link from "next/link"

type TemplateProps = {
  children?: React.ReactNode,
  className?: string
}

const Template = ({children, className}: TemplateProps) => {
  return (
    <div className="bg-white relative font-Kanit w-screen">
      <div className="sticky top-0 z-50">
        <NavBar/>
      </div>
      <div className={className + ' place-content-center'}>
        {children}
      </div>
      <footer className='bg-[#111111] bottom-0 text-white flex'>
        <div className='flex flex-col'>
          <Link href='/'>asd</Link>
          <Link href='/'>asd</Link>
          <Link href='/'>asd</Link>
        </div>
        <div className='flex flex-col'>
          <Link href='/'>asd</Link>
          <Link href='/'>asd</Link>
          <Link href='/'>asd</Link>
        </div>
        <div className='flex flex-col'>
          <Link href='/'>asd</Link>
          <Link href='/'>asd</Link>
          <Link href='/'>asd</Link>
        </div>
      </footer>
    </div>
  )
}

export default Template
