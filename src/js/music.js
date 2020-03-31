/**
 * 播放音乐
 * @param {Boolean} paly 是否播放音乐
 * @param {Element} myMusicDom 音乐的audio标签
 * @param {Element} musicIcon 音乐的icon
 */
class Music {
  constructor(play, myMusicDom, musicIcon) {
    this.play = play;
    this.musicDom = myMusicDom;
    this.musicBtn = musicIcon;
  }
  init() {
    this.initialize();
    this.operationFunc();
  }

  initialize() {
    if (this.play) {
      this.musicDom.play();
      this.musicBtn.classList.remove('pause');
    } else {
      this.musicDom.pause();
      this.musicBtn.classList.add('pause');
    }
  }

  operationFunc() {
    this.musicBtn.addEventListener('click', () => {
      this.play = !this.play;
      this.initialize();
    }, false);
  }
}

export default Music;