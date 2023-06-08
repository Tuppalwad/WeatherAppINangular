import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  getWeather(city: string) {
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04722ad7a1ca162684f725982c291564&units=metric`;
    console.log('teste');
    console.log(url);

    return this.http.get(url);
  }
}
