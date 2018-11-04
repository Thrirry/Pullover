import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { IntroducingTShirtComponent } from './components/introducing-t-shirt/introducing-t-shirt.component';

export const SHARED_MODULE: any[] = [
  CommonModule,
  RouterModule,
];

export const SHARED_COMPONENTS: any[] = [
  HeaderComponent,
];


@NgModule({
  imports: [...SHARED_MODULE],
  exports: [...SHARED_COMPONENTS],
  declarations: [...SHARED_COMPONENTS]
})
export class SharesModule { }
