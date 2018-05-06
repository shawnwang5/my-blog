import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { ClickOutsideModule } from 'ng-click-outside'
import { SelectComponent } from './select/index.component'
import { LoadingComponent } from './loading/index.component'

@NgModule({
    imports: [
        RouterModule,
        ClickOutsideModule,
        CommonModule
    ],
    declarations: [
        LoadingComponent,
        SelectComponent
    ],
    exports: [
        SelectComponent,
        LoadingComponent,
    ]
})
export class UIPluginsModule {
}
