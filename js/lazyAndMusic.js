function play_music(){$("#mc_play").hasClass("on")?($("#mc_play audio").get(0).pause(),$("#mc_play").attr("class","stop")):($("#mc_play audio").get(0).play(),$("#mc_play").attr("class","on")),$("#music_play_filter").hide(),event.stopPropagation()}function just_play(e){$("#mc_play audio").get(0).play(),$("#mc_play").attr("class","on"),"undefined"!=typeof e&&$("#music_play_filter").hide(),event.stopPropagation()}function is_weixn(){return!1}!function(e,i,t,a){var n=e(i);e.fn.lazyload=function(r){function l(){var i=0;c.each(function(){var t=e(this);if(!s.skip_invisible||t.is(":visible"))if(i<s.failure_limit)t.trigger("appear"),i++;else if(++i>s.failure_limit)return!1})}var o,c=this,s={threshold:0,failure_limit:100,event:"click",effect:"show",container:i,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return r&&(a!==r.failurelimit&&(r.failure_limit=r.failurelimit,delete r.failurelimit),a!==r.effectspeed&&(r.effect_speed=r.effectspeed,delete r.effectspeed),e.extend(s,r)),o=s.container===a||s.container===i?n:e(s.container),0===s.event.indexOf("scroll")&&o.bind(s.event,function(){return l()}),this.each(function(){var i=this,t=e(i);i.loaded=!1,t.attr("src")!==a&&t.attr("src")!==!1||t.is("img")&&t.attr("src",s.placeholder),t.one("appear",function(){if(!this.loaded){if(console.log("加载一次图片"),s.appear){var a=c.length;s.appear.call(i,a,s)}e("<img />").bind("load",function(){var a=t.attr("data-"+s.data_attribute);t.hide(),t.is("img")?t.attr("src",a):t.css("background-image","url('"+a+"')"),t[s.effect](s.effect_speed),i.loaded=!0;var n=e.grep(c,function(e){return!e.loaded});if(c=e(n),s.load){var r=c.length;s.load.call(i,r,s)}}).attr("src",t.attr("data-"+s.data_attribute))}}),0!==s.event.indexOf("scroll")&&t.bind(s.event,function(){i.loaded||t.trigger("appear")})}),n.bind("resize",function(){l()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&(console.log("检测到移动端"),n.bind("pageshow",function(i){i.originalEvent&&i.originalEvent.persisted&&c.each(function(){e(this).trigger("appear")})})),e(t).ready(function(){l()}),this}}(jQuery,window,document),window.onload=function(){is_weixn()||just_play()};