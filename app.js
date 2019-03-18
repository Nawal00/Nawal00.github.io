$(() => {

  const $mainNav = $('#js-menu')
  const $navBarToggle = $('#js-navbar-toggle')

  function toggleActive(){
    $mainNav.toggleClass('active')
  }

  $navBarToggle.on('click', toggleActive)

  $(window).scroll(function(){
    const wScroll = $(this).scrollTop()

    $('.logoFlex').css({
      'transform': 'translate(0px, '+ wScroll /5 +'%)'
    })
  })


})
