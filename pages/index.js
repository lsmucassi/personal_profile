import Head from 'next/head'
import Banner from '../components/Banner'
import Button from '../components/button'
import Navbar from '../components/Navbar'
import About from './about'
import Contact from './contact'
import Portfolio from './portfolio'
import Services from './services'

export default function Home() {
  return (
    <>
      <Head>
        <title>Linda Mucassi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section id="main">
        <Navbar />
        <Banner />
      </section>
        <About />
        <Services />
        <Portfolio />
        <Button />
        <Contact />
    </>
  )
}
