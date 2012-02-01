var Ronik = Ronik || {};
Ronik.Bricolage = function(options) {

    var settings = {
        renderers: {
            generic: new Ronik.GenericRenderer(),
            video: new Ronik.VideoRenderer()
        },
        parsers: {
            image_facebook: new Ronik.FacebookImageParser(),
            image_twitter: new Ronik.TwitterImageParser(),
            image_tumblr: new Ronik.TumblrImageParser()
        },
        topic: "/ronik/echo/search",
        $container: $("#main")
    };
    _.extend(settings, options);

    var posts = {};
    var oldestEntry = null;

    function init() {
        _.each(settings.renderers, function(renderer)  {
            renderer.init();
        });

        $.subscribe(settings.topic, function(event, data, dump){
            if (dump) {
                posts = {};
                settings.$container.empty();
            }
            handleEntries(data.entries);
        });


        // Bind Events:

        $(window).scroll(function(){
            if($(document).outerHeight() - ($(this).scrollTop() + $(window).height()) < 300){
                $('.loading-indicator').css({visibility: "visible"});
                $.publish(settings.topic + "/more");
            }
        });

        $('#main').on('click', '.block-reply-count', function(){
            console.log("ok");
            $(this).parents('.block').addClass('flip');
        });

        $('#main').on('click', '.block-thread-back', function(){
            $(this).parents('.block').removeClass('flip');
        });

        $('#main').on('click', '.block-visibility', function(){
            $(this).parents('.block').toggleClass('hide-content');
        });
    }

    function handleEntries(entries) {
        var time = new Date().getTime();
        var toAdd = [], images = 0, imagesMeasured = 0, done = false, numEntries = entries.length;

        var checkImages = function(){
            if(done && images == imagesMeasured) {
                add(toAdd);
                console.log("Displaying new entries took " + ((new Date().getTime() - time) / 1000) + " seconds");
            }
        };

        _.each(entries, function(entry, i){
            if(!posts[entry.object.id]) {
                entry.bricolage = { type: "generic" };
                var $content = $('<div>' + entry.object.content + '</div>');

                entry.bricolage.source = entry.source.name.toLowerCase();
                entry.bricolage.timestamp = getPublishedDate(entry).getTime();
                entry.bricolage.displayDate = getPublishedDate(entry).toString("MMM d h:mm tt");

                //Check to see if we have a video
                images += processImage(entry.bricolage.source, $content, function(image){
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

                // Only show root items
                if(!posts[entry.targets[0].conversationID]) {
                    toAdd.push(entry);
                }

                posts[entry.object.id] = entry;

            }
        });

        done = true;
        checkImages();
    }

    function getPublishedDate(entry) {
        return parseDate(entry.object.published);
    }

    function add(toAdd) {
        if(toAdd.length > 0) {

            // Determine whether we are appending or prepending
            var direction = "append";
            if(!oldestEntry || oldestEntry.bricolage.timestamp < toAdd[0].bricolage.timestamp) {
                toAdd = toAdd.reverse();
                direction = "prepend";
            }

            _.each(toAdd, function(entry) {
                var $entry = render(entry);

                entry.bricolage.$entry = $entry;

                settings.$container[direction]($entry);
                $entry.textfill({
                    maxFontPixels: 36,
                    innerTag: '.block-message'
                });
            });
            settings.$container.masonry('reload');

            // Save the new oldest date;
            var lastEntry = _.last(toAdd);
            if(!oldestEntry || lastEntry.bricolage.timestamp < oldestEntry.bricolage.timestamp) {
                oldestEntry = lastEntry;
            }
        }
    }

    function render(entry) {
        var $element = null, renderer = getRenderer(entry.bricolage.type, entry.bricolage.source);

        if(renderer) {
            $element = $(renderer.render(entry));
        }

        return $element;
    }

    function getParser(type, source) {
        return lookupObject(type, source, settings.parsers);
    }


    function getRenderer(type, source) {
        return lookupObject(type, source, settings.renderers);
    }

    function lookupObject(type, source, objs) {
        var firstChoice =  type + "_" + source.toLowerCase(), renderer = null;
        if(objs[firstChoice]) {
            renderer = objs[firstChoice];
        } else if(objs[type]) {
            renderer = objs[type];
        }

        return renderer;
    }


    var iso8601 =  /^(\d{4})-(\d\d)-(\d\d)T(\d\d):(\d\d):(\d\d)Z$/;
    function parseDate(dateStr) {
        var matches = dateStr.match(iso8601);
        return new Date(Date.UTC(matches[1], matches[2] - 1, matches[3],
            matches[4], matches[5], matches[6]));
    }

    function processImage(source, $content, callback) {
        var parser = getParser("image", source);
        if(parser) {
            var src = parser.parse($content);
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


Ronik.TwitterImageParser = function() {};
Ronik.TwitterImageParser.prototype.parse = function($content) {
    var src = null;
    var $image = $content.find(".metadata_image");
    if($image.length != 0) {
        src = $image.data("src-full");
        if(!src) {
            src = $image.attr("src");
        }
    }

    return src;
};



Ronik.FacebookImageParser = function() {};
Ronik.FacebookImageParser.prototype.parse = function($content) {
    var src = null;
    var $image = $content.find(".metadata_image");
    if($image.length != 0) {
        src = decodeURIComponent($image.attr("src").replace(/http:\/\/external.ak.fbcdn.net\/safe_image.php.*url=(.*)&?.*/, "$1"));
    }

    return src;
};



Ronik.TumblrImageParser = function() {};
Ronik.TumblrImageParser.prototype.parse = function($content) {
    var src = null;
    var $image = $content.find(".article_media img");
    if($image.length != 0) {
        src = $image.attr("src").replace("_250.jpg", "_500.jpg");
    }

    return src;

};


