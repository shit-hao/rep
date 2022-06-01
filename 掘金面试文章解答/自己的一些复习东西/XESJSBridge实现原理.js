const ToString = Object.prototype.toString;

const XesJsbridge = {};

const MessageHandlers = {};

const BridgeName = "viewQuestion teacherP2PH5, startRecord, stopRecordH5, getAudioUrlH5, voiceValueH5, goBackH5, openTakepicture, xesApp_base_setCustomerState, closeWindow, openNativeView, getUserToken, getUserInfo, getUserDeviceInfo, dialog, dialogBox, showShareView, getUserLanguage, scannerImg, getHaveBindCellphone, getHaveBindCellphoneIntent, autoGoBack, openLoginVCOnGuestMode, getGuestMode, setShareImg, setShareContent, cannotGoBack, networkType, Monitor, isNetAvailable, setTitle, tokeninvalid, showLoadingView, showAlert, showToast, getVersion, interactive_oralActivity_recordVideo, interactive_oralActivity_playVideo, openServiceAddressView, moneyChanger_openExchangeMap, openCustomerService,xesApp_business_openTakeMorePictures,xesApp_business_uploadPictures";

// 初始化 注册native回调h5根方法
const init = function() {
  ready(() => {
    handleRegister();
  });
};

// 初始化bridge
const createBridge = function(callback) {
  if (window.WebViewJavascriptBridge) {
    return callback(WebViewJavascriptBridge);
  } else {
    // register
    document.addEventListener("WebViewJavascriptBridgeReady", function() {
      callback(WebViewJavascriptBridge)
    }, false);
    // register ios
    if (window.WVJBCallbacks) {
      return window.WVJBCallbacks.push(callback);
    }
    window.WVJBCallbacks = [callback];
    const WVJBIframe = document.createElement("iframe");
    WVJBIframe.style.display = "none";

    const ua = navigator.userAgent.toLowerCase();
    if (!ua.match(/MicroMessenger/i)) {
      WVJBIframe.src = "https://__bridge_loaded__";
    }

    document.documentElement.appendChild(WVJBIframe);
    setTimeout(function() {
      document.documentElement.removeChild(WVJBIframe)
    }, 0);
  }
};

/**
 * @method handleRegister
 * @description 全局注册native回调H5根方法
 */
const handleRegister = function() {
  window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.registerHandler("h5RegisterHandler", (data, response) => {
    const result = (typeof data) === "string" ? JSON.parse(data) : data;
    const handler = MessageHandlers[result.handlerName];
    if (handler) {
      handler(result, response);
    } else {
      console.error("当前方法未注册！");
    }
  });
};

// 调用bridge
const callHandler = function(handName=null, param=null, callback=null) {
  window.WebViewJavascriptBridge && window.WebViewJavascriptBridge.callHandler(handName, param, callback);
};

/**
 * @description h5注册native回调方法
 * @method registerHandler
 * @param {string} handlerName 方法名
 * @param {Function} handler 回调
 */
const registerHandler = XesJsbridge.registerHandler = function (handlerName, handler) {
  MessageHandlers[handlerName] = handler;
};

// api调用方法
const invoke = XesJsbridge.invoke = function (a1="", a2=null, a3=null) {
  if (a1 && (typeof a1) === "string" && !!BridgeName.match(a1)) {
    if (a2 && a2 !== null && (ToString.call(a2) === "[object Object]" || ToString.call(a2) === "[object String]") ) {
      callHandler(a1, a2, (res) => {
        a3 && a3(res);
      });
      return;
    }
    if (a2 && ToString.call(a2) === "[object Function]") {
      callHandler(a1, null, (res) => {
        a2 && a2(res);
      });
      return;
    }
    callHandler(a1, null, null);
    return;
  }
  console.warn("未找到该方法");
};

const ready = XesJsbridge.ready = function(fn) {
  createBridge(fn);
};

init();

export default XesJsbridge;
//  init -> ready -> createBridge


// 由webview注入一个变量WebViewJavascriptBridge 然后在这个变量上注册一个h5 RegisterHandler,通过cb调用 callHandler是invoke调用

