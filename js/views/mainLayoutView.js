define(function(require, exports, module) {
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette"),
        template = require("hbs!templates/mainLayoutView"),
        _ = require("underscore"),
        $ = require("jquery");

    module.exports = Marionette.LayoutView.extend({
        el: "#application",
        template: template,
        regions: {
            filter: "#filter-block",
            orderList: "#orderList"
        }
    });
});