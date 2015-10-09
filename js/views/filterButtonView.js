define(function(require, exports, module){
    var Marionette = require("marionette_node"),
        template = require("hbs!templates/filterButtonView");

    module.exports = Marionette.ItemView.extend({
        template: template,
        events: {
            "click h2": "selectFilter"
        },

        //triggers: {
        //    'click h2': 'filterSelected'
        //},

        selectFilter: function (event) {
            this.model.set("buttonClass", "selected-filter-item");
            this.trigger("filterSelected", this.model.get("stateNumber"));
        },

        initialize: function (options) {
            //console.log(options);
        }
    });
});