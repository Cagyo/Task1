define(function(require, exports, module){
    var Marionette = require("marionette");
    var template = require("hbs!templates/orderView");
    var BookView = require("bookView");
    var CONSTANTS = require("otherConstants");
    Object.freeze(CONSTANTS);

    module.exports = Marionette.CompositeView.extend({
        template: template,
        childView: BookView,
        orderId: -1,

        initialize: function() {
            this.listenTo(this.model, 'change:displaySet', this.render);
            this.childViewContainer = '#items-list-'+this.model.get("id");
            this.ui = {
                list: '.full-order-info'
            };
        },

        changeDisplay: function (e) {
            if(this.model.get(CONSTANTS.ORDER_DISPLAY_FIELD) !== "block") {
                this.model.set(CONSTANTS.ORDER_DISPLAY_FIELD,"block");
            }
            else {
                this.model.set(CONSTANTS.ORDER_DISPLAY_FIELD,"none");
            }

        },

        //method: function () {
        //    this.ui.list.toggle(500);
        //    this.render();
        //},

        events: {
            'click .row': 'changeDisplay'
        }
    });
});