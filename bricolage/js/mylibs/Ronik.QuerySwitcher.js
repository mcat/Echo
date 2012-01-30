var Ronik = Ronik || {};
Ronik.QuerySwitcher = (function(options){

    var settings = {
        filter: [
            {
                title: "All",
                query: "childrenof:ronikdesign.com/test.html sortOrder:chronological"
            },
            {
                title: "Facebook",
                query: "childrenof:ronikdesign.com/test.html sortOrder:chronological"
            },
            {
                title: "Twitter",
                query: "childrenof:ronikdesign.com/test.html sortOrder:chronological"
            }
        ],
        renderTemplate: '#filterTemplate'
    };

    function buildFilter(filters) {
        template = Handlebars.compile($(settings.renderTemplate).html());
        var html = template(filters);
        $('#page header').append(html);
    }

    function bindEvents(){
        $('[data-filter]').on('click', function(){
            var query = $(this).attr('data-filter');
            $.publish("/ronik/echo/switchSearch", [query]);
        });
    }

    function init() {
        settings = $.extend({}, settings, options);
        buildFilter(settings.filter);
        bindEvents();
    }

    return {
        init: init
    };

})();