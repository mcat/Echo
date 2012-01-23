function RonikEchoStream(options) {

    var settings = {
        appKey: "dev.ronikdesign",
        query: "scope:" + window.location.href,
        interval: 5000,
        topic: "/ronik/echo/search"
    };
    _.extend(settings, options);

    var timeoutId = null;
    var since = null;


    function doSearch() {
        var data = {
            appkey: settings.appKey,
            q: settings.query
        };

        if(since) {
            data.since = since;
        }

        $.ajax("http://api.echoenabled.com/v1/search", {
            dataType: "jsonp",
            data: data,
            success: function(data) {
                since = data.nextSince;

                //only publish an event when there is new content
                if(data.entries.length != 0) {
                    $.publish(settings.topic, [data]);
                }
            }

        });
    }

    function pause() {
        if(timeoutId != null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }

    // Set up the interval
    $.subscribe(settings.topic, function(event, data){
        timeoutId = setTimeout(doSearch, settings.interval);
    });


    return {
        start: doSearch,
        pause: pause
    };
}


