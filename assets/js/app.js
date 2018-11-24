$(document).ready(function() {

  function openNav() {
      document.getElementById("myScrollspy").style.width = "260px";
      document.getElementById("main").style.marginLeft = "260px";
  }

  function closeNav() {
      document.getElementById("myScrollspy").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
  }

  if(localStorage.getItem('menu') === 'closed') {
    $('button.hamburger').removeClass('is-active')
    $('button.hamburger').attr({'aria-expanded': 'false',
                  'title': 'Open Menu'})
    closeNav();
  }

  $('.closebtn').on('click', function() {
    $('button.hamburger').removeClass('is-active')
    $('button.hamburger').attr({'aria-expanded': 'false',
                  'title': 'Open Menu'})
    closeNav();
    localStorage.clear();
    localStorage.setItem('menu', 'closed')
  });


$('[data-toggle="tooltip"]').tooltip()

  $('button.hamburger').on('click', function(){

    if($(this).attr('aria-expanded') == 'true') {
      $(this).removeClass('is-active')
      $(this).attr({'aria-expanded': 'false',
                    'title': 'Open Menu'})
      closeNav();
      localStorage.clear();
      localStorage.setItem('menu', 'closed')
    } else {
      $(this).addClass('is-active')
      $(this).attr({'aria-expanded': 'true',
                    'title': 'Close Menu'})
      openNav();
      localStorage.clear();
      localStorage.setItem('menu','open')
    }

  })

  $(document).on('keyup', function(event) {

    if(event.key == 'Escape' && $('button.hamburger').attr('aria-expanded') === 'true') {
      $('button.hamburger').removeClass('is-active')
      $('button.hamburger').attr({'aria-expanded': 'false',
                    'title': 'Open Menu'})
      closeNav();
      localStorage.clear();
      localStorage.setItem('menu', 'closed')
    }
  })

  $("ul.nav").on('click', "a.nav-link", function(event) {
    let href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(href).offset().top - 30
    }, 1800);
    let target = href;
      $(target).focus();
  })

  $('section').on('click', "a.scroll-arrow", function(event) {
    let href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(href).offset().top - 30
    }, 1800);
    setTimeout( function() {
      $(href).focus
    }, 1000);
  })


});
