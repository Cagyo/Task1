define(["jquery","underscore","worker"], function($,_,Worker){
    (function(){
        var worker = new Worker();
        var filters = $("h2");
        _.each(filters, function(filter){
            filter.onclick = worker.filterList;
        });
        function hideSection (section) {
            section.onclick = worker.hideOrderInfo
        };
        _.each($('.currentOrderSection'),hideSection);
        _.each($('.completedOrderSection'),hideSection);
        _.each($('.cancelledOrderSection'),hideSection);
    })();
});