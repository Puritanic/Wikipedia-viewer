import $ from '../vendor/jquery-3.2.1.min';


function searchWiki() {
    $('.searchIcon').addClass('hideEl');
    $('.randomIcon').addClass('hideEl');
    
    $('.container').removeClass('flex');
    $('#wikiSearch').removeClass('hideEl');
    $('#searchBtn').removeClass('hideEl');
    $('#displayResults').removeClass('hideEl');
 }

 function home() {
    $('.container').addClass('flex');
    $('#wikiSearch').addClass('hideEl');
    $('#searchBtn').addClass('hideEl');
    $('#displayResults').addClass('hideEl');
    $('.searchTitle').addClass('hideEl');
    
    $('.searchIcon').removeClass('hideEl');
    $('.randomIcon').removeClass('hideEl');
 }

// run search with Enter key while focused on input field
$("#wikiSearch").keydown(function (e) {
    if (e.which === 13) {
        $("#searchBtn").click();
    }
});
// remove buttons on searchIcon and search wiki click
$('.searchIcon').on('click', searchWiki);
$('.navSearch').on('click', searchWiki);

// show home buttons 
$('.navHome').on('click', home);

 // Show button descriptions on mouseover
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

