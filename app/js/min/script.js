"use strict";!function(e){var t=e(window);e(function(){t.on("scroll",function(){n()}),n(),e(".ArrowTop").on("click",function(n){n.preventDefault(),e("html, body").animate({scrollTop:0},800)}),e(".Form__check__input--custom").on("change",function(){var n=e('input[name="type"]').next().find('i[class^="icon-"]');c(n);var t=e('input[name="type"]:checked').next().find('i[class^="icon-"]'),a=t.attr("class");t.removeClass(a).addClass(a+"-select").data("select",!0)})});var n=function(){var n=e(".ArrowTop");150<t.scrollTop()?n.fadeIn():n.fadeOut()},c=function(n){n.each(function(n,t){var a=e(this),c=a.attr("class");a.data("select")&&(a.data("select",!1),a.removeClass(c).addClass(c.slice(0,-7)))})}}(jQuery);