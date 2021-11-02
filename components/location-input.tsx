import { useForm, SubmitHandler } from 'react-hook-form'
import styles from '../styles/LocationInput.module.css'

type LocationInputs = {
  location: string
}

export default function LocationInput() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<LocationInputs>()
  const onSubmit: SubmitHandler<LocationInputs> = (data) => {
    console.log(data)
  }

  console.log(watch('location'))

  return (
    <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-row flex-initial justify-center">
        <input
          className={`${styles.locationInput} ${
            errors.location ? styles.locationError : styles.locationNormal
          }`}
          placeholder="Canberra, Australia"
          defaultValue="Canberra, Australia"
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
