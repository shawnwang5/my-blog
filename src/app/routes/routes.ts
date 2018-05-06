import { Routes } from '@angular/router'

import { LayoutComponent } from '../layout/layout.component'
import { LayoutChildGuardService } from '../layout/layout-child-guard.service'

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivateChild: [
      LayoutChildGuardService
    ],
    children: [
      { path: 'article', loadChildren: './article/index.module#ArticleModule' },
      { path: '', redirectTo: '/article/list', pathMatch: 'full' }
    ]
  },
  { path: '**', redirectTo: '/article/list' }
]
