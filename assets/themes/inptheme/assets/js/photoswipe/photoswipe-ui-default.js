/*! PhotoSwipe Default UI - 4.1.1 - 2015-12-24
* http://photoswipe.com
* Copyright (c) 2015 Dmitry Semenov; */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.PhotoSwipeUI_Default=t()}(this,(function(){"use strict";return function(e,t){var n,o,r,l,i,s,a,u,c,p,d,m,f,h,w,v,g,b,_=this,C=!1,T=!0,I=!0,E={barsSize:{top:44,bottom:"auto"},closeElClasses:["item","caption","zoom-wrap","ui","top-bar"],timeToIdle:4e3,timeToIdleOutside:1e3,loadingIndicatorDelay:1e3,addCaptionHTMLFn:function(e,t){return e.title?(t.children[0].innerHTML=e.title,!0):(t.children[0].innerHTML="",!1)},closeEl:!0,captionEl:!0,fullscreenEl:!0,zoomEl:!0,shareEl:!0,counterEl:!0,arrowEl:!0,preloaderEl:!0,tapToClose:!1,tapToToggleControls:!0,clickToCloseNonZoomable:!0,shareButtons:[{id:"facebook",label:"Share on Facebook",url:"https://www.facebook.com/sharer/sharer.php?u={{url}}"},{id:"twitter",label:"Tweet",url:"https://twitter.com/intent/tweet?text={{text}}&url={{url}}"},{id:"pinterest",label:"Pin it",url:"https://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}"}],getImageURLForShare:function(){return e.currItem.src||""},getPageURLForShare:function(){return window.location.href},getTextForShare:function(){return e.currItem.title||""},indexIndicatorSep:" / ",fitControlsWidth:1200},F=function(e){if(v)return!0;e=e||window.event,w.timeToIdle&&w.mouseUsed&&!c&&z();for(var n,o,r=(e.target||e.srcElement).getAttribute("class")||"",l=0;l<P.length;l++)(n=P[l]).onTap&&r.indexOf("pswp__"+n.name)>-1&&(n.onTap(),o=!0);if(o){e.stopPropagation&&e.stopPropagation(),v=!0;var i=t.features.isOldAndroid?600:30;setTimeout((function(){v=!1}),i)}},x=function(e,n,o){t[(o?"add":"remove")+"Class"](e,"pswp__"+n)},S=function(){var e=1===w.getNumItemsFn();e!==h&&(x(o,"ui--one-slide",e),h=e)},k=function(){x(a,"share-modal--hidden",I)},K=function(){return(I=!I)?(t.removeClass(a,"pswp__share-modal--fade-in"),setTimeout((function(){I&&k()}),300)):(k(),setTimeout((function(){I||t.addClass(a,"pswp__share-modal--fade-in")}),30)),I||O(),!1},L=function(t){var n=(t=t||window.event).target||t.srcElement;return e.shout("shareLinkClick",t,n),!!n.href&&(!!n.hasAttribute("download")||(window.open(n.href,"pswp_share","scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left="+(window.screen?Math.round(screen.width/2-275):100)),I||K(),!1))},O=function(){for(var e,t,n,o,r="",l=0;l<w.shareButtons.length;l++)e=w.shareButtons[l],t=w.getImageURLForShare(e),n=w.getPageURLForShare(e),o=w.getTextForShare(e),r+='<a href="'+e.url.replace("{{url}}",encodeURIComponent(n)).replace("{{image_url}}",encodeURIComponent(t)).replace("{{raw_image_url}}",t).replace("{{text}}",encodeURIComponent(o))+'" target="_blank" class="pswp__share--'+e.id+'"'+(e.download?"download":"")+">"+e.label+"</a>",w.parseShareButtonOut&&(r=w.parseShareButtonOut(e,r));a.children[0].innerHTML=r,a.children[0].onclick=L},R=function(e){for(var n=0;n<w.closeElClasses.length;n++)if(t.hasClass(e,"pswp__"+w.closeElClasses[n]))return!0},y=0,z=function(){clearTimeout(b),y=0,c&&_.setIdle(!1)},M=function(e){var t=(e=e||window.event).relatedTarget||e.toElement;t&&"HTML"!==t.nodeName||(clearTimeout(b),b=setTimeout((function(){_.setIdle(!0)}),w.timeToIdleOutside))},A=function(e){m!==e&&(x(d,"preloader--active",!e),m=e)},D=function(n){var i=n.vGap;if(!e.likelyTouchDevice||w.mouseUsed||screen.width>w.fitControlsWidth){var s=w.barsSize;if(w.captionEl&&"auto"===s.bottom)if(l||((l=t.createEl("pswp__caption pswp__caption--fake")).appendChild(t.createEl("pswp__caption__center")),o.insertBefore(l,r),t.addClass(o,"pswp__ui--fit")),w.addCaptionHTMLFn(n,l,!0)){var a=l.clientHeight;i.bottom=parseInt(a,10)||44}else i.bottom=s.top;else i.bottom="auto"===s.bottom?0:s.bottom;i.top=s.top}else i.top=i.bottom=0},P=[{name:"caption",option:"captionEl",onInit:function(e){r=e}},{name:"share-modal",option:"shareEl",onInit:function(e){a=e},onTap:function(){K()}},{name:"button--share",option:"shareEl",onInit:function(e){s=e},onTap:function(){K()}},{name:"button--zoom",option:"zoomEl",onTap:e.toggleDesktopZoom},{name:"counter",option:"counterEl",onInit:function(e){i=e}},{name:"button--close",option:"closeEl",onTap:e.close},{name:"button--arrow--left",option:"arrowEl",onTap:e.prev},{name:"button--arrow--right",option:"arrowEl",onTap:e.next},{name:"button--fs",option:"fullscreenEl",onTap:function(){n.isFullscreen()?n.exit():n.enter()}},{name:"preloader",option:"preloaderEl",onInit:function(e){d=e}}];_.init=function(){var i;t.extend(e.options,E,!0),w=e.options,o=t.getChildByClass(e.scrollWrap,"pswp__ui"),(p=e.listen)("onVerticalDrag",(function(e){T&&e<.95?_.hideControls():!T&&e>=.95&&_.showControls()})),p("onPinchClose",(function(e){T&&e<.9?(_.hideControls(),i=!0):i&&!T&&e>.9&&_.showControls()})),p("zoomGestureEnded",(function(){(i=!1)&&!T&&_.showControls()})),p("beforeChange",_.update),p("doubleTap",(function(t){var n=e.currItem.initialZoomLevel;e.getZoomLevel()!==n?e.zoomTo(n,t,333):e.zoomTo(w.getDoubleTapZoom(!1,e.currItem),t,333)})),p("preventDragEvent",(function(e,t,n){var o=e.target||e.srcElement;o&&o.getAttribute("class")&&e.type.indexOf("mouse")>-1&&(o.getAttribute("class").indexOf("__caption")>0||/(SMALL|STRONG|EM)/i.test(o.tagName))&&(n.prevent=!1)})),p("bindEvents",(function(){t.bind(o,"pswpTap click",F),t.bind(e.scrollWrap,"pswpTap",_.onGlobalTap),e.likelyTouchDevice||t.bind(e.scrollWrap,"mouseover",_.onMouseOver)})),p("unbindEvents",(function(){I||K(),g&&clearInterval(g),t.unbind(document,"mouseout",M),t.unbind(document,"mousemove",z),t.unbind(o,"pswpTap click",F),t.unbind(e.scrollWrap,"pswpTap",_.onGlobalTap),t.unbind(e.scrollWrap,"mouseover",_.onMouseOver),n&&(t.unbind(document,n.eventK,_.updateFullscreen),n.isFullscreen()&&(w.hideAnimationDuration=0,n.exit()),n=null)})),p("destroy",(function(){w.captionEl&&(l&&o.removeChild(l),t.removeClass(r,"pswp__caption--empty")),a&&(a.children[0].onclick=null),t.removeClass(o,"pswp__ui--over-close"),t.addClass(o,"pswp__ui--hidden"),_.setIdle(!1)})),w.showAnimationDuration||t.removeClass(o,"pswp__ui--hidden"),p("initialZoomIn",(function(){w.showAnimationDuration&&t.removeClass(o,"pswp__ui--hidden")})),p("initialZoomOut",(function(){t.addClass(o,"pswp__ui--hidden")})),p("parseVerticalMargin",D),function(){var e,n,r,l=function(o){if(o)for(var l=o.length,i=0;i<l;i++){e=o[i],n=e.className;for(var s=0;s<P.length;s++)r=P[s],n.indexOf("pswp__"+r.name)>-1&&(w[r.option]?(t.removeClass(e,"pswp__element--disabled"),r.onInit&&r.onInit(e)):t.addClass(e,"pswp__element--disabled"))}};l(o.children);var i=t.getChildByClass(o,"pswp__top-bar");i&&l(i.children)}(),w.shareEl&&s&&a&&(I=!0),S(),w.timeToIdle&&p("mouseUsed",(function(){t.bind(document,"mousemove",z),t.bind(document,"mouseout",M),g=setInterval((function(){2==++y&&_.setIdle(!0)}),w.timeToIdle/2)})),w.fullscreenEl&&!t.features.isOldAndroid&&(n||(n=_.getFullscreenAPI()),n?(t.bind(document,n.eventK,_.updateFullscreen),_.updateFullscreen(),t.addClass(e.template,"pswp--supports-fs")):t.removeClass(e.template,"pswp--supports-fs")),w.preloaderEl&&(A(!0),p("beforeChange",(function(){clearTimeout(f),f=setTimeout((function(){e.currItem&&e.currItem.loading?(!e.allowProgressiveImg()||e.currItem.img&&!e.currItem.img.naturalWidth)&&A(!1):A(!0)}),w.loadingIndicatorDelay)})),p("imageLoadComplete",(function(t,n){e.currItem===n&&A(!0)})))},_.setIdle=function(e){c=e,x(o,"ui--idle",e)},_.update=function(){T&&e.currItem?(_.updateIndexIndicator(),w.captionEl&&(w.addCaptionHTMLFn(e.currItem,r),x(r,"caption--empty",!e.currItem.title)),C=!0):C=!1,I||K(),S()},_.updateFullscreen=function(o){o&&setTimeout((function(){e.setScrollOffset(0,t.getScrollY())}),50),t[(n.isFullscreen()?"add":"remove")+"Class"](e.template,"pswp--fs")},_.updateIndexIndicator=function(){w.counterEl&&(i.innerHTML=e.getCurrentIndex()+1+w.indexIndicatorSep+w.getNumItemsFn())},_.onGlobalTap=function(n){var o=(n=n||window.event).target||n.srcElement;if(!v)if(n.detail&&"mouse"===n.detail.pointerType){if(R(o))return void e.close();t.hasClass(o,"pswp__img")&&(1===e.getZoomLevel()&&e.getZoomLevel()<=e.currItem.fitRatio?w.clickToCloseNonZoomable&&e.close():e.toggleDesktopZoom(n.detail.releasePoint))}else if(w.tapToToggleControls&&(T?_.hideControls():_.showControls()),w.tapToClose&&(t.hasClass(o,"pswp__img")||R(o)))return void e.close()},_.onMouseOver=function(e){var t=(e=e||window.event).target||e.srcElement;x(o,"ui--over-close",R(t))},_.hideControls=function(){t.addClass(o,"pswp__ui--hidden"),T=!1},_.showControls=function(){T=!0,C||_.update(),t.removeClass(o,"pswp__ui--hidden")},_.supportsFullscreen=function(){var e=document;return!!(e.exitFullscreen||e.mozCancelFullScreen||e.webkitExitFullscreen||e.msExitFullscreen)},_.getFullscreenAPI=function(){var t,n=document.documentElement,o="fullscreenchange";return n.requestFullscreen?t={enterK:"requestFullscreen",exitK:"exitFullscreen",elementK:"fullscreenElement",eventK:o}:n.mozRequestFullScreen?t={enterK:"mozRequestFullScreen",exitK:"mozCancelFullScreen",elementK:"mozFullScreenElement",eventK:"moz"+o}:n.webkitRequestFullscreen?t={enterK:"webkitRequestFullscreen",exitK:"webkitExitFullscreen",elementK:"webkitFullscreenElement",eventK:"webkit"+o}:n.msRequestFullscreen&&(t={enterK:"msRequestFullscreen",exitK:"msExitFullscreen",elementK:"msFullscreenElement",eventK:"MSFullscreenChange"}),t&&(t.enter=function(){if(u=w.closeOnScroll,w.closeOnScroll=!1,"webkitRequestFullscreen"!==this.enterK)return e.template[this.enterK]();e.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT)},t.exit=function(){return w.closeOnScroll=u,document[this.exitK]()},t.isFullscreen=function(){return document[this.elementK]}),t}}}));