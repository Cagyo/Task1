define(function(require, exports, module){
    var FilterButton = require("filterButton");
    var Backbone = require("backbone");

    module.exports = Backbone.Collection.extend({
        model: FilterButton,
        url: 'json/v2/filter.json'
    });
});