var Ronik = Ronik || {};
Ronik.EchoStreamer = function(options) {

    var settings = {
        appKey: "dev.ronikdesign",
        query: "scope:" + window.location.href,
        interval: 5000,
        topic: "/ronik/echo/search"
    };
    _.extend(settings, options);

    var timeoutId = null;
    var since = null;

    var dump = false;

    $.subscribe("/ronik/echo/switchSearch", function(e, query){
        dump = true;
        settings.query = query;
        pause();
        doSearch();
    });

    function doSearch() {
        var data = {
            appkey: settings.appKey,
            q: settings.query
        };

        if(!dump && since) {
            data.since = since;
        }

        $.ajax("http://api.echoenabled.com/v1/search", {
            dataType: "jsonp",
            data: data,
            success: function(data) {
                if(since && dump) {
                    since = null;
                } else {
                    since = data.nextSince;
                }

                timeoutId = setTimeout(doSearch, settings.interval);

                //only publish an event when there is new content
                if(data.entries.length != 0) {
                    $.publish(settings.topic, [data, dump]);
                    dump = false;
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


    return {
        start: doSearch,
        pause: pause
    };
};


