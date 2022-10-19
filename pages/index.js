import Head from 'next/head'
import Navbar from '../components/Navbar'
import Image from 'next/image'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div>
      <Head>
        <title>CodeWear.com - Wear the code</title>
        <meta name="description" content="CodesWear.com - wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar/>
      <Footer/>
    </div>
  )
}
