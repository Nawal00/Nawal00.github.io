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
    console.log(wScroll)
  })

  $(window).scroll(function(){
    const wScroll = $(this).scrollTop()

    if (wScroll >= 135){
      $('.navbar').addClass('black')
    }else{
      $('.navbar').removeClass('black')
    }
  })

})
