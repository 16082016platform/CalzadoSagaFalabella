'use strict';

var frameModule = require("ui/frame");
var imageModule = require("ui/image");

var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    service = require('./categorias-service'),
    // additional requires

    viewModel = require('./categorias-view-model');

function onListViewItemTap(args) {
    var item = args.object;
    var itemData = viewModel.get('listItems')[item.index];
    stopCount();
    helpers.navigate({
        moduleName: 'components/subcategorias/subcategorias',
        animated: true,
        transition: {
            name: "slide"
        },
        context: {
            filter: {
                categoria: itemData.details.Id
            },
            categoria: {
                categoria: itemData.header
            }
        }
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
var page;
function pageLoaded(args) {
    page = args.object;
    helpers.platformInit(page);
    page.bindingContext = viewModel;

    viewModel.set('isLoading', true);
    viewModel.set('listItems', []);

    function _fetchData() {
        var context = page.navigationContext;

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

                itemsList.push({

                    header: item.nombre,

                    index: index,

                    imagen: item.nombre.replace(/ñ/g, 'n'),
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
    }
    startCount();
}
exports.pageLoaded = pageLoaded;




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
