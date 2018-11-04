import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { HttpModule, Http } from '@angular/http';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found/page-not-found.component'
import { AboutComponent } from './features/about/about.component'
import { BestSalesComponent } from './features/best-sales/best-sales.component'
import { ContactComponent } from './features/contact/contact.component'
import { ForYouComponent } from './features/for-you/for-you.component'
import { LoginComponent } from './features/login/login.component'
import { ProductsComponent } from './features/products/products.component'
import { RegisterComponent } from './features/register/register.component'
import { ShoppingCardComponent } from './features/shopping-card/shopping-card.component'
import { UserComponent } from './features/user/user.component'

import { SharesModule } from './shares/shares.module';

export const APP_MODULES: any[] = [
  BrowserModule,
  AppRoutingModule,
  HttpClientModule,
  SharesModule
];

export const APP_COMPONENTS: any[] = [
  AppComponent,
  HomeComponent,
  PageNotFoundComponent,
  AboutComponent,
  BestSalesComponent,
  ContactComponent,
  ForYouComponent,
  LoginComponent,
  ProductsComponent,
  RegisterComponent,
  ShoppingCardComponent,
  UserComponent,
];

@NgModule({
  declarations: [...APP_COMPONENTS],
  imports: [...APP_MODULES],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
