
$(document).ready(function () {
    var stringLenght = 5;
    function generateUrl(stringLenght) {
        var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
        var shortUrl = 'http://chr.dc/';
        for (var i = 0; i < stringLenght; i++) {
            var rnum = Math.floor(Math.random() * chars.length);
            shortUrl += chars.substring(rnum, rnum + 1);
        }
        document.getElementById('address').value = shortUrl;
    }

   $('#button').click(function() {
        if ($(this).val() == "Encurtar") {
            generateUrl(stringLenght);
            $(this).val("Copiar");
        }
        else {
            document.execCommand('copy',false,
                $('#address').select());
            $(this).val("Encurtar");
        }
        });


        function sortJasonHits(a,b){
        return a.hits < b.hits ?1 :-1;
    };

     $(function() {
         var totalHits = 0;
        $.getJSON('script/urls.json', function(data) {
            console.log('success');
            data.urls = $(data.urls).sort(sortJasonHits);
            $.each(data.urls, function (i, url) {
                $('#list').append('<li><a href="'+url.shortUrl+'">'+url.shortUrl+'</a> <span>'+url.hits+'</span></li>');
                totalHits+=url.hits;
            })

                .error(function () {
                console.log('error');
            });
            $('#counter').text(totalHits)
    });

      });


});
