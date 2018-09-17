import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductListComponent} from "./product-list.component";
import {FormsModule} from "@angular/forms";
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import { ProductDetailComponent } from './product-detail/product-detail.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        SharedModule,
        HttpClientModule
    ],
    declarations: [ProductListComponent, ProductDetailComponent],
    exports: [FormsModule, ProductListComponent],
    providers: []
})
export class ProductsModule {
}
