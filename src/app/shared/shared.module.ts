import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { UIPluginsModule } from './ui-plugins/index.module'
import { UtilPluginsModule } from './util-plugins/index.module'
import { ClickOutsideModule } from 'ng-click-outside'

@NgModule({
    imports: [
        RouterModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        HttpClientModule,
        UIPluginsModule,
        UtilPluginsModule
    ],
    declarations: [],
    exports: [
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ClickOutsideModule,
        UIPluginsModule,
        UtilPluginsModule
    ]
})
export class SharedModule {
}
