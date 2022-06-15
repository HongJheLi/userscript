// ==UserScript==
// @id             nas-url-custom-domain
// @name           NAS-Url-Custom-Domain
// @author         hongjheli@github
// @version        0.01
// @description    NAS 轉換自訂網域
// @include        https://hpyi.quickconnect.to*
// @include        https://hpyi.synology.me*
// @match          https://hpyi.quickconnect.to*
// @match          https://hpyi.synology.me*
// @grant          none
// ==/UserScript==

;(function () {
	// console.log(window.location)
	window.location.replace('https://nas.wasihj.com' + window.location.pathname)
})()
