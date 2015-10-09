define(function(require, exports, module){
    var Marionette = require("marionette_node"),
        FilterButtonView = require("filterButtonView"),
        template = require("hbs!templates/filterView");

    module.exports = Marionette.CollectionView.extend({
        template: template,
        childView: FilterButtonView,
        childEvents: {
            'filterSelected': 'selectFilter'
        },
        selectFilter: function (e, state) {
            this.collection.resetButtonClassExcept(state);
            this.render();
            this.trigger("filterApplied", state);
        }
    });
});