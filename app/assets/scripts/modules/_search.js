import $ from '../vendor/jquery-3.2.1.min';

// https://www.mediawiki.org/wiki/API:Search_and_discovery

$(document).ready(function () {
    $('#searchBtn').on('click', function () {
        $.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: {
                action: 'query',
                list: 'search',
                srsearch: $("input[name=wikipedia]").val(),
                format: 'json'
            },
            dataType: 'jsonp',
            success: processResult
        });
    });
});

function processResult(apiResult) {
    // clean previous results if any
    $('#displayResults').html("");
    // and reset input field
    $("input[name=wikipedia]").val("")
    // loop through results and append them to results div
    for (var i = 0; i < apiResult.query.search.length; i++) {
        $('#displayResults').append('<p>' + apiResult.query.search[i].title + '</p>');
        console.log(apiResult.query);
    }
}
// run search with Enter key while focused on input field
$("#wikiSearch").keydown(function (e) {
    if (e.which === 13) {
        $("#searchBtn").click();
    }
});
