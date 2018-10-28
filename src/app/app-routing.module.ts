import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
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

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'best-sales',
        component: BestSalesComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: 'you-editor',
        component: ForYouComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'products',
        component: ProductsComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'you-cart',
        component: ShoppingCardComponent
    },
    {
        path: 'profile',
        component: UserComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }

];

@NgModule({
    imports: [
        RouterModule.forRoot(ROUTES)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }