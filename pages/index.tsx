import Head from 'next/head'
import Image from 'next/image'
import { ReactElement } from 'react'
import { useState } from 'react'
import LocationInput from '../components/location-input'
import Layout from '../components/layout'
import { CurrentResponse } from 'openweathermap-ts/dist/types'

export default function Home() {
  const [currentWeather, setCurrentWeather] = useState<CurrentResponse>()
  const [weatherIcon, setWeatherIcon] = useState('')

  function handleCurrentWeather(data: CurrentResponse) {
    setCurrentWeather(data)
    if (data.weather) {
      setWeatherIcon(data.weather[0].icon)
    } else {
      setWeatherIcon('')
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
      {weatherIcon && (
        <div>
          <Image
            src={`https://openweathermap.org/img/wn/${weatherIcon}@4x.png`}
            width="200"
            height="200"
            alt="weather"
          />
        </div>
      )}
      <p>{JSON.stringify(currentWeather)}</p>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}
