define(function(require, exports, module){
        var Backbone = require("backbone");

        module.exports = Backbone.Model.extend({
            defaults: {
                active: false,
                stateClass: '',
                buttonClass: '',
                text: '',
                stateNumber: 3
            },

            initialize: function () {

            }
        });
    }
);