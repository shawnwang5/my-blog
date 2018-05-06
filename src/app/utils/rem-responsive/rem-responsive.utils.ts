/**
 * todo: 暂时不添加 debounce
 */
export class RemResponsiveUtils {
  static baseFontSize = 100
  static baseDocWidth = 750
  static maxDocWidth = 750
  static minDocWidth = 320

  static onResize () {
    let docWidth: number = document.documentElement.clientWidth
    if (docWidth > RemResponsiveUtils.maxDocWidth) {
      docWidth = RemResponsiveUtils.maxDocWidth
    } else if (docWidth < RemResponsiveUtils.minDocWidth) {
      docWidth = RemResponsiveUtils.minDocWidth
    }
    (<any>document.querySelector('html')).style.fontSize = (docWidth / RemResponsiveUtils.baseDocWidth) *
      RemResponsiveUtils.baseFontSize + 'px'
  }

  static init () {
    RemResponsiveUtils.onResize()
    window.onresize = RemResponsiveUtils.onResize
  }
}
