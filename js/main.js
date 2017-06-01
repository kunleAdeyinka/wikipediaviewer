$(document).ready(function(){

  $('#searchQuery').on('click', function(e){
      var query = $("#searchField").val();

      $.ajax({
            url: '//en.wikipedia.org/w/api.php',
            data: { action: 'query', list: 'search', srsearch: query, format: 'json' },
            dataType: 'jsonp',
            success: processResult
      });


  });
});

function processResult(data){
    var results = data.query.search;

    for(var i = 0; i < results.length; i++){
      $('#searchResults').append(`
        <div class="well">
          <div class="row">
            <a class="btn btn-default" target="_blank" href="https://en.wikipedia.org/wiki/${results[i].title}" role="button">
              <strong>${results[i].title}</strong>
            </a><br>
            ${results[i].snippet}
          </div>
        </div>
      `);
    }
}
