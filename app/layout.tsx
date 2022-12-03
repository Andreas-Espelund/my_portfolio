
import './globals.css'
export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body id="body" className="min-h-screen w-full flex flex-col justify-start bg-neutral">
        <div>
          {children}
        </div>
      </body>
    </html>
  )
}
