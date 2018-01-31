import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { ProductDetailComponent } from './products/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductGuardService } from './services/product-guard.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent,
    ConvertToSpacesPipe,
    ProductDetailComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: 'products',     component: ProductListComponent       },
      { path: 'products/:id',
        component: ProductDetailComponent,
        canActivate: [ ProductGuardService ],
      },
      { path: 'home',         component: HomeComponent              },
      { path: '',             redirectTo: 'home', pathMatch: 'full' },
      { path: '**',           redirectTo: 'home', pathMatch: 'full' },
    ],
      { useHash: false })
  ],
  providers: [ProductGuardService],
  bootstrap: [AppComponent]
})

export class AppModule { }
