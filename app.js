$(() => {

  const $mainNav = $('#js-menu')
  const $navBarToggle = $('#js-navbar-toggle')

  function toggleActive(){
    $mainNav.toggleClass('active')
  }

  $navBarToggle.on('click', toggleActive)

})
