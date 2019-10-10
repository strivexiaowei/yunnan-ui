export class ScratchCard {
  config = {
    // canvas元素
    canvas: null,
    // 直接全部刮开的百分比
    showAllPercent: 65,
    // 图片图层
    coverImg: null,
    // 纯色图层
    coverColor: null,
    // 全部刮开回调
    doneCallback: null,
    // 擦除半径
    radius: 20,
    // 屏幕倍数
    pixelRatio: 1,
    // 展现全部的淡出效果时间（ms）
    fadeOut: 2000,
  };
  ctx = null;
  offsetX = null;
  offsetY = null;
  isDown = false;
  done = false;
  constructor(config: {}) {
    Object.assign(this.config, config);
  }
  init() {
    window.addEventListener('touchmove', function (e) {
      e.preventDefault();
    }, { passive: false });
    const that = this;
    this.ctx = this.config.canvas.getContext('2d');
    this._addEvent();

    if (this.config.coverImg) {
      // 如果设置的图片涂层
      const coverImg = new Image();
      coverImg.src = this.config.coverImg;
      coverImg.onload = () => {
        that.ctx.drawImage(coverImg, 0, 0);
        that.ctx.globalCompositeOperation = 'destination-out';
      };
    } else {
      // 如果没设置图片涂层，则使用纯色涂层
      this.ctx.fillStyle = this.config.coverColor;
      this.ctx.fillRect(0, 0, this.config.canvas.width, this.config.canvas.height);
      this.ctx.globalCompositeOperation = 'destination-out';
    }
  }
  _addEvent() {
    this.config.canvas.addEventListener('touchstart', this._eventDown.bind(this), { passive: false });
    this.config.canvas.addEventListener('touchend', this._eventUp.bind(this), { passive: false });
    this.config.canvas.addEventListener('touchmove', this._scratch.bind(this), { passive: false });
    this.config.canvas.addEventListener('mousedown', this._eventDown.bind(this), { passive: false });
    this.config.canvas.addEventListener('mouseup', this._eventUp.bind(this), { passive: false });
    this.config.canvas.addEventListener('mousemove', this._scratch.bind(this), { passive: false });
  }
  _eventDown(e) {
    e.preventDefault();
    this.isDown = true;
    this.offsetX = this.config.canvas.offsetLeft;
    this.offsetY = this.config.canvas.offsetTop;
    console.log(this.offsetY);
  }
  _eventUp(e) {
    e.preventDefault(e);
    this.isDown = false;
  }
  // 刮涂层
  _scratch(e) {
    e.preventDefault();
    const that = this;
    if (!this.done && this.isDown) {
      if (e.changedTouches) {
        e = e.changedTouches[e.changedTouches.length - 1];
      }
      const scrollLeft = document.querySelector('.rt').parentNode['scrollLeft'];
      const scrollTop = document.querySelector('.rt').parentNode['scrollTop'];
      const x = (e.clientX + scrollLeft || e.pageX) - this.offsetX || 0;
      const y = (e.clientY + scrollTop || e.pageY) - this.offsetY || 0;
      const ctx = this.ctx;
      ctx.beginPath();
      ctx.arc(x * that.config.pixelRatio, y * that.config.pixelRatio, that.config.radius * that.config.pixelRatio, 0, Math.PI * 2);
      ctx.fill();
      if (+this._getFilledPercentage() > this.config.showAllPercent) {
        this._scratchAll();
      }
    }
  }
  // 刮开全部涂层
  _scratchAll() {
    const that = this;
    this.done = true;
    if (this.config.fadeOut > 0) {
      // 先使用CSS opacity清除，再使用canvas清除
      this.config.canvas.style.transition = 'all ' + this.config.fadeOut / 1000 + 's linear';
      this.config.canvas.style.opacity = '0';
      setTimeout(() => {
        that._clear();
      }, this.config.fadeOut)
    } else {
      // 直接使用canvas清除
      that._clear();
    }
    if (this.config.doneCallback) {
      this.config.doneCallback();
    }
  }
  // 清除全部涂层
  _clear() {
    this.ctx.fillRect(0, 0, this.config.canvas.width, this.config.canvas.height);
  }
  // 获取刮开区域百分比
  _getFilledPercentage() {
    const imgData = this.ctx.getImageData(0, 0, this.config.canvas.width, this.config.canvas.height);
    const pixels = imgData.data;
    // console.log(pixels);
    const transPixels = [];
    for (let i = 0; i < pixels.length; i += 4) {
      if (pixels[i + 3] < 128) {
        transPixels.push(pixels[i + 3]);
      }
    }
    return (transPixels.length / (pixels.length / 4) * 100).toFixed(2);
  }
}
