import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  country;
  constructor(private http: Http) {
    http.get('http://battuta.medunes.net/api/country/all/?key=9d03cceb79420a1898b6ba5055b69cf2')
    .map(res => res.json())
    .subscribe(country => this.country = name);
   }

  ngOnInit() {
  }


}
