var Ronik = Ronik || {};
Ronik.QuerySwitcher = (function(options){

    var settings = {
        filter: [
            {
                title: "All",
                query: "((childrenof:http://www.ronikdesign.com/id_Test -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8"
            },
            {
                title: "Facebook",
                query: "((childrenof:http://www.ronikdesign.com/id_twitter -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8"
            },
            {
                title: "Twitter",
                query: "((childrenof:http://www.ronikdesign.com/id_Controlled_Test -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned)) safeHTML:false children:1 -state:ModeratorDeleted,SystemFlagged,ModeratorFlagged -user.state:ModeratorBanned childrenSortOrder:reverseChronological childrenItemsPerPage:2 itemsPerPage:8"
            }
        ],
        renderTemplate: '#filterTemplate'
    };

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
        settings = $.extend({}, settings, options);
        buildFilter(settings.filter);
        bindEvents();
    }

    return {
        init: init
    };

})();