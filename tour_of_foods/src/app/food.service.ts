import { Injectable } from '@angular/core';
import { Food } from './hero';
import { FOODS } from './mock-foods';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  getFood(): Observable<Food[]> {
    const Foods = of(FOODS);
    return Foods;
  }
  constructor() { }
}
