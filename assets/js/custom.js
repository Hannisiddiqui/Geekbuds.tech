// ==================================================
// Project Name  :  Printem - HTML5 Template
// File          :  JS Base
// Version       :  1.0.0
// Last change   :  05 Octobar 2020
// Author        :  BDevs (https://themeforest.net/user/bdevs)
// Developer:    :  Rakibul Islam Dewan
// ==================================================


(function ($) {
  "use strict";


  // back to top - start
  // --------------------------------------------------
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $('#backtotop:hidden').stop(true, true).fadeIn();
    } else {
      $('#backtotop').stop(true, true).fadeOut();
    }
  });
  $(function () {
    $("#scroll").on('click', function () {
      $("html,body").animate({
        scrollTop: $("#thetop").offset().top
      }, "slow");
      return false
    })
  });
  // back to top - end
  // --------------------------------------------------


  // preloader - start
  // --------------------------------------------------
  $(window).on('load', function () {
    $('.preloader').addClass('loaded');
    if ($('.preloader').hasClass('loaded')) {
      $('.spinner').delay(1000).queue(function () {
        $(this).remove();
      });
    }
  });
  // preloader - end
  // --------------------------------------------------


  // search box - start
  // --------------------------------------------------
  $('.search_btn').on('click', function () {
    $('.search_btn > .fa-search').toggleClass('fa-times');
  });
  // search box - end
  // --------------------------------------------------


  // background image - start
  // --------------------------------------------------
  $('[data-background]').each(function () {
    $(this).css('background-image', 'url(' + $(this).attr('data-background') + ')');
  });
  // background image - end
  // --------------------------------------------------


  // nice select - start
  // --------------------------------------------------
  $('select').niceSelect();
  // nice select - end
  // --------------------------------------------------


  // sidebar mobile menu - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close_btn, .overlay').on('click', function () {
      $('.sidebar_mobile_menu').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.mobile_menu_btn').on('click', function () {
      $('.sidebar_mobile_menu').addClass('active');
      $('.overlay').addClass('active');
    });
  });

  // 3rd level dropdown menu
  $('.dropdown > a').addClass('dropdown-toggle');
  $('.dropdown-menu .dropdown > a').on('click', function (e) {
    if (!$(this).next().hasClass('show')) {
      $(this).parents('.dropdown-menu').first().find('.show').removeClass("show");
    }
    var $subMenu = $(this).next(".dropdown-menu");
    $subMenu.toggleClass('show');
    $(this).parents('li.dropdown.show').on('.dropdown', function (e) {
      $('.dropdown-menu > .dropdown .show').removeClass("show");
    });
    $('.dropdown-menu li a.dropdown-toggle').removeClass("show_dropdown");
    if ($(this).next().hasClass('show')) {
      $(this).addClass("show_dropdown");
    }
    return false;
  });
  // sidebar mobile menu - end
  // --------------------------------------------------


  // sticky header - start
  // --------------------------------------------------
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 120) {
      $('.sticky_header').addClass("stuck")
    } else {
      $('.sticky_header').removeClass("stuck")
    }
  });
  // sticky header - end
  // --------------------------------------------------


  // cart sidebar - start
  // --------------------------------------------------
  $(document).ready(function () {
    $('.close_btn, .overlay').on('click', function () {
      $('.cart_sidebar').removeClass('active');
      $('.overlay').removeClass('active');
    });

    $('.cart_btn').on('click', function () {
      $('.cart_sidebar').addClass('active');
      $('.overlay').addClass('active');
    });
  });
  // cart sidebar - end
  // --------------------------------------------------


  // popup video & images - start
  // --------------------------------------------------
  $('.popup_video').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    preloader: false,
    removalDelay: 160,
    mainClass: 'mfp-fade',
    fixedContentPos: false
  });

  $('.zoom-gallery').magnificPopup({
    delegate: '.popup_image',
    type: 'image',
    closeOnContentClick: false,
    closeBtnInside: false,
    mainClass: 'mfp-with-zoom mfp-img-mobile',
    image: {
      verticalFit: true,
      titleSrc: function (item) {
        return item.el.attr('title') + ' &middot; <a class="image-source-link" href="' + item.el.attr('data-source') + '" target="_blank">image source</a>';
      }
    },
    gallery: {
      enabled: true
    },
    zoom: {
      enabled: true,
      duration: 300,
      opener: function (element) {
        return element.find('img');
      }
    }
  });

  if ($(".popup_image").length) {
    $(".popup_image").each(function () {
      $(".popup_image").magnificPopup({
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        removalDelay: 300,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        gallery: {
          enabled: true,
          navigateByImgClick: true,
          preload: [0, 1]
        }
      });
    })
  }
  // popup video & images - end
  // --------------------------------------------------


  // masonry layout - start
  // --------------------------------------------------
  var $grid = $('.grid').imagesLoaded(function () {
    $grid.masonry({
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer'
    });
  });
  // masonry layout - end
  // --------------------------------------------------


  // counter - start
  // --------------------------------------------------
  $('.counte_text').countTo({
    speed: 3000,
    refreshInterval: 50,
  });
  // counter - end
  // --------------------------------------------------


  // columns of carousel - start
  // --------------------------------------------------
  $('.main_slider').owlCarousel({
    items: 1,
    margin: 0,
    nav: false,
    loop: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1000,
    autoplayTimeout: 6000
    // autoplayHoverPause:true,
  });
  // columns of carousel - end
  // --------------------------------------------------


  // columns of carousel - start
  // --------------------------------------------------
  $('.creative_testimonial_carousel').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
  });


  $('.column_1_carousel').owlCarousel({
    items: 1,
    nav: true,
    loop: true,
    margin: 30,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
  });

  $('.column_2_carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });

  $('.column_3_carousel').owlCarousel({
    loop: true,
    nav: true,
    margin: 30,
    dots: true,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 6000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      700: {
        items: 2
      },
      1100: {
        items: 3
      }
    }
  });
  // columns of carousel - end
  // --------------------------------------------------


  // portfolio carousel - start
  // --------------------------------------------------
  $('.portfolio_carousel').owlCarousel({
    nav: false,
    loop: true,
    margin: 30,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      991: {
        items: 3
      },
      1300: {
        items: 4
      }
    }
  });
  // portfolio carousel - end
  // --------------------------------------------------


  // circle proggress bar - start
  // --------------------------------------------------
  $('.printing_bar').circleProgress({
    value: 0.85,
    fill: '#ffffff'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('.percentage_text').html(Math.round(85 * progress) + '<sub>%</sub>');
  });

  $('.branding_bar').circleProgress({
    value: 0.93,
    fill: '#ffffff'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('.percentage_text').html(Math.round(93 * progress) + '<sub>%</sub>');
  });

  $('.orange_printing_bar').circleProgress({
    value: 0.85,
    fill: '#ff4328'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('.percentage_text').html(Math.round(85 * progress) + '<sub>%</sub>');
  });

  $('.yellow_branding_bar').circleProgress({
    value: 0.93,
    fill: '#fec931'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('.percentage_text').html(Math.round(93 * progress) + '<sub>%</sub>');
  });

  $('.blue_logo_bar').circleProgress({
    value: 0.63,
    fill: '#39a6f5'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('.percentage_text').html(Math.round(63 * progress) + '<sub>%</sub>');
  });

  $('.purple_tshart_bar').circleProgress({
    value: 0.98,
    fill: '#931dd0'
  }).on('circle-animation-progress', function (event, progress) {
    $(this).find('.percentage_text').html(Math.round(98 * progress) + '<sub>%</sub>');
  });
  // circle proggress bar - end
  // --------------------------------------------------


  // price range - start
  // --------------------------------------------------
  if ($("#slider-range").length) {
    $("#slider-range").slider({
      range: true,
      min: 5,
      max: 1000,
      values: [30.00, 429.00],
      slide: function (event, ui) {
        $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
      }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
      " - $" + $("#slider-range").slider("values", 1));
  }

  $('.ar_top').on('click', function () {
    var getID = $(this).next().attr('id');
    var result = document.getElementById(getID);
    var qty = result.value;
    $('.proceed_to_checkout .update-cart').removeAttr('disabled');
    if (!isNaN(qty)) {
      result.value++;
    } else {
      return false;
    }
  });
  // price range - end
  // --------------------------------------------------


  // quantity - start
  // --------------------------------------------------
  (function () {
    window.inputNumber = function (el) {
      var min = el.attr("min") || false;
      var max = el.attr("max") || false;

      var els = {};

      els.dec = el.prev();
      els.inc = el.next();

      el.each(function () {
        init($(this));
      });

      function init(el) {
        els.dec.on("click", decrement);
        els.inc.on("click", increment);

        function decrement() {
          var value = el[0].value;
          value--;
          if (!min || value >= min) {
            el[0].value = value;
          }
        }

        function increment() {
          var value = el[0].value;
          value++;
          if (!max || value <= max) {
            el[0].value = value++;
          }
        }
      }
    };
  })();
  inputNumber($(".input_number"));
  // quantity - end
  // --------------------------------------------------


  // parallax - start
  // --------------------------------------------------
  if ($('.scene').length > 0) {
    $('.scene').parallax({
      scalarX: 10.0,
      scalarY: 10.0,
    });
  }
  // parallax - end
  // --------------------------------------------------


  // wow animation - start
  // --------------------------------------------------
  function wowAnimation() {
    new WOW({
      offset: 100,
      mobile: true
    }).init()
  }
  wowAnimation();
  // wow animation - end
  // --------------------------------------------------


  // google map - start
  // --------------------------------------------------
  if ($('#mapBox').length) {
    var $lat = $('#mapBox').data('lat');
    var $lon = $('#mapBox').data('lon');
    var $zoom = $('#mapBox').data('zoom');
    var $marker = $('#mapBox').data('marker');
    var $info = $('#mapBox').data('info');
    var $markerLat = $('#mapBox').data('mlat');
    var $markerLon = $('#mapBox').data('mlon');
    var map = new GMaps({
      el: '#mapBox',
      lat: $lat,
      lng: $lon,
      scrollwheel: false,
      scaleControl: true,
      streetViewControl: false,
      panControl: true,
      disableDoubleClickZoom: true,
      mapTypeControl: false,
      zoom: $zoom,
    });
    map.addMarker({
      lat: $markerLat,
      lng: $markerLon,
      icon: $marker,
      infoWindow: {
        content: $info
      }
    })
  }
  // google map - end
  // --------------------------------------------------


})(jQuery);