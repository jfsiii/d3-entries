(function() {
    !function() {
        var d3 = {
            version: "3.4.4"
        };
        d3.entries = function(map) {
            var entries = [];
            for (var key in map) entries.push({
                key: key,
                value: map[key]
            });
            return entries;
        };
        if (typeof define === "function" && define.amd) {
            define(d3);
        } else if (typeof module === "object" && module.exports) {
            module.exports = d3;
        } else {
            this.d3 = d3;
        }
    }();
})();