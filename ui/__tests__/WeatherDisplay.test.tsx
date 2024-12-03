import { render, screen } from '@testing-library/react';
import { WeatherDisplay } from '../components/WeatherDisplay';
import { WeatherDetails } from '../types/weather';

describe('WeatherDisplay', () => {
  const mockWeather: WeatherDetails = {
    temperature: 24,
    city: 'Athens',
    localTime: '2024-03-12T09:03:00',
    sunrise: '06:37 AM',
    sunset: '20:37 PM',
    region: 'Attica',
    country: 'Greece'
  };

  it('renders weather information correctly', () => {
    render(<WeatherDisplay weather={mockWeather} />);

    expect(screen.getByText('Athens')).toBeInTheDocument();
    expect(screen.getByText('24°C')).toBeInTheDocument();
  });

  it('formats time correctly', () => {
    render(<WeatherDisplay weather={mockWeather} />);
    
    expect(screen.getByText('09:03')).toBeInTheDocument();
  });

  it('displays sunrise and sunset times', () => {
    render(<WeatherDisplay weather={mockWeather} />);

    expect(screen.getByText('06:37 AM')).toBeInTheDocument();
    expect(screen.getByText('20:37 PM')).toBeInTheDocument();
  });
});