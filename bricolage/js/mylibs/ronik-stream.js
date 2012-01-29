var Ronik = Ronik || {};
Ronik.Stream = function(options) {

    var settings = {
        topic: "/ronik/echo/search"
    };
    _.extend(settings, options);

    var posts = {};
    var templates = {};


    function init() {
        templates.generic = Handlebars.compile($("#genericTemplate").html());
        templates.video  = Handlebars.compile($("#videoTemplate").html());

        $.subscribe(settings.topic, function(event, data){
            handleEntries(data.entries, templates);
        });
    }


    function handleEntries(entries, templates) {
        $.each(entries, function(){

            if(!posts[this.object.id]) {

                var $content = $('<div>' + this.object.content + '</div>'), video = getVideo($content), $element;

                if(video) {
                    console.log(video);
                    this.object.video = video;
                    $element = $(templates.video(this));
                } else {
                    $element = $(templates.generic(this));
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


