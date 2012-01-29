var Ronik = Ronik || {};
Ronik.Filter = function(options){

    var settings = {
        filter: {
            title: "Title",
            query: "childrenof:ronikdesign.com/test.html sortOrder:chronological"
        },
        renderTemplate: '#filterTemplate'
    };

    function buildFilter() {
        template = Handlebars.compile($(settings.renderTemplate).html());
    }

    function init() {
        settings = $.extend({}, settings, options);
    }

    return {
        init: init
    };

};