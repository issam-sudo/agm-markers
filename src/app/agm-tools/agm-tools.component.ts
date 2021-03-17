import { Component, OnInit } from '@angular/core';
import { marker } from '../models/marker.model';
import markerData  from '../data/markerData.json';


@Component({
  selector: 'app-agm-tools',
  templateUrl: './agm-tools.component.html',
  styleUrls: ['./agm-tools.component.scss']
})

export class AgmToolsComponent {
  viewType: any='hybrid';  //for default 'hybrid'
 
// google maps zoom level
zoom: number = 8;
  
// initial center position for the map
lat: number = 51.673858;
lng: number = 7.815982;
  
clickedMarker(label: string, index: number) {
  console.log(`clic sur le marker: ${label || index}`)
}

markers: marker[] = markerData
}

