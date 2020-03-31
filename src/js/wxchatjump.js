// 解决微信软键盘弹出后导致页面下方出现大量空白的问题

const isWeiXinAndIos = () => {
  let ua = '' + window.navigator.userAgent.toLowerCase()
  let isWeixin = /MicroMessenger/i.test(ua)
  let isIos = /\(i[^;]+;( U;)? CPU.+Mac OS X/i.test(ua)
  return isWeixin && isIos
}
const weChatInputBug = () => {
  let myFunction
  let isWXAndIos = isWeiXinAndIos();
  if (isWXAndIos) {
    document.body.addEventListener('focusin', () => {
      clearTimeout(myFunction)
    })
    document.body.addEventListener('focusout', () => {
      clearTimeout(myFunction)
      myFunction = setTimeout(function() {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'})
      }, 100)
    });
  }
}

export default weChatInputBug;