import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
url='https://api.openweathermap.org/data/2.5/weather';
apiKey='112166555522853be02b9810ba8a4068';

  constructor(private http:HttpClient) { }


getCoords(lat:any,lon:any){
  let params=new HttpParams()
  .set('lat',lat)
  .set('lon',lon)
  .set('units','imperial')
  .set('appid',this.apiKey)

  return this.http.get(this.url,{params});
}

getCityWeather(city:string){
  let params=new HttpParams()
  .set('q',city)
  .set('units','imperial')
  .set('appid',this.apiKey)

  return this.http.get(this.url,{params});
}


}