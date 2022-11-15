// 获取滚动条高度
export const getScrollTop = () => {
  let scrollTop
  if (window.pageYOffset) {
    scrollTop = window.pageYOffset
  } else if (document.compatMode && document.compatMode !== 'BackCompat') {
    scrollTop = document.documentElement.scrollTop
  } else if (document.body) {
    scrollTop = document.body.scrollTop
  }
  return scrollTop
}