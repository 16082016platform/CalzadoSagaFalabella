'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    service = require('./productos-service'),
    // additional requires

    viewModel = require('./productos-view-model');

function onListViewItemTap(args) {
    var page = args.object;
    var itemData = viewModel.get('listItems')[page.index];
    stopCount();
    helpers.navigate({
        moduleName: 'components/productos/itemDetails/itemDetails',
        animated: true,
        transition: {
            name: "slide"
        },
        context: itemData.details
    });
}
exports.onListViewItemTap = onListViewItemTap;

function flattenLocationProperties(dataItem) {
    var propName, propValue,
        isLocation = function (value) {
            return propValue && typeof propValue === 'object' &&
                propValue.longitude && propValue.latitude;
        };

    for (propName in dataItem) {
        if (dataItem.hasOwnProperty(propName)) {
            propValue = dataItem[propName];
            if (isLocation(propValue)) {
                dataItem[propName] =
                    'Latitude: ' + propValue.latitude +
                    'Longitude: ' + propValue.longitude;
            }
        }
    }
}
// additional functions

function pageLoaded(args) {
    var page = args.object;

    helpers.platformInit(page);
    page.bindingContext = viewModel;

    viewModel.set('isLoading', true);
    viewModel.set('listItems', []);

    function _fetchData() {
        var context = page.navigationContext;
        viewModel.set('subcategoria', context.subcategoria.subcategoria);
        if (context && context.filter) {
            return service.getAllRecords(context.filter);
        }

        return service.getAllRecords();
    };

    _fetchData()
        .then(function (result) {
            var itemsList = [];
            var index = 0;
            result.forEach(function (item) {
                flattenLocationProperties(item);

                var coloresArray = [];
                if (typeof (item.coloresObject) !== "undefined") {
                    for (var key in item.coloresObject) {
                        coloresArray.push(item.coloresObject[key].replace(/"/g, ""));                        
                    }
                }

                itemsList.push({
                    header: item.nombre,

                    subruta: item.subruta,

                    index: index,

                    coloresArray: coloresArray,

                    precioDescuento: item.descuento > 0 ? (item.precio * (1 - (item.descuento / 100))).toFixed(2) : item.precio,

                    // singleItem properties
                    details: item
                });
                index++;
            });
            viewModel.set('listItems', itemsList);
            viewModel.set('isLoading', false);
        })
        .catch(function onCatch() {
            viewModel.set('isLoading', false);
        });
    // additional pageLoaded

    if (isInit) {
        isInit = false;
        startCount();
    }
}

// START_CUSTOM_CODE_productos
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_productos
exports.pageLoaded = pageLoaded;


var frameModule = require("ui/frame");
function buttonBackTap(args) {
    stopCount();
    var topmost = frameModule.topmost();
    topmost.goBack();
}
exports.buttonBackTap = buttonBackTap;





exports.resetCount = function (args) {
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
