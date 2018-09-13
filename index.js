var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { Plugin, Cordova, IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Wechat
 * @description
 * This plugin does something
 *
 * @usage
 * ```typescript
 * import { Wechat } from '@ionic-native/wechat';
 *
 *
 * constructor(private wechat: Wechat) { }
 *
 * ...
 *
 *
 * this.wechat.functionName('Hello', 123)
 *   .then((res: any) => console.log(res))
 *   .catch((error: any) => console.error(error));
 *
 * ```
 */
var Wechat = (function (_super) {
    __extends(Wechat, _super);
    function Wechat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wechat.prototype.isInstalled = function () {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Share a message to wechat app
     *
     * @example
     * <code>
     * this.wechat.share({
       *     message: {
       *        title: "Message Title",
       *        description: "Message Description(optional)",
       *        mediaTagName: "Media Tag Name(optional)",
       *        thumb: "http://YOUR_THUMBNAIL_IMAGE",
       *        media: {
       *            type: Wechat.Type.WEBPAGE,   // webpage
       *            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
       *        }
       *    },
       *    scene: this.wechat.Scene.TIMELINE   // share to Timeline
       * }.then(() => {
       *       console.log('share success');
       *    })
       *    .catch(error => {
       *       console.log(error);
       *    });
       * </code>
     */
    /**
       * Share a message to wechat app
       *
       * @example
       * <code>
       * this.wechat.share({
         *     message: {
         *        title: "Message Title",
         *        description: "Message Description(optional)",
         *        mediaTagName: "Media Tag Name(optional)",
         *        thumb: "http://YOUR_THUMBNAIL_IMAGE",
         *        media: {
         *            type: Wechat.Type.WEBPAGE,   // webpage
         *            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
         *        }
         *    },
         *    scene: this.wechat.Scene.TIMELINE   // share to Timeline
         * }.then(() => {
         *       console.log('share success');
         *    })
         *    .catch(error => {
         *       console.log(error);
         *    });
         * </code>
       */
    Wechat.prototype.share = /**
       * Share a message to wechat app
       *
       * @example
       * <code>
       * this.wechat.share({
         *     message: {
         *        title: "Message Title",
         *        description: "Message Description(optional)",
         *        mediaTagName: "Media Tag Name(optional)",
         *        thumb: "http://YOUR_THUMBNAIL_IMAGE",
         *        media: {
         *            type: Wechat.Type.WEBPAGE,   // webpage
         *            webpageUrl: "https://github.com/xu-li/cordova-plugin-wechat"    // webpage
         *        }
         *    },
         *    scene: this.wechat.Scene.TIMELINE   // share to Timeline
         * }.then(() => {
         *       console.log('share success');
         *    })
         *    .catch(error => {
         *       console.log(error);
         *    });
         * </code>
       */
    function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Sending an auth request to Wechat
     *
     * @example
     * <code>
     * this.wechat.auth.then((res) => { alert(res.code); });
     * </code>
     */
    /**
       * Sending an auth request to Wechat
       *
       * @example
       * <code>
       * this.wechat.auth.then((res) => { alert(res.code); });
       * </code>
       */
    Wechat.prototype.auth = /**
       * Sending an auth request to Wechat
       *
       * @example
       * <code>
       * this.wechat.auth.then((res) => { alert(res.code); });
       * </code>
       */
    function (scope, state) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * Send a payment request
     *
     * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
     * @example
     * <code>
     * var params = {
       *     mch_id: '10000100', // merchant id
       *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
       *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
       *     timestamp: '1439531364', // timestamp
       *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
       * };
     * this.wechat.sendPaymentRequest(params).then(() => {
       *     console.log("Success");
       * }).catch(error => {
       *     console.log(error);
       * });
     * </code>
     */
    /**
       * Send a payment request
       *
       * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
       * @example
       * <code>
       * var params = {
         *     mch_id: '10000100', // merchant id
         *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
         *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
         *     timestamp: '1439531364', // timestamp
         *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
         * };
       * this.wechat.sendPaymentRequest(params).then(() => {
         *     console.log("Success");
         * }).catch(error => {
         *     console.log(error);
         * });
       * </code>
       */
    Wechat.prototype.sendPaymentRequest = /**
       * Send a payment request
       *
       * @link https://pay.weixin.qq.com/wiki/doc/api/app.php?chapter=9_1
       * @example
       * <code>
       * var params = {
         *     mch_id: '10000100', // merchant id
         *     prepay_id: 'wx201411101639507cbf6ffd8b0779950874', // prepay id returned from server
         *     nonce: '1add1a30ac87aa2db72f57a2375d8fec', // nonce string returned from server
         *     timestamp: '1439531364', // timestamp
         *     sign: '0CB01533B8C1EF103065174F50BCA001', // signed string
         * };
       * this.wechat.sendPaymentRequest(params).then(() => {
         *     console.log("Success");
         * }).catch(error => {
         *     console.log(error);
         * });
       * </code>
       */
    function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * jumpToBizProfile （跳转到某个微信公众号）2016-11-11 测试是失效的，囧
     *
     * @link https://segmentfault.com/a/1190000007204624
     * @link https://segmentfault.com/q/1010000003907796
     * @example
     * <code>
     * var params = {
       *     info: 'gh_xxxxxxx', // 公众帐号原始ID
       *     type:  'Normal' // 普通号
       * }
     * or
     * var params = {
       *     info: 'extMsg', // 相关的硬件二维码串
       *     type:  'Device' // 硬件号
       * };
     * this.wechat.jumpToBizProfile(params).then(()=> {
       *     console.log("Success");
       * }).catch(error => {
       *     console.log(error);
       * });
     * </code>
     */
    /**
       * jumpToBizProfile （跳转到某个微信公众号）2016-11-11 测试是失效的，囧
       *
       * @link https://segmentfault.com/a/1190000007204624
       * @link https://segmentfault.com/q/1010000003907796
       * @example
       * <code>
       * var params = {
         *     info: 'gh_xxxxxxx', // 公众帐号原始ID
         *     type:  'Normal' // 普通号
         * }
       * or
       * var params = {
         *     info: 'extMsg', // 相关的硬件二维码串
         *     type:  'Device' // 硬件号
         * };
       * this.wechat.jumpToBizProfile(params).then(()=> {
         *     console.log("Success");
         * }).catch(error => {
         *     console.log(error);
         * });
       * </code>
       */
    Wechat.prototype.jumpToWechat = /**
       * jumpToBizProfile （跳转到某个微信公众号）2016-11-11 测试是失效的，囧
       *
       * @link https://segmentfault.com/a/1190000007204624
       * @link https://segmentfault.com/q/1010000003907796
       * @example
       * <code>
       * var params = {
         *     info: 'gh_xxxxxxx', // 公众帐号原始ID
         *     type:  'Normal' // 普通号
         * }
       * or
       * var params = {
         *     info: 'extMsg', // 相关的硬件二维码串
         *     type:  'Device' // 硬件号
         * };
       * this.wechat.jumpToBizProfile(params).then(()=> {
         *     console.log("Success");
         * }).catch(error => {
         *     console.log(error);
         * });
       * </code>
       */
    function (url) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    /**
     * chooseInvoiceFromWX exq:choose invoices from Wechat card list
     *
     * @example
     * <code>
     * params: signType, cardSign, nonceStr, timeStamp  all required
     * this.wechat.chooseInvoiceFromWX(params).then(() => {
       *     console.log("Success");
       * }).catch(error => {
       *     console.log(error);
       * });
     * </code>
     */
    /**
       * chooseInvoiceFromWX exq:choose invoices from Wechat card list
       *
       * @example
       * <code>
       * params: signType, cardSign, nonceStr, timeStamp  all required
       * this.wechat.chooseInvoiceFromWX(params).then(() => {
         *     console.log("Success");
         * }).catch(error => {
         *     console.log(error);
         * });
       * </code>
       */
    Wechat.prototype.chooseInvoiceFromWX = /**
       * chooseInvoiceFromWX exq:choose invoices from Wechat card list
       *
       * @example
       * <code>
       * params: signType, cardSign, nonceStr, timeStamp  all required
       * this.wechat.chooseInvoiceFromWX(params).then(() => {
         *     console.log("Success");
         * }).catch(error => {
         *     console.log(error);
         * });
       * </code>
       */
    function (params) {
        return; // We add return; here to avoid any IDE / Compiler errors
    };
    Wechat.decorators = [
        { type: Injectable },
    ];
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], Wechat.prototype, "isInstalled", null);
    __decorate([
        Cordova(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", Promise)
    ], Wechat.prototype, "share", null);
    /**
     * @name Wechat
     * @description
     * This plugin does something
     *
     * @usage
     * ```typescript
     * import { Wechat } from '@ionic-native/wechat';
     *
     *
     * constructor(private wechat: Wechat) { }
     *
     * ...
     *
     *
     * this.wechat.functionName('Hello', 123)
     *   .then((res: any) => console.log(res))
     *   .catch((error: any) => console.error(error));
     *
     * ```
     */
    Wechat = __decorate([
        Plugin({
            pluginName: 'Wechat',
            plugin: 'cordova-plugin-wechat',
            // npm package name, example: cordova-plugin-camera
            pluginRef: 'Wechat',
            // the variable reference to call the plugin, example: navigator.geolocation
            repo: 'https://github.com/xu-li/cordova-plugin-wechat.git',
            // the github repository URL for the plugin
            install: 'cordova plugin add cordova-plugin-wechat --variable wechatappid=YOUR_WECHAT_APPID',
            // OPTIONAL install command, in case the plugin requires variables
            installVariables: ['wechatappid'],
            // OPTIONAL the plugin requires variables
            platforms: ['Android', 'iOS'] // Array of platforms supported, example: ['Android', 'iOS']
        })
    ], Wechat);
    return Wechat;
}(IonicNativePlugin));
export { Wechat };
//# sourceMappingURL=index.js.map