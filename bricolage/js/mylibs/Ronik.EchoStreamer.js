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
    var pageAfter = null;

    var reset = false;

    $.subscribe("/ronik/echo/switchSearch", function(e, query){
        reset = true;
        settings.query = query;
        pause();
        get(settings.query, {callback: pollingCallback})
    });

    function get(query, options)  {
        var data = {
            appkey: settings.appKey,
            q: query + (options.pageAfter ? ' pageAfter:' + options.pageAfter : '')
        };

        if(options.since) {
            data.since = options.since;
        }

        $.ajax("http://api.echoenabled.com/v1/search", {
            dataType: "jsonp",
            data: data,
            success: function(data) {

                since = (since && reset) ?  null : data.nextSince;
                if(data.nextPageAfter) {
                    pageAfter = (pageAfter == null || reset) ? parseFloat(data.nextPageAfter) :
                        Math.min(parseFloat(data.nextPageAfter), pageAfter);
                }

                //only publish an event when there is new content
                if(data.entries.length != 0) {
                    $.publish(settings.topic, [data, reset]);
                    reset = false;
                }

                $.isFunction(options.callback) && options.callback(data, query, options);
            }

        });
    }



    window.loadMore = function() {
        if(pageAfter) {
            get(settings.query, { pageAfter: pageAfter });
        }
    };

    function pollingCallback(data, query, options) {
        timeoutId = setTimeout(function(){
            options = options || {};
            options.since = since;
            get(query, options);
        }, settings.interval);
    }


    function pause() {
        if(timeoutId != null) {
            clearTimeout(timeoutId);
            timeoutId = null;
        }
    }


    return {
        start: function(){
            get(settings.query, {callback: pollingCallback});
        },
        pause: pause
    };
};


