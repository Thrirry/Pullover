import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { BestSalesComponent } from './best-sales/best-sales.component';
import { ForYouComponent } from './for-you/for-you.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { ShoppingCardComponent } from './shopping-card/shopping-card.component';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, ProductsComponent, BestSalesComponent, ForYouComponent, AboutComponent, ContactComponent, LoginComponent, ShoppingCardComponent, UserComponent, RegisterComponent, PageNotFoundComponent]
})
export class FeaturesModule { }
