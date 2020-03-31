/**
 * 获取URL参数
 * @param {string} name 关键字
 */
export const GetQueryString = (name) => {
  var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
  var r = window.location.search.substr(1).match(reg);
  if(r !== null)return  unescape(r[2]); return null;
}

/**
 * 横屏检测
 */
export const horizontalScreenPrompts = () => {
  const hengshuping = () => {
    if(window.orientation==180||window.orientation==0){
      document.querySelector('.main-box').style.display = 'block';
      document.querySelector('.landscape').style.display = 'none';
    }
    if(window.orientation==90||window.orientation==-90){
      document.querySelector('.main-box').style.display = 'none';
      document.querySelector('.landscape').style.display = 'flex';
    }
  }

  window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", this.hengshuping, false);
}

/**
 * ga，需要先加载ga
 * @param {string} incident ga监测的内容
 */

export const gaFunc = (incident) => {
  gtag('event', 'click', { 'event_category': 'button','event_label': incident});
}

/**
 * layer的弹窗，需要加载layUI
 * @param {string} text 弹窗的内容
 */
export const layer = (text) => {
  layui.use('layer', function(){
    var layer = layui.layer;
    layer.msg(text);
  });
}

/**
 * layUI中的loading，需要加载layUI
 * @param {boolean} bool 是否开启loading
 */
export const layLoading = (bool) => {
  layui.use('layer', function(){
    var layer = layui.layer;
    if (bool) {
      layer.load(1);
    } else {
      layer.closeAll();
    }
  });
}

/**
 * 环境监测
 */
export const local = () => {
  const nowUrl = window.location.href;
  if (
    nowUrl.indexOf('localhost') > -1 || 
    nowUrl.indexOf('192.168') > -1 || 
    nowUrl.indexOf('127.0.0.1') > -1
  ) {
    return 'local';
  } else if (nowUrl.indexOf('demo-') > -1) {
    return 'demo';
  } else {
    return 'line';
  }
}

/**
 * 计数函数
 * @param {number} countDownNuber 计时的时间
 * @param {number} time 每次计时的间隔时间
 * @param {Boolean}} direction 正序还是倒序
 * @param {function} next 回调函数
 */
export const countDownFunc = (countDownNuber, time, direction, next) => {
  function countDown(countDownNuber) {
    if (countDownNuber == 0) {
      next();
    } else {
      setTimeout(() => {
        direction ? countDownNuber ++ : countDownNuber --;
        countDown(countDownNuber);
      }, time);
    }
  }
  countDown(countDownNuber);
}