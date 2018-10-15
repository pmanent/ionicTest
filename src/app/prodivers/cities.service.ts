import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../domain/repo';

@Injectable({
  providedIn: 'root'
})
export class CitiesService {
  
  
  constructor(public http: HttpClient) { 
    console.log('Hello RestServiceProvider Provider');
  };
  getCities(): Observable<Repository[]>{
    console.log("getRepos https://api.github.com/users/pmanent/repos");
    /*
    this.http.get('https://api.github.com/users/pmanent/repos').subscribe(data => {
      console.log(data);
    });

    this.http.get('https://city-tour.com/.rest/mobile-app-rest/v1?service-name=GET_CITIES').subscribe(data => {
      console.log(data);
    });*/
    return this.http.get<Repository[]>('https://api.github.com/users/pmanent/repos');
  };

  
}
