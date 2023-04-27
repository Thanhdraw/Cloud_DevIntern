import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeadeComponent } from './heade/heade.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { FormsModule } from '@angular/forms';
import { FooDetailComponent } from './foo-detail/foo-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AuthorComponent } from './author/author.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadeComponent,
    FooterComponent,
    MainComponent,
    FooDetailComponent,
    AuthorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
