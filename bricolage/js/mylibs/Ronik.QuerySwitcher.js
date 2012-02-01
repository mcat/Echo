var Ronik = Ronik || {};
Ronik.QuerySwitcher = function(options){

    var settings = {
        renderTemplate: '#filterTemplate'
    };

    _.extend(settings, options);

    function buildFilter(filters) {
        template = Handlebars.compile($(settings.renderTemplate).html());
        var html = template(filters);
        $('#pageHeader').append(html);
    }

    function bindEvents(){
        $('[data-filter]').on('click', function(){
            var query = $(this).attr('data-filter');
            $.publish(settings.topic + "/update", [query]);
        });
    }

    function init() {
        buildFilter(settings.filter);
        bindEvents();
    }

    return {
        start: init
    };

};