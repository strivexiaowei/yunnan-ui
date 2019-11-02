var CreatedOKLodop7766 = null;

//====判断是否需要安装CLodop云打印服务器:====
function needCLodop() {
  try {
    var ua = navigator.userAgent;
    if (ua.match(/Windows\sPhone/i) != null) return true;
    if (ua.match(/iPhone|iPod/i) != null) return true;
    if (ua.match(/Android/i) != null) return true;
    if (ua.match(/Edge\D?\d+/i) != null) return true;

    var verTrident = ua.match(/Trident\D?\d+/i);
    var verIE = ua.match(/MSIE\D?\d+/i);
    var verOPR = ua.match(/OPR\D?\d+/i);
    var verFF = ua.match(/Firefox\D?\d+/i);
    var x64 = ua.match(/x64/i);
    if ((verTrident == null) && (verIE == null) && (x64 !== null))
      return true;
    else
    if (verFF !== null) {
      verFF = verFF[0].match(/\d+/);
      if ((verFF[0] >= 41) || (x64 !== null)) return true;
    } else
    if (verOPR !== null) {
      verOPR = verOPR[0].match(/\d+/);
      if (verOPR[0] >= 32) return true;
    } else
    if ((verTrident == null) && (verIE == null)) {
      var verChrome = ua.match(/Chrome\D?\d+/i);
      if (verChrome !== null) {
        verChrome = verChrome[0].match(/\d+/);
        if (verChrome[0] >= 41) return true;
      };
    };
    return false;
  } catch (err) {
    return true;
  };
};

//====页面引用CLodop云打印必须的JS文件：====
if (needCLodop()) {
  var head = document.head || document.getElementsByTagName("head")[0] || document.documentElement;
  var oscript = document.createElement("script");
  oscript.src = "http://localhost:8000/CLodopfuncs.js?priority=1";
  head.insertBefore(oscript, head.firstChild);

  //引用双端口(8000和18000）避免其中某个被占用：
  oscript = document.createElement("script");
  oscript.src = "http://localhost:18000/CLodopfuncs.js?priority=0";
  head.insertBefore(oscript, head.firstChild);
};

//====获取LODOP对象的主过程：====
function getLodop(oOBJECT, oEMBED) {
  // var strHtmInstall = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
  // var strHtmUpdate = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
  // var strHtm64_Install = "<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>";
  // var strHtm64_Update = "<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>";
  // var strHtmFireFox = "<div>注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它！</div>";
  // var strHtmChrome = "<div>如果此前正常，仅因浏览器升级或重安装而出问题，需重新安装！</div><div>请选择安装，安装后请刷新页面！<div><span><a href='http://inc.justice.org.cn/service/rest/tk.File/47945dee3e9f4408aea9d9de48014671/download' target='_self'>1. 32位操作系统</a></span></div><div><span><a href='http://inc.justice.org.cn/service/rest/tk.File/f1ad75576df74b56a437ba6c3be4b4d0/download' target='_self'>2. 64位操作系统</a></span></div></div></div>";
  var strCLodopInstall = "<div>打印服务未安装或启动失败！请选择安装（若已安装，请先卸载），安装后请刷新页面！<div style='color:#1c84c6;font-weight:bold;'><span><a href='http://inc.justice.org.cn/service/rest/tk.File/1a82d5a61d6b4e628ea16861734a39b1/download' target='_self'>1. 万能云打印版 </a><span style='color:#f8ac69;'>（推荐）</span></span></div> <div><span><a href='http://inc.justice.org.cn/service/rest/tk.File/47945dee3e9f4408aea9d9de48014671/download' target='_self'>2. 32位操作系统</span><span><a href='http://inc.justice.org.cn/service/rest/tk.File/f1ad75576df74b56a437ba6c3be4b4d0/download' target='_self'> / 64位操作系统</a></a></span></div> </div>";
  // var strCLodopUpdate = "<div>CLodop云打印服务需升级！请选择安装升级，升级后请刷新页面！<div><span><a href='http://inc.justice.org.cn/service/rest/tk.File/47945dee3e9f4408aea9d9de48014671/download' target='_self'>1. 32位操作系统</a></span></div><div><span><a href='http://inc.justice.org.cn/service/rest/tk.File/f1ad75576df74b56a437ba6c3be4b4d0/download' target='_self'>2. 64位操作系统</a></span></div></div>";
  var LODOP;
  try {
    var isIE = (navigator.userAgent.indexOf('MSIE') >= 0) || (navigator.userAgent.indexOf('Trident') >= 0);
    if (needCLodop()) {
      try {
        LODOP = getCLodop();
      } catch (err) {};
      if (!LODOP && document.readyState !== "complete") {
        alert("C-Lodop没准备好，请稍后再试！");
        return;
      };
      if (!LODOP) {
        //  if (isIE) document.write(strCLodopInstall); else
        //  document.body.innerHTML=strCLodopInstall+document.body.innerHTML;
        return { code: 0, message: strCLodopInstall };
      } else {
        if (CLODOP.CVERSION < "3.0.4.3") {
          // if (isIE) document.write(strCLodopUpdate); else
          // document.body.innerHTML=strCLodopUpdate+document.body.innerHTML;
          return { code: 0, message: strCLodopInstall };
        };
        if (oEMBED && oEMBED.parentNode) oEMBED.parentNode.removeChild(oEMBED);
        if (oOBJECT && oOBJECT.parentNode) oOBJECT.parentNode.removeChild(oOBJECT);
      };
    } else {
      var is64IE = isIE && (navigator.userAgent.indexOf('x64') >= 0);
      //=====如果页面有Lodop就直接使用，没有则新建:==========
      if (oOBJECT != undefined || oEMBED != undefined) {
        if (isIE) LODOP = oOBJECT;
        else LODOP = oEMBED;
      } else if (CreatedOKLodop7766 == null) {
        LODOP = document.createElement("object");
        LODOP.setAttribute("width", 0);
        LODOP.setAttribute("height", 0);
        LODOP.setAttribute("style", "position:absolute;left:0px;top:-100px;width:0px;height:0px;");
        if (isIE) LODOP.setAttribute("classid", "clsid:2105C259-1E0C-4534-8141-A753534CB4CA");
        else LODOP.setAttribute("type", "application/x-print-lodop");
        document.documentElement.appendChild(LODOP);
        CreatedOKLodop7766 = LODOP;
      } else LODOP = CreatedOKLodop7766;

      //=====Lodop插件未安装时提示下载地址:==========
      if ((LODOP == null) || (typeof (LODOP.VERSION) == "undefined")) {
        if (navigator.userAgent.indexOf('Chrome') >= 0)
          //  document.body.innerHTML=strHtmChrome+document.body.innerHTML;
          return { code: 0, message: strCLodopInstall };
        if (navigator.userAgent.indexOf('Firefox') >= 0)
          // document.body.innerHTML = strHtmFireFox + document.body.innerHTML;
        return { code: 0, message: strCLodopInstall };
        if (is64IE) document.write(strHtm64_Install);
        else
        if (isIE) document.write(strHtmInstall);
        else
          // document.body.innerHTML = strHtmInstall + document.body.innerHTML;
          return { code: 0, message: strCLodopInstall };
        return LODOP;
      };
    };
    if (LODOP.VERSION < "6.2.2.2") {
      if (!needCLodop()) {
        if (is64IE) document.write(strHtm64_Update);
        else
        if (isIE) document.write(strHtmUpdate);
        else
          // document.body.innerHTML = strHtmUpdate + document.body.innerHTML;
          return { code: 0, message: strCLodopInstall };
      };
      return LODOP;
    };

    //===如下空白位置适合调用统一功能(如注册语句、语言选择等):===
    LODOP.SET_LICENSES("上海同道信息技术有限公司", "E600B38932E17DEFD05ED1E7F683CA26", "", "");
    //===========================================================
    return LODOP;
  } catch (err) {
    alert("getLodop出错:" + err);
  };
};
