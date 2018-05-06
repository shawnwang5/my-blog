import { Component, OnInit } from '@angular/core'
import { Router, ActivatedRoute } from '@angular/router'
import { Location } from '@angular/common'

declare const marked: any

const data1 = require('html-loader!./html常用meta标签.md')
const data4 = require('html-loader!./javascript常用函数.md')

@Component({
  selector: 'app-article-details',
  templateUrl: './index.page.html',
  styleUrls: [ './index.page.scss' ]
})
export class ArticleDetailsPageComponent implements OnInit {
  pageContent: string = marked(data1)
  articleId = 0
  articleTitle = 'html常用meta标签'

  constructor (private router: Router, private route: ActivatedRoute, private location: Location) {
    this.articleId = +route.snapshot.params.articleId || 0
  }

  ngOnInit (): void {
    if (this.articleId === 4) {
      this.pageContent = marked(data4)
      this.articleTitle = 'javascript常用函数'
    }
  }

  back () {
    this.location.back()
  }
}
