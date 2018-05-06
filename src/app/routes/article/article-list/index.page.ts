import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { ArticleApi } from '../../../api/article.api'

const swal = require('sweetalert')

interface Article {
  id: string | number
  title: string
  summary: string
  content: string
  createDate: string
  readNumber: string
  commentNumber: string
}

@Component({
  selector: 'app-article-list',
  templateUrl: './index.page.html',
  styleUrls: [ './index.page.scss' ]
})
export class ArticleListPageComponent implements OnInit {
  articleList: Article[] = []

  constructor (private router: Router) {
  }

  ngOnInit () {
    this.queryArticleList()
  }

  onArticleItemClick (item: any) {
    this.router.navigate([ '/article/details', item.id ])
  }

  queryArticleList () {
    ArticleApi.queryArticleList().then((resp: any) => {
      if (resp.error.code === 200) {
        this.articleList = resp.data.list.map((item: any) => ({
          id: item.id,
          title: item.name,
          summary: item.summary,
          content: item.content,
          createDate: item.create_time,
          readNumber: '0',
          commentNumber: '0',
        }))
      } else {
        swal(resp.error.message)
      }
    }).catch(msg => alert(msg))
  }
}
