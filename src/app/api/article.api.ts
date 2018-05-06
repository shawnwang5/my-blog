import { HttpUtils } from '../utils/http/http.utils'
import {environment} from '../../environments/environment';

export class ArticleApi {
    static getServerURL (path) {
        return environment.apiBaseURL + path
    }

    static post (url: string, params: Object) {
        return HttpUtils.post(url, params)
    }

    static queryArticleList () {
        return ArticleApi.post(ArticleApi.getServerURL('/articleList'), {})
    }
}
