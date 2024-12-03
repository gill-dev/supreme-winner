'use client'

import { useState } from 'react'
import styles from './WeatherSearch.module.css'

interface WeatherSearchProps {
  onSearch: (city: string) => void
  disabled?: boolean
}

export function WeatherSearch({ onSearch, disabled }: WeatherSearchProps) {
  const [city, setCity] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (city.trim()) {
      onSearch(city.trim())
    }
  }

  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit} className={styles.search__form}>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="Enter city name..."
          className={`${styles.search__input} ${disabled ? styles['search__input--disabled'] : ''}`}
          disabled={disabled}
        />
        <button 
          type="submit" 
          className={`${styles.search__button} ${(disabled || !city.trim()) ? styles['search__button--disabled'] : ''}`}
          disabled={disabled || !city.trim()}
        >
          Search
        </button>
      </form>
    </div>
  )
}