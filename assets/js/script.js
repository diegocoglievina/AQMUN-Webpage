$(document).ready(function () {

    // toggle mobile menu
    $('[data-toggle="toggle-nav"]').on('click', function () {
        $(this).closest('nav').find($(this).attr('data-target')).toggleClass('hidden');
        return true;
    });

    // feather icons
    feather.replace();

    // smooth scroll
    var scroll = new SmoothScroll('a[href*="#"]');

    // tiny slider
    $('#slider-1').slick({
        infinite: true,
        prevArrow: $('.prev'),
        nextArrow: $('.next'),
    });

    $(function() {
        AOS.init();
    });
      
    $(window).on('load', function() {
        AOS.refresh();
    });


    let currentDate = new Date();
    let dateOfEvent = new Date("2023-03-023");

    let days = (dateOfEvent - currentDate) / (1000 * 60 * 60 * 24);
    let hours = (dateOfEvent - currentDate) / (1000 * 60 * 60);
    let minutes = (dateOfEvent - currentDate) / (1000 * 60);
    let seconds = (dateOfEvent - currentDate) / 1000;

    days = Math.floor(days);
    hours = Math.floor(hours % 24);
    minutes = Math.floor(minutes % 60);
    seconds = Math.floor(seconds % 60);
});