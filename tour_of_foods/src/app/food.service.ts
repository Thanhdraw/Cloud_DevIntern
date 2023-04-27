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
  getfood(id: number): Observable<Food> {
    // For now, assume that a hero with the specified `id` always exists.
    // Error handling will be added in the next step of the tutorial.
    const food = FOODS.find((h) => h.id === id)!;
    // this.messageService.add(`HeroService: fetched hero id=${id}`);
    return of(food);
  }
  constructor() { }
}
