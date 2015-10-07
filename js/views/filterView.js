define(function(require, exports, module){
    var Marionette = require("marionette_node");
    var FilterButtonView = require("filterButtonView");
    var template = require("hbs!templates/filterView");

    module.exports = Marionette.CollectionView.extend({
        template: template,
        childView: FilterButtonView,

        /*events: {
            "click a": "selectFilter"
        },*/

        selectFilter: function (e, state) {
            this.collection.map(function (filterButton) {
                if(filterButton.get("stateNumber") !== state)
                    filterButton.set("buttonClass", "selected-filter-item-underlined")
            });
            this.trigger("filterApplied", state);
        },

        initialize: function (options) {
            //this.listenTo(this.childView, "childview:filterSelected", this.selectFilter);
            this.on('childview:filterSelected',this.selectFilter);
        }
    });
});