define(function(require, exports, module){
    var FilterButton = require("filterButton"),
        Backbone = require("backbone");

    module.exports = Backbone.Collection.extend({
        model: FilterButton,
        url: 'json/v2/filter.json',
        resetButtonClassExcept: function (state) {
            this.map(function (filterButton) {
                if(filterButton.get("stateNumber") !== state)
                    filterButton.set("buttonClass", "selected-filter-item-underlined");
            });
        }
    });
});