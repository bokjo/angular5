import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductModule } from './products/product.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'home', component: HomeComponent              },
      { path: '',     redirectTo: 'home', pathMatch: 'full' },
      { path: '**',   redirectTo: 'home', pathMatch: 'full' },
    ],
      { useHash: false }),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
