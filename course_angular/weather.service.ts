import { ICityWeather } from './../models/IWeatherData.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { IWeatherRawData } from '../models/IWeatherRawData.interface';
import { ISearchResult, IWeatherData } from '../models/IWeatherData.interface';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(
    private http: HttpClient,
  ) { }

  baseUrl = 'https://www.metaweather.com';
//https://cors-anywhere.herokuapp.com/

  searchLocation(term): Observable<ISearchResult[]> {
    /*
      CHALLANGE
       - get list of cities based on the searched string
       sample url: baseUrl/api/location/search/?query=paris
    */
   var url = this.baseUrl + "/api/location/search/?query=" + term;
   return this.http.get<ISearchResult[]>(url);

  }

  getCityDetails(woeid): Observable<IWeatherData> {
    /*
      woeid is the city id(number).
      you can use below sample url to fetch the city weather details
      sample url : baseUrl/api/location/111111
    */

    /*
      CHALLENGE
       - fetch the city weather data
       - transform the received data to required "IWeatherData" format using transformRawData() func
    */
   var url = this.baseUrl + "/api/location/" + string (woeid);
   var rawData = this.http.get<IWeatherRawData>(url);
   var observableData;
   rawData.subscribe(data => observableData = rawData);
   var transformedData: IWeatherData = this.transformRawData(observableData);
   return of(transformedData);

  }

  transformRawData(rawData: IWeatherRawData) {
    const transformedWeather: Array<ICityWeather> = [];

    rawData.consolidated_weather.forEach(function(obj) {
      const date = '';
      const temperature = 0;
      const weather_name = '';
      const weather_image = `https://www.metaweather.com/static/img/weather/.svg`;

      transformedWeather.push({ } as ICityWeather);
    });

    return {
      city: rawData.title,
      country: '',
      weather: [],
    };
  }
}
