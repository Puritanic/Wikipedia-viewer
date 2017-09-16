import $ from '../vendor/jquery-3.2.1.min';

// https://www.mediawiki.org/wiki/API:Search_and_discovery

$(document).ready(function () {
    $('#searchBtn').on('click', function () {
        if ($("input[name=wikipedia]").val() < 1) {
            console.log('nope');
        } else {
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
        }
    });
});

function capitalize(searchTerm) {
    return searchTerm.charAt(0).toUpperCase() + searchTerm.slice(1);
}

function processResult(apiResult) {
    var searchTerm = apiResult[0];
    var title = apiResult[1];
    var description = apiResult[2];
    var link = apiResult[3];
    console.log(apiResult);

    // clean previous results if any
    $('#displayResults').html("");
    $('.searchTitle').html("");
    // and reset input field
    $("input[name=wikipedia]").val("")
    // loop through results and append them to results div
    for (var i = 0; i < apiResult[1].length; i++) {
        $('#displayResults').append('<p class="title"><a target="_blank" href="' + link[i] + '">' + title[i] + '</a></p>');
        if (description[i].length < 3) {
            $('#displayResults').append('<p> There is no description for this result :( </p>');
        }
        $('#displayResults').append('<p>' + description[i] + '</p>');
        $('#displayResults').append('<hr/>');
    }
    $('.searchTitle').append( capitalize(searchTerm) + ' may refer to: ');
}

