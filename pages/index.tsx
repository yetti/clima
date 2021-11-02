import Head from 'next/head'
import { ReactElement } from 'react'

import LocationInput from '../components/location-input'
import Layout from '../components/layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>clima</title>
        <meta
          name="description"
          content="How's the weather in your neighbourhood?"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LocationInput />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
