<<<<<<< HEAD
import { Component, OnInit, ViewChild } from '@angular/core';
import { CitiesService } from '../prodivers/cities.service';
import { Slides } from '@ionic/angular';

import { Repository } from '../domain/repo';
=======
import { Component } from '@angular/core';
>>>>>>> a2b4b62ed4743a6d7ec62ce2835fcf7f98272127

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
<<<<<<< HEAD
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
=======
export class HomePage {

>>>>>>> a2b4b62ed4743a6d7ec62ce2835fcf7f98272127
}
