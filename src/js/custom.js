$('.product-menu').isotope({
    itemSelector: '.menu-item',
    layoutMode: 'fitRows',
  })
  $('.menu-list ul li').click(function () {
    console.log('iiiii')
    $('.menu-list  ul li').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    console.log(selector)
    $('.product-menu').isotope({
      filter: selector
    });
    return false;
  });

  $('.main_menu_wrap').singlePageNav({
    offset: $('.single-page-nav').outerHeight(),
    threshold: 120,
    speed: 400,
    currentClass: 'current',
    easing: 'swing',
    filter: ':not(.external)',

    beforeStart: function () {
      console.log('begin scrolling');
    },
    onComplete: function () {
      console.log('done scrolling');
    }
  });

  $('.sidebar-toggle').on("click", function() {
    $('.fixed-sidebar').addClass('open');
    console.log('test1')
  });
  $('.sidebar-close').on("click", function() {
    $('.fixed-sidebar').removeClass('open')
    console.log('test2')
    
  })