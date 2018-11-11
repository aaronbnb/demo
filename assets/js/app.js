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
  // $('#menu-btn').on('click', function(){
  //   console.log("here");
  //   if($(this).attr('state') == 'open') {
  //     console.log('here')
  //     $(this).attr('state', 'closed');
  //
  //   } else {
  //     $(this).attr('state', 'open');
  //     openNav();
  //   }
  // })

  $('.closebtn').on('click', function() {
    $('button.hamburger').removeClass('is-active')
    $('button.hamburger').attr({'aria-expanded': 'false',
                  'title': 'Open Menu'})
    closeNav();
    localStorage.clear();
    localStorage.setItem('menu', 'closed')
  });


$('[data-toggle="tooltip"]').tooltip()

  $('form#signup').on('submit', function() {

    if($('#first').val() == '') {
      console.log('error');
      $('#errors').text('Invalid name');
      event.preventDefault();
    }
    else if($('#last').val() == '') {
      console.log('error');
      event.preventDefault();
    }
    else if($('#email').val() == '') {
      console.log('error');
        event.preventDefault();
    } else {

    }

  });

  $('button.hamburger').on('click', function(){
    console.log("here");
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
    console.log(event);
    if(event.key == 'Escape' && $('button.hamburger').attr('aria-expanded') === 'true') {
      console.log('not here;');
      $('button.hamburger').removeClass('is-active')
      $('button.hamburger').attr({'aria-expanded': 'false',
                    'title': 'Open Menu'})
      closeNav();
      localStorage.clear();
      localStorage.setItem('menu', 'closed')
    }
  })





  $("ul.nav").on('click', "a.nav-link", function(event) {
    console.log(event);
    let href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(href).offset().top - 30
    }, 1800);
    let target = href;
    console.log(target);
      $(target).focus();
  })

  $('section').on('click', "a.scroll-arrow", function(event) {
    console.log(event);
    let href = $(this).attr('href');
    $([document.documentElement, document.body]).animate({
      scrollTop: $(href).offset().top - 30
    }, 1800);
    setTimeout( function() {
      $(href).focus
    }, 1000);
  })


});
