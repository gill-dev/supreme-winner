# Weather App

A modern React weather application that displays current weather conditions, including temperature, time, and sun information for any given location.


## Features

- Real-time weather data display
- Current temperature and "feels like" temperature
- Sunrise and sunset times
- Local time and date
- City/location information
- Responsive design with dark mode interface

## Technologies Used

- React
- TypeScript
- CSS Modules
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

## Project Structure

```
src/
├── components/
│   └── WeatherDisplay/
│       ├── WeatherDisplay.tsx
│       └── WeatherDisplay.module.css
├── types/
│   └── weather.ts
└── ...
```

## Component Usage

```tsx
import { WeatherDisplay } from './components/WeatherDisplay';

// Example weather data
const weatherData = {
  temperature: 24,
  feelsLike: 22,
  city: "Athens",
  localTime: "2024-03-12T09:03:00",
  sunrise: "06:37 AM",
  sunset: "20:37 PM",
  // ... other weather details
};

function App() {
  return <WeatherDisplay weather={weatherData} />;
}
```

## Weather Details Interface

```typescript
interface WeatherDetails {
  temperature: number;
  feelsLike: number;
  city: string;
  localTime: string;
  sunrise: string;
  sunset: string;
  region: string;
  country: string;
}
```

## Styling

The application uses CSS Modules for styling to ensure component-scoped styles and prevent naming conflicts. 

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments

- Icons from [Lucide React](https://lucide.dev)