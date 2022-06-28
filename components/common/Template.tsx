import React from 'react'
import NavBar from '../NavBar'

type TemplateProps = {
  children?: React.ReactNode,
  className?: string
}

const Template = ({children, className}: TemplateProps) => {
  return (
    <div className="bg-[#181818] relative font-Kanit w-screen">
      <div className="sticky top-0 z-50">
        <NavBar/>
      </div>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}

export default Template
