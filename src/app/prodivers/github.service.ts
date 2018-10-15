import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Repository } from '../domain/repo';

@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor(private http: HttpClient) {

  }

  getRepos(): Observable<Repository[]>{

    return this.http.get<Repository[]>('https://api.github.com/users/pmanent/repos');
  };
}
