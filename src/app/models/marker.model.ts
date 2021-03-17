export class marker {
    lat: number;
    lng: number;
    label: any;
    urlIcon: any;
    draggable: boolean;
  
    constructor(Marker: { lat: number; lng: number; label: any; urlIcon: any; draggable: boolean; }) {
        {
          this.lat = Marker.lat;
          this.lng = Marker.lng;
          this.label = Marker.label;
          this.urlIcon = Marker.urlIcon;
          this.draggable = Marker.draggable;
        }
    }
  }

  