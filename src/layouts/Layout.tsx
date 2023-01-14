import React, { ReactNode } from 'react'
import Footer from './footer/Footer'
import { StyledLayout } from './Layout.styled'

interface LayoutProps {
  children: ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
        <StyledLayout>
                {children}
                <Footer/>
        </StyledLayout>
  )
}

export default Layout
