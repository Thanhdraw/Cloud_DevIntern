import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FoodService } from '../food.service';
import { Food } from '../hero';
import { FOODS } from '../mock-foods';

@Component({
  selector: 'app-foo-detail',
  templateUrl: './foo-detail.component.html',
  styleUrls: ['./foo-detail.component.css']
})
export class FooDetailComponent {
  @Input() food?: Food;
  Foods: Food[] = [];
  constructor(private foodService: FoodService) {}
  getFood(): void {
    this.foodService.getFood()
        .subscribe(foods => this.Foods = FOODS);
  }
  ngOnInit(): void {
    this.getFood();
  }
} 
