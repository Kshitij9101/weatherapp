import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  lat: any;
  lon: any;
  weather: any;
  locationAllow=true;
  locationBlock=false;
  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.getLocation();
  }

  getLocation() {
    if ("geolocation" in navigator) {
      navigator.geolocation.watchPosition((success) => {
        this.lat = success.coords.latitude;
        this.lon = success.coords.longitude;

        this.weatherService.getCoords(this.lat, this.lon).subscribe(data => {
          this.weather = data;
        });

      })
    }
  }

  getCity(city:any){
    this.weatherService.getCityWeather(city).subscribe(data=>{
      this.weather=data;
    })
  }


}
