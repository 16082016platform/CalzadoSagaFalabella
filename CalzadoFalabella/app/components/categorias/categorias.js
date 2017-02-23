'use strict';

var frameModule = require("ui/frame");
var imageModule = require("ui/image");

var animation = require("ui/animation");
var colorModule = require("color");
var enums = require("ui/enums");

var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    service = require('./categorias-service'),
    // additional requires

    viewModel = require('./categorias-view-model');

var fileSystemModule = require("file-system");
var fileName = "categorias.json";
var file = fileSystemModule.knownFolders.documents().getFile(fileName);


function onListViewItemTap(args) {
    stopCount();
    var item = args.object;
    item.android.bringToFront();
    item.animate({
        // opacity: 0,
        backgroundColor: new colorModule.Color("#b2c804"),
        // translate: { x: 500, y: 500 },
        scale: { x: 2, y: 2 },
        rotate: 360,
        duration: 2000,
        delay: 100,
        iterations: 1,
        curve: enums.AnimationCurve.easeIn
    });
    return;

    var itemData = viewModel.get('listItems')[item.index];
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

    // viewModel.set('isLoading', true);
    // viewModel.set('listItems', []);

    // function _fetchData() {
    //     var context = page.navigationContext;

    //     if (context && context.filter) {
    //         return service.getAllRecords(context.filter);
    //     }

    //     return service.getAllRecords();
    // };

    // _fetchData()
    //     .then(function (result) {
    //         var itemsList = [];
    //         var index = 0;
    //         result.forEach(function (item) {
    //             flattenLocationProperties(item);

    //             itemsList.push({

    //                 header: item.nombre,

    //                 index: index,

    //                 imagen: item.nombre.replace(/ñ/g, 'n'),
    //                 // singleItem properties
    //                 details: item
    //             });
    //             index++;
    //         });

    //         viewModel.set('listItems', itemsList);
    //         viewModel.set('isLoading', false);
    //     })
    //     .catch(function onCatch() {
    //         viewModel.set('isLoading', false);
    //     });
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
