import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class WeatherService {
  _http: any;

  constructor(private http: Http) { }

  getWeather(city: string) {
    return this._http.get('http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=06dfa8bb613f0ca7de30657ad6a0f827')
    // return this._http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=90d0b79bd6205d862f8457b4d0c44e76`)
    .map( data => data.json() )
    .toPromise();
  }

}
