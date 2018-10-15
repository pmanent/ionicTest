import { Component, OnInit, ViewChild } from '@angular/core';
import { CitiesService } from '../prodivers/cities.service';
import { GithubService } from '../prodivers/github.service';

import { Slides } from '@ionic/angular';

import { Repository } from '../domain/repo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  repos: Repository[];
  @ViewChild(Slides) slides: Slides;

  constructor(private service: CitiesService, private github:GithubService){
    this.repos=[];

  }

  ngOnInit(){
    this.github.getRepos()
    .subscribe(data=>{
      console.log(data);
      this.repos=data;
    });
    /*this.service.getCities()
    .subscribe(data=>{
      console.log(data);
      this.repos=data;
    });*/
  }

  goToDetail(repo){

  }
}
