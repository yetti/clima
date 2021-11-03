import type { NextApiRequest, NextApiResponse } from 'next'
import OpenWeatherMap from 'openweathermap-ts'
import { ThreeHourResponse } from 'openweathermap-ts/dist/types'

type Data = {
  weather?: ThreeHourResponse
  error?: string
}

const openweather = new OpenWeatherMap({
  apiKey: process.env.WEATHER_APIKEY || '',
  units: 'metric',
})

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  switch (req.method) {
    case 'POST':
      return getWeather()
    default:
      return res.status(405).end(`Method ${req.method} Not Allowed`)
  }

  async function getWeather() {
    const { location } = req.body as { location: string }
    try {
      const weather = await openweather.getThreeHourForecastByCityName({
        cityName: location,
      })
      res.status(200).json({ weather })
    } catch (error) {
      res
        .status(500)
        .json({ error: 'Unable to fetch the weather for your city' })
    }
  }
}
