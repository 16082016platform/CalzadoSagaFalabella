var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/backendServices');

var productoSelected, tallaSelected, colorSelected, codigoSelected, subrutaSelected, precioSelected;

function navigatedTo(args) {
    var page = args.object;

    page.navigationContext.pageTitle = page.navigationContext.nombre;

    productoSelected = page.navigationContext.Id;
    codigoSelected = page.navigationContext.codigo;
    precioSelected = page.navigationContext.precio;
    // context changes

    var subruta = page.navigationContext.subruta;
    if (typeof (subruta) !== "undefined") {
        for (var i = 0; i < subruta.length; i++) {
            subruta[i] = '~/images/categorias/' + page.navigationContext.subcategoriaExpand + '/' + page.navigationContext.codigo + '_' + subruta[i] + '.jpg';
            page.navigationContext.subruta[i] = subruta[i];
            subrutaSelected = subruta[0];
        }        
    }

    var tallas = page.navigationContext.tallas;
    var colores = page.navigationContext.colores;

    page.bindingContext = page.navigationContext



    if (typeof (tallas) !== "undefined") {
        var menor = 0;
        for (var i = 0; i < tallas.length; i++) {
            i == 0 ? menor = tallas[i] : "";
            if (menor > tallas[i]) {
                menor = tallas[i];
            }
        }
        page.getViewById("talla" + menor).cssClass = "tallaProductoSelected";
        tallaSelected = menor;
    }

    if (typeof (colores) !== "undefined") {
        page.getViewById("color" + colores[0]).cssClass = "colorProductoSelected";
        colorSelected = colores[0];
    }

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
    tallaSelected = page.text; 
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
    colorSelected = page.text;
}
exports.selectColor = selectColor;

function selectImagen(args) {
    var page = args.object;

    var items = page.parent.parent.parent;
    items.getViewById("imagenGrande").src = page.src;
    
}
exports.selectImagen = selectImagen;


function selectSolicitar(args) {
    helpers.navigate({
        moduleName: 'components/pedidos/pedidos',
        animated: true,
        transition: {
            name: "slide"
        },
        context: {
            producto: productoSelected,
            talla: tallaSelected,
            color: colorSelected,
            subruta: subrutaSelected,
            codigo: codigoSelected,
            precio: precioSelected,
        }
    });
}
exports.selectSolicitar = selectSolicitar;