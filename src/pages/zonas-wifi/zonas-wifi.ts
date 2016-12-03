import { Component, Input, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConnectivityService } from '../../providers/connectivity-service';

import { ENV } from '../../config/environment';

declare var google;

@Component({
  selector: 'page-zonas-wifi',
  templateUrl: 'zonas-wifi.html'
})
export class ZonasWifiPage {

  @Input() mapId: string;
  @Input() latitude: number;
  @Input() longitude: number;
  @Input() widthCss: string;
  @Input() heightCss: string;

  @ViewChild('map') mapElement: ElementRef;
 
  map: any;
  mapInitialised: boolean = false;
  apiKey: any = ENV.GOOGLE_API_KEY;

  constructor(public connectivityService: ConnectivityService) {
    this.loadGoogleMaps();
  }

  ionViewDidLoad() {
    //console.log("Init google maps");
  }


  loadGoogleMaps(){
 
    this.addConnectivityListeners();
 
  if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
    console.log("Google maps JavaScript needs to be loaded.");
    this.disableMap();
 
    if(this.connectivityService.isOnline()){
      console.log("online, loading map");
 
      //Load the SDK
      window['mapInit'] = () => {
        this.initMap();
        this.enableMap();
      }
 
      let script = document.createElement("script");
      script.id = "googleMaps";
 
      if(this.apiKey){
        script.src = 'http://maps.google.com/maps/api/js?key=' + this.apiKey + '&callback=mapInit';
      } else {
        script.src = 'http://maps.google.com/maps/api/js?callback=mapInit';       
      }
 
      document.body.appendChild(script);  
 
    } 
  }
  else {
 
    if(this.connectivityService.isOnline()){
      console.log("showing map");
      this.initMap();
      this.enableMap();
    }
    else {
      console.log("disabling map");
      this.disableMap();
    }
 
  }
 
  }
 
  initMap(){
 
    this.mapInitialised = true;
 
    //Geolocation.getCurrentPosition().then((position) => {
 
      let latLng = new google.maps.LatLng(this.latitude, this.longitude);
 
      let mapOptions = {
        center: latLng,
        zoom: 15
      }

      if(this.mapElement){
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
      } else {
        console.log('Element empty!');
      }
 
    //});
 
  }
 
  disableMap(){
    console.log("disable map");
  }
 
  enableMap(){
    console.log("enable map");
  }
 
  addConnectivityListeners(){
 
    let onOnline = () => {
 
      setTimeout(() => {
        if(typeof google == "undefined" || typeof google.maps == "undefined"){
 
          this.loadGoogleMaps();
 
        } else {
 
          if(!this.mapInitialised){
            this.initMap();
          }
 
          this.enableMap();
        }
      }, 2000);
 
    };
 
    let onOffline = () => {
      this.disableMap();
    };
 
    document.addEventListener('online', onOnline, false);
    document.addEventListener('offline', onOffline, false);
 
  }

}
