import axios from 'axios'
import Music from './music';

class share {
  constructor(url) {
    this.title = '科勒厨房守护你的健康',
    this.description = '探索优惠大促多重惊喜',
    this.image_url = 'https://kohlerkitchens.brandsh.cn/h1/libs/share.jpg';
    this.nowUrl = window.location.href;
    this.shareUrl = url;
  }

  shareApi() {
    var reg = new RegExp("&", "g"); //g,表示全部替换。
    var newurl = this.nowUrl.replace(reg, "||");
    return axios.request({
      url: `https://kohlerkitchens.brandsh.cn/h1/libs/config.php?url=${newurl}`,
      method: 'get'
    })
  }

  shareWx() {
    let _this = this;
    let imageUrl = this.image_url;
    let title = this.title;
    let desc = this.description;
    this.shareApi().then(resObject => {
      console.log(resObject);
      const resData = resObject.data;
      let appId = resData.appId;
      let timestamp = resData.timestamp;
      let nonceStr = resData.nonceStr;
      let signature = resData.signature;
      if (signature && nonceStr && timestamp && wx) {
        wx.config({
          debug: false,
          appId,
          timestamp,
          nonceStr,
          signature,
          jsApiList: [
            'checkJsApi',
            'onMenuShareTimeline',
            'onMenuShareAppMessage'
          ]
        });
        wx.ready(function () {
          // 背景音乐播放
          new Music(true).init();
          wx.onMenuShareTimeline({
            title: title,
            desc: desc,
            link: _this.shareUrl,
            imgUrl: imageUrl,
            success: function () {},
            cancel: function () {}
          });
          wx.onMenuShareAppMessage({
            title: title,
            desc: desc,
            link: _this.shareUrl,
            imgUrl: imageUrl,
            success: function () {},
            cancel: function () {}
          });
        });
        wx.error(function (res) {
          console.log('wechat jssdk error: ', res);
        });
      }
    });
  }
}
export default share