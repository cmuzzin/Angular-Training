import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {ProductListComponent} from "./products/product-list.component";
import {RouterModule} from "@angular/router";
import {WelcomeComponent} from "./home/welcome.component";
import {ProductsModule} from "./products/products.module";

@NgModule({
    declarations: [
        AppComponent,
        WelcomeComponent
    ],
    imports: [
        BrowserModule,
        ProductsModule,
        RouterModule.forRoot([
            {path: 'welcome', component: WelcomeComponent},
            {path: 'products', component: ProductListComponent, children: []},
            {path: '', redirectTo: 'welcome', pathMatch: 'full'},
            {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
        ])
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
