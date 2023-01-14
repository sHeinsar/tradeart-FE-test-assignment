import React, { ReactNode, useEffect } from 'react'
import Header from './header/Header'
import Footer from './footer/Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    console.log('hi')
  })
  return (
        <div className="layout-main">
            <Header/>
            {children}
            <Footer/>
        </div>
  )
}

export default Layout
