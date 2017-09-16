import $ from '../vendor/jquery-3.2.1.min';

// run search with Enter key while focused on input field
$("#wikiSearch").keydown(function (e) {
    if (e.which === 13) {
        $("#searchBtn").click();
    }
});

$('.searchIcon').on('click', function () { 
    $('.searchIcon').addClass('hideEl');
    $('.randomIcon').addClass('hideEl');

    $('.container').removeClass('flex');
    $('#wikiSearch').removeClass('hideEl');
    $('#searchBtn').removeClass('hideEl');
    $('#displayResults').removeClass('hideEl');
 });

 $('.searchIcon').on('mouseover', function () {
    $('.descS').removeClass('hideEl');
 });
 $('.searchIcon').on('mouseout', function () {
    $('.descS').addClass('hideEl');
 });

 $('.randomIcon').on('mouseover', function () {
    $('.descR').removeClass('hideEl');
 });
 $('.randomIcon').on('mouseout', function () {
    $('.descR').addClass('hideEl');
 });