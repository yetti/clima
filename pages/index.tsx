import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import Layout from '../components/layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>clima</title>
        <meta name="description" content="How's the weather in your neighbourhood?" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      { page }
    </Layout>
  )
}
