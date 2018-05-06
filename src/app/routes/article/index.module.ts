import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes } from '@angular/router'

import { SharedModule } from '../../shared/shared.module'
import { ArticleListPageComponent } from './article-list/index.page'
import { ArticleDetailsPageComponent } from './article-details/index.page'

const routes: Routes = [
    { path: 'list', component: ArticleListPageComponent },
    { path: 'details/:articleId', component: ArticleDetailsPageComponent },
]

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        SharedModule,
        CommonModule
    ],
    declarations: [
      ArticleDetailsPageComponent,
      ArticleListPageComponent
    ],
    exports: [
        RouterModule
    ]
})
export class ArticleModule {
}
