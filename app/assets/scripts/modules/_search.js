import $ from '../vendor/jquery-3.2.1.min';

// https://www.mediawiki.org/wiki/API:Search_and_discovery

$(document).ready(function () {
    $('#searchBtn').on('click', function () {
        $.ajax({
            url: '//en.wikipedia.org/w/api.php', // Wiki API endpoint
            data: {
                action: 'opensearch', // https://www.mediawiki.org/wiki/API:Opensearch
                format: 'json', // return the data in the JSON format
                limit: 20, // limit the results
                search: $("input[name=wikipedia]").val()
            },
            dataType: 'jsonp', // JSONp return to "relax the same-origin-policy"
            success: processResult // callback function to proceed on a success
        });
    });
});

function processResult(apiResult) {
    var title = apiResult[1];
    var description = apiResult[2];
    var link = apiResult[3];
    console.log(apiResult);

    // clean previous results if any
    $('#displayResults').html("");
    // and reset input field
    $("input[name=wikipedia]").val("")
    // loop through results and append them to results div
    for (var i = 0; i < apiResult[1].length; i++) {
        $('#displayResults').append('<p>' + title[i] + '</p>');
    }
}
// run search with Enter key while focused on input field
$("#wikiSearch").keydown(function (e) {
    if (e.which === 13) {
        $("#searchBtn").click();
    }
});

// array[1] holds the match strings for results
// array[2] returns short descriptions
// array[3] returns the direct links to each result
