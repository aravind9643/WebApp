import { Component, OnInit } from '@angular/core';
import { Jsonp } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  temp: any;
  name: string;
  humidity: number;
  weather: {};
  icon: string;
  pressure: number;
  speed: number;
  longitude;
  latitude;
  city;
  constructor(private jsonp: Jsonp) {
      }
  ngOnInit() {
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });

}
setWeatherByGPS() {
  if (this.latitude !== undefined) {
  // tslint:disable-next-line:max-line-length
  this.jsonp.get('http://api.openweathermap.org/data/2.5/weather?lat=' + this.latitude + '&lon=' + this.longitude + '&appid=83a004a4e9841d7258c25e987aba9c88&callback=JSONP_CALLBACK')
  .subscribe(data => {
    this.temp = data.json().main.temp - 273.15;
    this.name = data.json().name;
    this.humidity = data.json().main.humidity;
    this.weather = data.json().weather;
    this.speed = data.json().wind.speed;
    this.pressure = data.json().main.pressure;
     });
    } else {
      alert('Please Wait');
    }
}
setWeatherByCity() {
  if (this.city !== undefined) {
    // tslint:disable-next-line:max-line-length
  this.jsonp.get('http://api.openweathermap.org/data/2.5/weather?q=' + this.city + '&appid=83a004a4e9841d7258c25e987aba9c88&callback=JSONP_CALLBACK')
  .subscribe(data => {
    this.temp = (data.json().main.temp - 273.15).toFixed(3);
    this.name = data.json().name;
    this.humidity = data.json().main.humidity;
    this.weather = data.json().weather;
    this.speed = data.json().wind.speed;
    this.pressure = data.json().main.pressure;
     });
    } else {
      alert('Enter City Name');
    }
}
}
