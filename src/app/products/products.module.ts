import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasicsPageComponent } from './pages/basics-page/basics-page.component';
import { NumbersPageComponent } from './pages/numbers-page/numbers-page.component';
import { UncommonPageComponent } from './pages/uncommon-page/uncommon-page.component';

import { ProductsRoutingModule } from './products-routing.module';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';

@NgModule({
  imports: [CommonModule, PrimeNgModule, ProductsRoutingModule],
  declarations: [
    BasicsPageComponent,
    NumbersPageComponent,
    UncommonPageComponent,
  ],
})
export class ProductsModule {}
