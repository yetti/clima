import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../styles/LocationInput.module.css'
import { CurrentResponse } from 'openweathermap-ts/dist/types'

type LocationInputs = {
  location: string
}

type LocationInputProps = {
  currentWeather: (weather: CurrentResponse) => void
}

export default function LocationInput(props: LocationInputProps) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LocationInputs>()

  const onSubmit: SubmitHandler<LocationInputs> = async (formData) => {
    const response = await fetch('/api/weather', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    props.currentWeather(data.weather)
  }

  console.log(watch('location'))

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row flex-initial justify-center">
        <input
          className={`${styles.locationInput} ${
            errors.location ? styles.locationError : styles.locationNormal
          }`}
          placeholder="Your city name"
          defaultValue="Canberra"
          {...register('location', { required: true })}
        />
        <button className={styles.checkBtn}>
          Check <span className="hidden sm:inline-block">🕶️</span>
        </button>
      </div>
      {errors.location && (
        <span className={styles.errorMessage}>A location is required</span>
      )}
    </form>
  )
}
