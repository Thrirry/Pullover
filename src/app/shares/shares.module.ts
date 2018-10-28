import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CardProductComponent } from './components/card-product/card-product.component';
import { IntroducingTShirtComponent } from './components/introducing-t-shirt/introducing-t-shirt.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HeaderComponent, FooterComponent, CardProductComponent, IntroducingTShirtComponent]
})
export class SharesModule { }
