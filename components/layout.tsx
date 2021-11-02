import { ReactNode } from 'react'
import Header from './header'
import Footer from './footer'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="clima-container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}
