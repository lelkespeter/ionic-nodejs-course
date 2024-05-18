import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant',
  templateUrl: './restaurant.component.html',
  styleUrls: ['./restaurant.component.scss'],
})
export class RestaurantComponent implements OnInit {
  @Input() restaurant: any;

  constructor() {}
  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {}

  getCuisine(cuisine) {
    return cuisine.join(', ');
  }
}
