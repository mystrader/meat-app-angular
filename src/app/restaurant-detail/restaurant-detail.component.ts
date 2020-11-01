import { Component, Injectable, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


import { RestaurantService } from '../restaurants/restaurants.service';
import { Restaurant } from '../restaurants/restaurant/restaurant.model';


@Component({
  selector: 'mt-restaurant-detail',
  templateUrl: './restaurant-detail.component.html'
})


export class RestaurantDetailComponent implements OnInit {
 
  restaurant : Restaurant

  constructor(private restaurantsService : RestaurantService,
              private route : ActivatedRoute ) { }

  ngOnInit() {
    this.restaurantsService.restaurantById(this.route.snapshot.params['id'])
    .subscribe(restaurant => this.restaurant = restaurant)
  }

}
