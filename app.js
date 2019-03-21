$(() => {

  //burger nav bar toggle active
  const $mainNav = $('#js-menu')
  const $navBarToggle = $('#js-navbar-toggle')

  function toggleActive() {
    $mainNav.toggleClass('burgerActive')
  }

  $navBarToggle.on('click', toggleActive)

  // nav bar fixed on scroll
  $(window).scroll( () => {
    const wScroll = $(this).scrollTop()

    if($(window).width() <= 768){
      $('.logoFlex').css({
        'transform': 'translate(0px, '+ wScroll /15 +'%)'
      })
    }else {
      $('.logoFlex').css({
        'transform': 'translate(0px, '+ wScroll /4.6 +'%)'
      })
    }
    console.log(wScroll)
  })

  // add black class when user scroll down
  $(window).scroll(() =>{
    const wScroll = $(this).scrollTop()

    if (wScroll >= 135){
      $('.navbar').addClass('black')
    }else{
      $('.navbar').removeClass('black')
    }
  })

  // active nav-bar state on scroll
  const
    sections = $('section'),
    nav = $('nav'),
    navHeight = nav.outerHeight()

  $(window).scroll(function () {
    const curPos = $(this).scrollTop()

    sections.each(function() {
      const top = $(this).offset().top - navHeight
      const bottom = top + $(this).outerHeight()

      if (curPos >= top && curPos <= bottom) {
        nav.find('a').removeClass('active')
        sections.removeClass('active')

        $(this).addClass('active')
        nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active')
      } else if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        nav.find('a[href="#portfolio"]').removeClass('active')
        nav.find('a[href="#contact-me"]').addClass('active')
      }
    })
  })


})
