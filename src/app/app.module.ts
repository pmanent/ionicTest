import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, RouteReuseStrategy, Routes } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { CitiesService } from './prodivers/cities.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

=======
>>>>>>> a2b4b62ed4743a6d7ec62ce2835fcf7f98272127

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
<<<<<<< HEAD
  imports: [BrowserModule, 
            IonicModule.forRoot(), 
            HttpClientModule,
            AppRoutingModule,
            FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    CitiesService
=======
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
>>>>>>> a2b4b62ed4743a6d7ec62ce2835fcf7f98272127
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
