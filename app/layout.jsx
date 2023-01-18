import './globals.css'
import Header from '@/section/Header/Header'
import Footer from '@/section/Footer/footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Header/>
        </header>
        <main className='bg-primary-bg'>
          {children}
        </main>
        <footer>
          <Footer/>
        </footer>
      </body>
    </html>
  )
}
