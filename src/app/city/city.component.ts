import { Component } from '@angular/core';
import { PointsOfInterest } from './PointOfInterest';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent {
  pointsOfInterest: PointsOfInterest[] = [];
}
