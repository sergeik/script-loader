/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var path = require("path");
var loaderUtils = require("loader-utils");

module.exports = function () {
};

module.exports.pitch = function (remainingRequest) {
    var options = loaderUtils.getOptions(this) || {};

    var resourcePath = this.resourcePath;
    if (options.rootFolders) {
        for (var i = 0; i < options.rootFolders.length; i++) {
            if (resourcePath.indexOf(options.rootFolders[i]) == 0) {
                resourcePath = resourcePath.slice(options.rootFolders[i].length);
                break;
            }
        }
    }

    this.cacheable && this.cacheable();
    return "require(" + JSON.stringify("!!" + path.join(__dirname, "addScript.js")) + ")" +
        "(require(" +
        JSON.stringify("!!" + require.resolve("raw-loader") + "!" + remainingRequest) + ")" +
        (this.debug || options.sourceMap ?
            "+" +
            JSON.stringify(
                "\n\n// SCRIPT-LOADER FOOTER\n//# sourceURL=script:///" +
                encodeURI(resourcePath)
            ) :
            "") +
        ")";
};
