$('body').scrollspy({ target: '#navbar-example2' });
$('[data-spy="scroll"]').each(function () {
    var $spy = $(this).scrollspy('refresh')
});
$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
    // do something...
})
