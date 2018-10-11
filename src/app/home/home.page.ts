import { Component, OnInit, ViewChild } from '@angular/core';
import { CitiesService } from '../prodivers/cities.service';
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
  
  constructor(private service: CitiesService){
    this.repos=[];
    
  }
  
  ngOnInit(){
    this.service.getCities()
    .subscribe(data=>{
      console.log(data);
      this.repos=data;
    });
  }
  
  goToDetail(repo){

  }
}
