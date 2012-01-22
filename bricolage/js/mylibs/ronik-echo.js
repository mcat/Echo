(function($){

    var appKey = "dev.ronikdesign";

    function doSearch(since) {
        var data = {
            appkey: appKey,
            q: "scope:http://www.ronikdesign.com/test.html"
        };

        if(since) {
            data.since = since;
        }

        $.ajax("http://api.echoenabled.com/v1/search", {
            dataType: "jsonp",
            data: data,
            success: function(data) {
                $.publish("/echo/search", [data]);
            }

        });
    }

    $.subscribe("/echo/search", function(event, data){
        setTimeout(function(){
            doSearch(data.nextSince);
        }, 5000);
    });

    $(function(){
        doSearch();
    });
})(jQuery);


(function($){
    $.subscribe("/echo/search", function(event, data){
        $.each(data.entries, function(){
            $("#echo-stream").prepend("<div>" + this.object.content +"</div>");
        });
    });
})(jQuery);