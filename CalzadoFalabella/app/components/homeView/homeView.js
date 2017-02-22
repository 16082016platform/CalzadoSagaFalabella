var webViewModule = require("ui/web-view");
var frameModule = require("ui/frame");

exports.goToCategorias = function (args) {
    frameModule.topmost().navigate({
        moduleName: "components/categorias/categorias",
        animated: true,
        transition: {
            name: "slide"
        },
    });
}