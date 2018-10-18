import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarComponent} from "./star.component";
import {ConvertToSpacesPipe} from "./convert-to-spaces.pipe";
import {FormsModule} from "@angular/forms";

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [StarComponent, ConvertToSpacesPipe],
    exports: [StarComponent, ConvertToSpacesPipe, CommonModule, FormsModule],
    providers: []
})
export class SharedModule {
}
