'use client'
import { useState } from 'react'
import { WeatherSearch } from '@/components/WeatherSearch'
import { WeatherDisplay } from '@/components/WeatherDisplay'
import type { WeatherDetails } from '@/types/weather'
import styles from './page.module.css'
export default function Home() {
  const [weatherData, setWeatherData] = useState<WeatherDetails | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const handleSearch = async (city: string) => {
    try {
      setLoading(true)
      setError(null)
      const response = await fetch(`https://localhost:7059/Status/${encodeURIComponent(city)}`)
        if (!response.ok) {
        throw new Error('Failed to fetch weather data')
      }
      const data = await response.json()
      setWeatherData(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong')
    } finally {
      setLoading(false)
    }
  }
  return (
    <main className={styles.page}>
      <div className={styles.page__container}>
        <h1 className={styles.page__title}>Weather Service</h1>
        <WeatherSearch onSearch={handleSearch} disabled={loading} />
        {error && (
          <div className={styles.pageerror}>
            {error}
          </div>
        )}
        {loading && (
          <div className={styles.page__loading}>
            <div className={styles.page__spinner} />
          </div>
        )}
        {weatherData && <WeatherDisplay weather={weatherData} />}
      </div>
    </main>
  )
}