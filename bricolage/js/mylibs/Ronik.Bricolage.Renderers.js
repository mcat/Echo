var Ronik = Ronik || {};

Ronik.GenericRenderer = function() {
    var template = null;

    return {
        init: function() {
            template = Handlebars.compile($("#genericTemplate").html());
        },
        render: function(entry){
            var styles = ["block", "block-style-1"];

            var wide =  false;
            // Determine width
            var text = $('<div>' + entry.object.title + '</div>').text();
            if(text.length > 150) {
                styles.push("long-text");
                wide = true;
            } else if(text.length > 0) {
                styles.push("short-text");
            }

            if(entry.bricolage.image) {
                var imageWidth = entry.bricolage.image.width;
                if(imageWidth > 200) {
                    if(imageWidth > 252) {
                        wide = true;
                        styles.push("large-image");
                    } else {
                        styles.push("small-image");
                    }
                } else {
                    // don't show shitty images
                    delete entry.bricolage.image;
                }
            }

            // Add width style
            styles.push(wide ? "col2" : "col1");

            // Add provider style
            styles.push(" source-" + entry.bricolage.source);

            entry.bricolage.styles = styles.join(" ");

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
