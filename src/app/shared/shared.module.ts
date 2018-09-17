import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StarComponent} from "./star.component";
import {ConvertToSpacesPipe} from "./convert-to-spaces.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [StarComponent, ConvertToSpacesPipe],
    exports: [StarComponent, ConvertToSpacesPipe],
    providers: []
})
export class SharedModule {
}
