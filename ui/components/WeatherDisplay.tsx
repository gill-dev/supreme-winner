import { WeatherDetails } from '@/types/weather'
import styles from './WeatherDisplay.module.css'
import { Sunrise, Sunset } from 'lucide-react'

interface WeatherDisplayProps {
  weather: WeatherDetails
}

export function WeatherDisplay({ weather }: WeatherDisplayProps) {
  return (
    <div className={styles['weather-container']}>
      <div className={styles['weather-block']}>
        <div className={styles['city-name']}>{weather.city}</div>
        <div className={styles['time']}>
          {new Date(weather.localTime).toLocaleTimeString('en-US', {
            hour: '2-digit',
            minute: '2-digit',
            hour12: false
          })}
        </div>
        <div className={styles['date']}>
          {new Date(weather.localTime).toLocaleDateString('en-US', {
            weekday: 'long',
            day: 'numeric',
            month: 'short'
          })}
        </div>
      </div>
      
      <div className={styles['weather-block']}>
        <div className={styles['temperature-container']}>
          <div className={styles['temperature']}>
            {Math.round(weather.temperature)}°C
          </div>
        </div>
        <div className={styles['sun-info']}>
          <div className={styles['sun-time']}>
            <Sunrise className={styles['sun-icon']} />
            <span>Sunrise</span>
            <span>{weather.sunrise}</span>
          </div>
          <div className={styles['sun-time']}>
            <Sunset className={styles['sun-icon']} />
            <span>Sunset</span>
            <span>{weather.sunset}</span>
          </div>
        </div>
      </div>
    </div>
  )
}