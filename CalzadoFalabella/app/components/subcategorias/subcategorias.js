'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    service = require('./subcategorias-service'),
    // additional requires

    viewModel = require('./subcategorias-view-model');

function onListViewItemTap(args) {
    var itemData = viewModel.get('listItems')[args.index];

    helpers.navigate({
        moduleName: 'components/productos/productos',
        animated: true,
        transition: {
            name: "slide"
        },
        context: {
            filter: {
                subcategoria: itemData.details.Id
            }
        }
    });
}
exports.onListViewItemTap = onListViewItemTap;

function flattenLocationProperties(dataItem) {
    var propName, propValue,
        isLocation = function(value) {
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

        if (context && context.filter) {
            return service.getAllRecords(context.filter);
        }

        return service.getAllRecords();
    };

    _fetchData()
        .then(function(result) {
            var itemsList = [];

            result.forEach(function(item) {

                flattenLocationProperties(item);

                itemsList.push({

                    header: item.nombre,

                    description: item.categoria,

                    // singleItem properties
                    details: item
                });
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

        // additional pageInit
    }
}

// START_CUSTOM_CODE_subcategorias
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_subcategorias
exports.pageLoaded = pageLoaded;


var frameModule = require("ui/frame");
function buttonBackTap(args) {
    var topmost = frameModule.topmost();
    topmost.goBack();
}
exports.buttonBackTap = buttonBackTap;