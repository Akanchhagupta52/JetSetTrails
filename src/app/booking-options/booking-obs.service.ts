import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


export interface City {
  id: number;
  description: string;
  placesToSee: string[];
  rating: number;
  image: string;
  category: string;
  price?: number;
}

@Injectable({
  providedIn: 'root',
})
export class CityObsService {
  private citiesUrl = 'assets/cities.json'; 

  constructor(private http: HttpClient) {}

  
  getCities(): Observable<City[]> {
    return this.http.get<City[]>(this.citiesUrl);
  }
}
