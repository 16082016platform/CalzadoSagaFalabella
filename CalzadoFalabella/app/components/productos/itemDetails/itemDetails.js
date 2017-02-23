var helpers = require('../../../utils/widgets/helper'),

    dialogs = require('ui/dialogs'),

    dataService = require('../../../dataProviders/backendServices');

var nombreSelected, productoSelected, tallaSelected, colorSelected, nombreColorSelected, codigoSelected, subrutaSelected, precioSelected;

var page, coloresValues = [], coloresKeys = [];
var coloresRutaValues = [], coloresRutaKeys = [];
function navigatedTo(args) {
    page = args.object;
    page.navigationContext.pageTitle = page.navigationContext.nombre;

    productoSelected = page.navigationContext.Id;
    codigoSelected = page.navigationContext.codigo;
    precioSelected = page.navigationContext.precio;
    nombreSelected = page.navigationContext.nombre;
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
    var coloresObject = page.navigationContext.coloresObject;
    var coloresRuta = page.navigationContext.coloresRuta;
    

    coloresValues = [];
    coloresKeys = [];
    if (typeof (coloresObject) !== "undefined") {
        for (var key in coloresObject) {
            coloresValues.push(coloresObject[key].replace(/"/g, ""));
            coloresKeys.push(key);
        }
        page.navigationContext.coloresObject = coloresValues;
    } else {
        page.navigationContext.coloresObject = undefined;
    }



    if (typeof (coloresRuta) !== "undefined") {
        for (var key in coloresRuta) {
            coloresRutaValues.push(coloresRuta[key].replace(/"/g, ""));
            coloresRutaKeys.push(key);
        }
        page.navigationContext.coloresRuta = coloresRutaValues;
    } else {
        coloresRutaValues = [];
        coloresRutaKeys = [];
        page.navigationContext.coloresRuta = undefined;
    }


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

    if (typeof (coloresObject) !== "undefined") {
        page.getViewById("color" + coloresValues[0]).cssClass = "colorProductoSelected";
        colorSelected = coloresValues[0];
        page.getViewById("nombreColor").text = coloresKeys[0];
    }
    startCount();
}
exports.navigatedTo = navigatedTo;


function selectTalla(args) {
    var talla = args.object;

    var items = talla.parent.parent;
    var array = JSON.parse("[" + items.items + "]");

    for (var i = 0; i < array.length; i++) {
        items.getViewById("talla" + array[i]).cssClass = "tallaProducto";
    }
    talla.cssClass = "tallaProductoSelected";
    tallaSelected = talla.text;
}
exports.selectTalla = selectTalla;

function selectColor(args) {
    var color = args.object;
    var items = color.parent.parent;
    var cadena = items.items.toString();
    var array = cadena.split(",");

    for (var i = 0; i < array.length; i++) {
        items.getViewById("color" + array[i]).cssClass = "colorProducto";
        if (array[i] == color.text) {
            page.getViewById("nombreColor").text = coloresKeys[i];
            nombreColorSelected = coloresKeys[i];
        }
    }

    var oldRuta = page.getViewById("imagenGrande").src;
    for (var j = 0; j < coloresRutaKeys.length; j++) {
        if (nombreColorSelected == coloresRutaKeys[j]) {
            if (subrutaSelected.slice(0, -5) == oldRuta.slice(0, oldRuta.indexOf("_") + 1)) {
                var newRuta = oldRuta.slice(0, oldRuta.indexOf("_") + 1) + "1" + nombreColorSelected + ".jpg";
                page.getViewById("imagenGrande").src = newRuta;
                break;
            }
        } else {
            page.getViewById("imagenGrande").src = subrutaSelected;
        }
    }

    color.cssClass = "colorProductoSelected";
    colorSelected = color.text;
}
exports.selectColor = selectColor;


function selectImagen(args) {
    var image = args.object;

    var items = image.parent.parent.parent;
    items.getViewById("imagenGrande").src = image.src;
    subrutaSelected = image.src;
}
exports.selectImagen = selectImagen;


function selectSolicitar(args) {
    stopCount();
    if (page.getViewById("nombreColor").visibility == "visible") {
        colorSelected = "ffffff"
        nombreColorSelected = ""
    }
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
            nombreColor: nombreColorSelected,
            subruta: subrutaSelected,
            codigo: codigoSelected,
            precio: precioSelected,
            nombre: nombreSelected,
        }
    });
}
exports.selectSolicitar = selectSolicitar;


var frameModule = require("ui/frame");
function buttonBackTap(args) {
    stopCount();
    var topmost = frameModule.topmost();
    topmost.goBack();
}
exports.buttonBackTap = buttonBackTap;



exports.stopCount = function (args) {
    c = 0;
}
var c = 0, t, timer_is_on = 0;
function timedCount() {
    c++;
    t = setTimeout(function () { timedCount() }, 1000);
    if (c == 60) {
        c = 0;
        stopCount();
        goToInicio();
    }
}
function startCount() {
    //if (!timer_is_on) {
    timer_is_on = 1;
    timedCount();
    //}
}
function stopCount() {
    clearTimeout(t);
    timer_is_on = 0;
    c = 0;
}
function goToInicio() {
    helpers.navigate({
        moduleName: 'components/homeView/homeView',
        animated: true,
        transition: {
            name: "slide"
        }
    });
}
