$(document).ready(function(){function t(t){t=t.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(t,e,d,i){return e+e+d+d+i+i});var e=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);return e?{r:parseInt(e[1],16),g:parseInt(e[2],16),b:parseInt(e[3],16)}:null}function e(e,d){var i=$(e).find(".card-title").text(),o=$(e).find(".en-name").text(),a=$(e).find(".hex-value").text().toLowerCase(),n=$(e).find(".dd-c").text(),r=$(e).find(".dd-m").text(),s=$(e).find(".dd-y").text(),c=$(e).find(".dd-k").text(),l=t(a),f="rgb("+l.r+", "+l.g+", "+l.b+")",u=.2126*l.r+.7152*l.g+.0722*l.b;u<150?$("body, footer p a").css("color","#eee"):$("body, footer p a").css("color","#1c1c1c"),u>200?$(".main").css("background-color","rgba(0, 0, 0, 0.2)"):$(".main").css("background-color","transparent"),$("#infors").find(".card-title").text(i),$("#infors").find(".en-name").text(o),$("#infors").find(".card-footer p:first").text(a),$("#infors").find(".card-footer p:last").text(f),$("#details .dd-c").text(n).change(),$("#details .dd-c").prev().text("C: "+n.split("/",1)),$("#details .dd-m").text(r).change(),$("#details .dd-m").prev().text("M: "+r.split("/",1)),$("#details .dd-y").text(s).change(),$("#details .dd-y").prev().text("Y: "+s.split("/",1)),$("#details .dd-k").text(c).change(),$("#details .dd-k").prev().text("K: "+c.split("/",1)),$("#details .bg-r").css("height",100*l.r/255+"%"),$("#details .bg-r").text(l.r),$("#details .bg-g").css("height",100*l.g/255+"%"),$("#details .bg-g").text(l.g),$("#details .bg-b").css("height",100*l.b/255+"%"),$("#details .bg-b").text(l.b),$(e).addClass("change-color"),$("body, #shareModal .modal-content").css("background-color",a)}function d(t){var e=$("<input>");$("body").append(e),e.val($(t).text()).select(),document.execCommand("copy"),e.remove()}function i(){$.getScript("//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-59f00507d37dc0a5",function(){})}$(document).bind("mobileinit",function(){$.mobile.touchOverflowEnabled=!0}),$("#preloader").fadeOut(2e3,function(){$("#preloader").remove()});var o=window.innerHeight,a=!1;window.innerHeight>window.innerWidth&&(a=!0),o<=800||a?($("#details .dd-c").peity("donut",{fill:["#0d5661","#eee"],innerRadius:26,radius:30}),$("#details .dd-m").peity("donut",{fill:["#cb1b45","#eee"],innerRadius:26,radius:30}),$("#details .dd-y").peity("donut",{fill:["#ffc408","#eee"],innerRadius:26,radius:30}),$("#details .dd-k").peity("donut",{fill:["#1c1c1c","#eee"],innerRadius:26,radius:30})):($("#details .dd-c").peity("donut",{fill:["#0d5661","#eee"],innerRadius:36,radius:40}),$("#details .dd-m").peity("donut",{fill:["#cb1b45","#eee"],innerRadius:36,radius:40}),$("#details .dd-y").peity("donut",{fill:["#ffc408","#eee"],innerRadius:36,radius:40}),$("#details .dd-k").peity("donut",{fill:["#1c1c1c","#eee"],innerRadius:36,radius:40})),$("#colors .hex-value").each(function(){var t=$(this).text();$(this).closest(".card").css("border-color",t)}),$("#colors .card-body").each(function(){var t=$(this).closest(".col-2");$(this).on("touchstart click",function(d){!1!==d.handled&&(d.stopPropagation(),d.preventDefault(),d.handled=!0,$("#colors .change-color").removeClass("change-color"),e(t))})}),$('[data-toggle="tooltip"]').tooltip(),$("#infors .card-footer p").each(function(){$(this).on("touchstart click",function(){d($(this)),$(this).tooltip("hide").attr("data-original-title","已复制到剪贴板").tooltip("show")}).on("mouseleave",function(){$(this).attr("data-original-title","点击复制")})});var n=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)}(0,$("#colors .col-2").length),r=$("#colors .col-2")[n];e(r),$("#colors").animate({scrollTop:$(r).offset().top-15},100),$('footer p a span[data-toggle="modal"]').on("touchstart click",function(){try{i()}catch(t){}})});