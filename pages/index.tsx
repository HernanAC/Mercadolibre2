
import React from 'react'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Content from '@/components/Content'
import Head from 'next/head'


export default function Home() {
  return (
    <>
      <Head>
        <title>Mercado Libre Colombia</title>
        <link rel="icon" href="/mercadolibre-curso.png" type="image/x-icon"></link>
      </Head>
      <main >
        <Header />
        <Content />
        <Footer />
      </main>
    </>
  )
}
