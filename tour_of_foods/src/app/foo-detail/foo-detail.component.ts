import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FoodService } from '../food.service';
import { Food } from '../hero';
import { FOODS } from '../mock-foods';

@Component({
  selector: 'app-foo-detail',
  templateUrl: './foo-detail.component.html',
  styleUrls: ['./foo-detail.component.css']
})
export class FooDetailComponent implements OnInit {
  @Input() food?: Food;
  foods=FOODS;
  selectedFood?: Food;

  onSelect(foods: Food): void {
    this.selectedFood = foods;
  }

  Foods: Food[] = [];
  constructor(
    private route: ActivatedRoute,
    private location:Location,
    private foodService: FoodService) {}
  getFood(): void {
    this.foodService.getFood()
        .subscribe(foods => this.foods = FOODS);
  }
  getfood(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.foodService.getfood(id)
      .subscribe(foods => this.foods = FOODS);
  }
  ngOnInit(): void {
    this.getFood();
  }
} 
