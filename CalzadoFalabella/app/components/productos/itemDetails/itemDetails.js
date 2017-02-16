var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/backendServices'),

    viewModel = require('../productos-view-model');

function navigatedTo(args) {
    var page = args.object;

    page.navigationContext.pageTitle =
        page.navigationContext.nombre;

    // context changes

    var subruta = page.navigationContext.subruta;
    if (typeof (subruta) !== "undefined") {
        for (var i = 0; i < subruta.length; i++) {
            subruta[i] = '~/images/categorias/' + page.navigationContext.subcategoriaExpand + '/' + page.navigationContext.codigo + '_' + subruta[i] + '.jpg';
            page.navigationContext.subruta[i] = subruta[i];
        }
    }
    page.bindingContext = page.navigationContext;
}
exports.navigatedTo = navigatedTo;


function selectTalla(args) {
    var page = args.object;

    var items = page.parent.parent;
    var array = JSON.parse("[" + items.items + "]");

    for (var i = 0; i < array.length; i++) {
        items.getViewById("talla" + array[i]).cssClass = "tallaProducto";
    }

    page.cssClass = "tallaProductoSelected";
}
exports.selectTalla = selectTalla;

function selectColor(args) {
    var page = args.object;

    var items = page.parent.parent;
    var cadena = items.items.toString();
    var array = cadena.split(",");

    for (var i = 0; i < array.length; i++) {
        items.getViewById("color" + array[i]).cssClass = "colorProducto";
    }

    page.cssClass = "colorProductoSelected";
}
exports.selectColor = selectColor;