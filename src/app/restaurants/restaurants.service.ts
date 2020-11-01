import {Injectable} from '@angular/core';
import {Http} from '@angular/http'

import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

import { Restaurant } from './restaurant/restaurant.model';
import { MEAT_API } from './../app.api';
import {ErrorHandler} from '../app.error-handler';


@Injectable()
export class RestaurantService{

    constructor(private http: Http){}

    restaurants(): Observable<Restaurant[]>{
        return this.http.get(`${MEAT_API}/restaurants`)
        .map(response => response.json())
        .catch(ErrorHandler.handleError)
    }

    restaurantById(id: string): Observable<Restaurant>{
        return this.http.get(`${MEAT_API}/restaurants/${id}`)
        .map(reponse => reponse.json()) //no angular é um método
        .catch(ErrorHandler.handleError)
    }

    //Este aqui é para rota filha
    reviewsOfRestaurant(id: string): Observable<any>{
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`)
        .map(reponse => reponse.json()) //no angular é um método
        .catch(ErrorHandler.handleError)
    }

}


