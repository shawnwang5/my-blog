import axios from 'axios'

export class HttpUtils {
  static post (url: string, params: Object) {
    return new Promise(function (resolve, reject) {
      axios.post(url, params, {})
        .catch(function (error) {
          if (error.response.status === 500) {
            try {
              resolve(JSON.parse(error.response.data.message))
            } catch (e) {
              resolve({
                code: error.response.status,
                message: error.response.data.message,
              })
            }
          } else {
            reject(error)
          }
        })
        .then(function (response: any) {
          if (response && typeof response.data !== 'undefined') {
            resolve(response.data)
          }
        })
    })
  }
}
