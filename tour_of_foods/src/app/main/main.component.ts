import { Component } from '@angular/core';
import { Food } from '../hero';
import { FOODS } from '../mock-foods';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  foods=FOODS;
  selectedFood?: Food;

  onSelect(foods: Food): void {
    this.selectedFood = foods;
  }
  Foods: Food[] = [];
  constructor(private foodService: FoodService) {}
  getFood(): void {
    this.foodService.getFood()
        .subscribe(foods => this.foods = FOODS);
  }
  ngOnInit(): void {
    this.getFood();
  }
}
