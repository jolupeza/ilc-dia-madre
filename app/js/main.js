"use strict";

/*******************************************************
function verifyMedia () {
  if (window.matchMedia("(max-width: 991px)").matches) {

  } else {
    console.log('Mi viewport es mayor o igual a 992px');
  }
}
/*******************************************************/

;(function ($) {
  let $window = $(window);

  $(function () {
    $window.on('scroll', () => {
      checkScroll();
    });

    checkScroll();

    $('.ArrowTop').on('click', (ev) => {
      ev.preventDefault();

      $('html, body').animate({scrollTop: 0}, 800);
    });

    $('.Form__check__input--custom').on('change', () => {
      let allRadios = $('input[name="type"]'),
          allIcons = allRadios.next().find('i[class^="icon-"]');

      removeClassIconsRadios(allIcons);

      let selectRadio = $('input[name="type"]:checked'),
          icon = selectRadio.next().find('i[class^="icon-"]'),
          iconClass = icon.attr('class');

      icon.removeClass(iconClass).addClass(`${iconClass}-select`).data('select', true);
    });

    //$window.on('resize',  function () {
    //  verifyMedia();
    //});
  });

  let checkScroll = () => {
    let arrow = $('.ArrowTop');

    if ( $window.scrollTop() > 150 ) {
      arrow.fadeIn();
    } else {
      arrow.fadeOut();
    }
  };

  let removeClassIconsRadios = (icons) => {
    icons.each(function(index, el) {
      let icon = $(this),
          iconClass = icon.attr('class');

      if (icon.data('select')) {
        icon.data('select', false);

        icon.removeClass(iconClass).addClass(iconClass.slice(0, -7));
      }
    });
  }
})(jQuery);
