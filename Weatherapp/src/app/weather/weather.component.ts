import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css'],
})
export class WeatherComponent implements OnInit {
  constructor(private weatherService: WeatherService) {}
  weatherData: any;
  temperature = 0;
  city = '';
  country = '';
  humidity = 0;
  description = '';
  icon = '';
  getWeathers() {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.temperature = this.weatherData.main.temp;
        this.city = this.weatherData.name;
        this.country = this.weatherData.sys.country;
        this.humidity = this.weatherData.main.humidity;
        this.description = this.weatherData.weather[0].description;
        this.icon = this.weatherData.weather[0].icon;
        console.log('teste');
        console.log(
          this.temperature,
          this.city,
          this.country,
          this.humidity,
          this.description,
          this.icon
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  ngOnInit(): void {
    this.weatherService.getWeather(this.city).subscribe({
      next: (data) => {
        this.weatherData = data;
        this.temperature = this.weatherData.main.temp;
        this.city = this.weatherData.name;
        this.country = this.weatherData.sys.country;
        this.humidity = this.weatherData.main.humidity;
        this.description = this.weatherData.weather[0].description;
        this.icon = this.weatherData.weather[0].icon;
        console.log('teste');
        console.log(
          this.temperature,
          this.city,
          this.country,
          this.humidity,
          this.description,
          this.icon
        );
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
}
