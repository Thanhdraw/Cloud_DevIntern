import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { FooDetailComponent } from './foo-detail/foo-detail.component';

const routes: Routes = [
  {path: '', component: MainComponent },
  {path:'food-detail',component:FooDetailComponent},
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule],
  
})

export class AppRoutingModule {
  
 }
