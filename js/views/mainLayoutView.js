define(function(require, exports, module) {
    //var userChannel = Radio.channel('user');
    var Marionette = require("marionette"),
        template = require("hbs!templates/mainLayoutView"),
        MainView = require("mainView"),
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