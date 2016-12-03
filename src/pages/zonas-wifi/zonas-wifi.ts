import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ConnectivityService } from '../../providers/connectivity-service';
import { MarkerService } from '../../providers/marker-service';

import { ENV } from '../../config/environment';

declare var google;

class Marker {
	nombre: string;
	latitud: number;
	longitud: number;
}

@Component({
  selector: 'page-zonas-wifi',
  templateUrl: 'zonas-wifi.html',
  providers: [MarkerService]
})
export class ZonasWifiPage {

  mapId: string = 'map';
  latitude: number = 40.426175;
  longitude: number = -3.685144;

  @ViewChild('map') mapElement: ElementRef;
 
  map: any;
  mapInitialised: boolean = false;
  apiKey: any = ENV.GOOGLE_API_KEY;

  constructor(public connectivityService: ConnectivityService, public markerService: MarkerService) {
    
  }

  ionViewDidLoad() {
    this.loadGoogleMaps();
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
	} else {
	 
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

  loadMarkers(){
  	console.log("Huh");

    this.markerService.load().then( (data : Marker[] )=> {

    	console.log(data);

    	for(let i=0; i<data.length; i++){
    		let m = data[i];
    		let marker = new google.maps.Marker({
		    	position: {lat: m.latitud, lng: m.longitud},
		    	map: this.map,
		    	title: m.nombre
		  	});
		  	console.log('Agregando marker', marker);
    	}
    });
  }
 
  initMap(){
 
    this.mapInitialised = true;
 
	let latLng = new google.maps.LatLng(this.latitude, this.longitude);

	let mapOptions = {
		center: latLng,
		zoom: 15
	}

	let ref;
	if(typeof this.mapElement === 'undefined'){
		ref = document.getElementById(this.mapId);
	} else {
		ref = this.mapElement.nativeElement;
	}

	this.map = new google.maps.Map(ref, mapOptions);
	this.loadMarkers();
 
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
