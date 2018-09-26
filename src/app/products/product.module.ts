import {NgModule} from '@angular/core';
import {ProductListComponent} from "./product-list.component";
import {SharedModule} from "../shared/shared.module";
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {RouterModule} from "@angular/router";
import {ProductDetailGuard} from "./product-detail/product-detail.guard";

@NgModule({
    imports: [
        RouterModule.forChild([
            {path: 'products', component: ProductListComponent},
            {path: 'products/:id', canActivate: [ProductDetailGuard], component: ProductDetailComponent}
        ]),
        SharedModule
    ],
    declarations: [ProductListComponent, ProductDetailComponent]
})
export class ProductModule {
}
