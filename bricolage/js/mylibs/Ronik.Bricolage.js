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
        $.each(entries, function(){

            if(!posts[this.object.id]) {

                var type = "generic";
                var $content = $('<div>' + this.object.content + '</div>'), video = getVideo($content), $element;

                //Check to see if we have a video
                if(video) {
                    console.log(video);
                    this.object.video = video;
                    type = "video";
                }

                // Render the
                if(settings.renderers[type]) {
                    $element = $(settings.renderers[type].render(this));
                }

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
    }

    function getVideo($content) {
        var $video = $content.find(".meta_video");
        if($video.length != 0) {
            $video.find("iframe").attr({width: "100%", height: "100%"});

            return $video.html();
        }

        return null;
    }


    return {
        start: init
    };
};

Ronik.GenericRenderer = function(post) {
    var template = null;

    return {
        init: function() {
            template = Handlebars.compile($("#genericTemplate").html());
        },
        render: function(post){
            return template ? template(post) : "";
        }
    };
};

Ronik.VideoRenderer = function(post) {
    var template = null;

    return {
        init: function() {
            template = Handlebars.compile($("#videoTemplate").html());
        },
        render: function(post){
            return template ? template(post) : "";
        }
    };
};
