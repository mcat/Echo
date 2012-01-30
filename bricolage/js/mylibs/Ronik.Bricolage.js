var Ronik = Ronik || {};
Ronik.Bricolage = function(options) {

    var settings = {
        renderers: {
            generic: new Ronik.GenericRenderer(),
            video: new Ronik.VideoRenderer()
        },
        topic: "/ronik/echo/search"
    };
    _.extend(settings, options);

    var posts = {};

    function init() {
       _.each(settings.renderers, function(renderer)  {
           renderer.init();
       });

        $.subscribe(settings.topic, function(event, data){
            handleEntries(data.entries);
        });
    }


    function handleEntries(entries) {
        var time = new Date().getTime();
        $.each(entries, function(){
            console.log(this);
            if(!posts[this.object.id]) {
                this.bricolage = { type: "generic" };
                var $content = $('<div>' + this.object.content + '</div>');


                this.bricolage.displayDate = parseDate(this.object.published).toString("ddd h:mm tt");

                //Check to see if we have a video
                var image = getImage($content);
                if(image) {
                    this.bricolage.image = image;
                }

                //Check to see if we have a video
                var video = getVideo($content);
                if(video) {
                    this.bricolage.video = video;
                    this.bricolage.type = "video";
                }

                // Render the entry
                var $element = render(this);

                posts[this.object.id] = $element;

                var parentId = this.targets[0].id;
                if(posts[parentId]) {
                    //posts[parentId].append($element);
                } else {
                    $("#main").prepend($element).masonry('reload');
                    $element.find('.block-message').fitText();
                }
            }
        });
        console.log((new Date().getTime() - time) / 1000);
    }

    function render(entry) {
        var $element = null, renderer = getRenderer(entry.bricolage.type, entry.source.name);

        if(renderer) {
            $element = $(renderer.render(entry));
        }

        return $element;
    }

    function getRenderer(type, source) {
        var firstChoice =  type + "_" + source.toLowerCase(), renderer = null;
        if(settings.renderers[firstChoice]) {
            renderer = settings.renderers[firstChoice];
        } else if(settings.renderers[type]) {
            renderer = settings.renderers[type];
        }

        return renderer;
    }


    var iso8601 =  /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)Z$/;
    function parseDate(dateStr) {
        var matches = dateStr.match(iso8601);
        return new Date(Date.UTC(matches[1], matches[2] - 1, matches[3],
            matches[4], matches[5], matches[6]));
    }

    function getImage($content) {
        var $image = $content.find("[data-src-full]");
        if($image.length != 0) {

            return { html: $image.html(), src: $image.data("src-full") };
        }

        return null;
    }


    function getVideo($content) {
        var $video = $content.find(".meta_video");
        if($video.length != 0) {
            $video.find("iframe").attr({width: "100%", height: "100%"});

            return { html: $video.html() };
        }

        return null;
    }


    return {
        start: init
    };
};


Ronik.GenericRenderer = function() {
    var template = null;

    return {
        init: function() {
            template = Handlebars.compile($("#genericTemplate").html());
        },
        render: function(entry){
            var styles = "block block-style-1";

            // Add width style
            var text = $('<div>' + entry.object.title + '</div>').text();
            styles += " "  + (text.length > 150 ? "col2" : "col1");

            // Add provider style
            var source = entry.source.name.toLowerCase();
            styles += " source-" + source;

            entry.bricolage.styles = styles;

            return template ? template(entry) : "";
        }
    };
};

Ronik.VideoRenderer = function() {
    var template = null;

    return {
        init: function() {
            template = Handlebars.compile($("#videoTemplate").html());
        },
        render: function(entry){
            return template ? template(entry) : "";
        }
    };
};
