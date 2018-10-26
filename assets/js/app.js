$(document).ready(function() {

  function openNav() {
      document.getElementById("myScrollspy").style.width = "250px";
      document.getElementById("main").style.marginLeft = "250px";
  }

  function closeNav() {
      document.getElementById("myScrollspy").style.width = "0";
      document.getElementById("main").style.marginLeft= "0";
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
    $('button.hamburger').attr('state', 'closed')
    closeNav();
  })
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
    if($(this).attr('state') == 'open') {
      $(this).removeClass('is-active')
      $(this).attr('state', 'closed')
      closeNav();
    } else {
      $(this).addClass('is-active')
      $(this).attr('state', 'open')
      openNav();
    }

  })

  $(document).on('keyup', function(event) {
    console.log(event);
    if(event.key == 'Escape' && $('button.hamburger').attr('state') === 'open') {
      console.log('not here;');
      $('button.hamburger').removeClass('is-active')
      $('button.hamburger').attr('state', 'closed')
      closeNav();
    }
  })





  $("a.nav-link").on('click', function(event) {
    console.log(event);
    let href = $(this).attr('href');
    var linkScrollPosition = $(document).scrollTop();
    console.log(linkScrollPosition);
    $([document.documentElement, document.body]).animate({
      scrollTop: $(href).offset().top - 30
    }, 1500);
    let target = href;
    console.log(target);
      $(target)[0].focus(function() {
        event.preventDefault();
        $(this).css({
          outline: '-webkit-focus-ring-color auto 3px'
        })

      });
  })

});
