define(function(require, exports, module){
    var Marionette = require("marionette_node"),
        FilterButtonView = require("filterButtonView"),
        template = require("hbs!templates/filterView");

    module.exports = Marionette.CollectionView.extend({
        template: template,
        childView: FilterButtonView,

        selectFilter: function (e, state) {
            //to collection
            this.collection.map(function (filterButton) {
                if(filterButton.get("stateNumber") !== state)
                    filterButton.set("buttonClass", "selected-filter-item-underlined")
            });
            this.render();
            this.trigger("filterApplied", state);
        },

        initialize: function (options) {
            this.on('childview:filterSelected',this.selectFilter);
            //this.listenTo(this.childView, "childview:filterSelected", this.selectFilter);
        }
    });
});