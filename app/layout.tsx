
import './globals.css'
import { Navbar } from './components'
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head/>  
      <body id="body" className="min-h-screen w-full flex flex-col justify-start bg-neutral ">
        {children}
        <div className='hidden lg:flex'>
          <Navbar id="navbar1"/>
        </div>
      </body>
    </html>
  )
}
