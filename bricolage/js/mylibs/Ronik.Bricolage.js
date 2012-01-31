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
        var toPrepend = [], images = 0, imagesMeasured = 0, done = false;

        var checkImages = function(){
            if(done && images == imagesMeasured) {
                prependEntries(toPrepend);
                console.log("Displaying new entries took " + ((new Date().getTime() - time) / 1000) + " seconds");
            }
        };

        _.each(entries, function(entry){
            if(!posts[entry.object.id]) {
                entry.bricolage = { type: "generic" };
                var $content = $('<div>' + entry.object.content + '</div>');

                entry.bricolage.displayDate = parseDate(entry.object.published).toString("MM/dd/yyyy h:mm tt");

                //Check to see if we have a video
                images += processImage($content, function(image){
                    if(image) {
                        entry.bricolage.image = image;
                    }
                    imagesMeasured += 1;
                    checkImages();
                });


                //Check to see if we have a video
                var video = getVideo($content);
                if(video) {
                    entry.bricolage.video = video;
                    entry.bricolage.type = "video";
                }

                // Render the entry
                var parentId = entry.targets[0].id;
                if(posts[parentId]) {
                    //handle children
                } else {
                    toPrepend.unshift(entry);
                }

                posts[entry.object.id] = entry;
            }
        });
        done = true;
        checkImages();
    }

    function prependEntries(toPrepend) {
        _.each(toPrepend, function(entry) {
            var $entry = render(entry);
            $("#main").prepend($entry);
            $entry.textfill({
                maxFontPixels: 36,
                innerTag: '.block-message'
            });
        });
        $("#main").masonry('reload');
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

    function processImage($content, callback) {
        var $image = $content.find(".metadata_image");
        if($image.length != 0) {
            var src = $image.data("src-full");
            if(!src) {
                src = $image.attr("src");
            }
            if(src) {
                setTimeout(function(){
                    measureImage(src, callback);
                }, 1);
                return 1;
            }
        }

        return 0;
    }

    function measureImage(url, callback){
        $("<img>")
            .load(function(){
                var $dummy = $(this);
                var size = { src: url, width: $dummy.width(), height: $dummy.height() };
                jQuery.isFunction(callback) && callback(size);
                $dummy.remove();

            })
            .error(function(){
                jQuery.isFunction(callback) && callback();
                $(this).remove();
            })
            .css({ display:"none", width:"auto", height:"auto", minWidth:"auto", minHeight:"auto" })
            .each(function(){ try{ $(this).css({ maxWidth:"auto", maxHeight:"auto" }) }catch(e){} })
            .appendTo(document.body)    // The width/height would be zero if img is not added to DOM.
            .attr({ src: url });
    }


    function getVideo($content) {
        // videos extracted from twitter
        var $video = $content.find(".meta_video");
        if($video.length != 0) {
            $video.find("iframe").attr({width: "100%", height: "100%"});

            return { html: $video.html() };
        }

        // videos coming from youtube
        $video = $content.find(".youtubeEmbed");
        if($video.length != 0) {
            $video.attr({width: "100%", height: "100%"});

            return { html: $video.wrap("<div>").parent().html() };
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

            var wide =  false;
            // Add width style
            var text = $('<div>' + entry.object.title + '</div>').text();
            if(text.length > 150) {
                wide = true;
            }

            if(entry.bricolage.image && entry.bricolage.image.width > 252) {
                wide = true;
            }

            styles += " "  + (wide ? "col2" : "col1");

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
