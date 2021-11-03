import Head from 'next/head'
import { ReactElement } from 'react'
import { useState } from 'react'
import LocationInput from '../components/location-input'
import Layout from '../components/layout'
import { CurrentResponse } from 'openweathermap-ts/dist/types'

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<CurrentResponse>()
  const [weatherIcon, setWeatherIcon] = useState(0)

  function handleCurrentWeather(data: CurrentResponse) {
    setCurrentWeather(data)
    if (currentWeather && currentWeather.weather) {
      setWeatherIcon(currentWeather.weather[0].id)
    }
  }

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
      <LocationInput currentWeather={handleCurrentWeather} />
      <p>weatherIcon: {weatherIcon}</p>
      <p>{JSON.stringify(currentWeather)}</p>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
