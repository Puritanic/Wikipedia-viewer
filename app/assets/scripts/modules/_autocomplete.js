import $ from '../vendor/jquery-3.2.1.min';

import autocomplete from '../vendor/jquery-ui.min';

$('#wikiSearch').autocomplete({
    source: function (request, response) {
        $.ajax({
            url: "http://en.wikipedia.org/w/api.php",
            dataType: "jsonp",
            data: {
                'action': "opensearch",
                'format': "json",
                'search': request.term
            },
            success: function (data) {
                response(data[1]);
            }
        });
    }
});