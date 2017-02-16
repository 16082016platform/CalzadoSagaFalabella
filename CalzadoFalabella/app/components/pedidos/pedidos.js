'use strict';
var isInit = true,
    helpers = require('../../utils/widgets/helper'),
    navigationProperty = require('../../utils/widgets/navigation-property'),

    gestures = require('ui/gestures'),
    dataService = require('../../dataProviders/backendServices'),

    // additional requires

    viewModel = require('./pedidos-view-model');


var frameModule = require("ui/frame");

function onRequestSuccess() {
    setTimeout(function () {
        frameModule.topmost().navigate({
            moduleName: "components/homeView/homeView",
            animated: false
        });
    }, 9000);

}

function onRequestFail(err) {
    alert(JSON.stringify(err));
    return err;
}

function saveData() {
    var data = dataService.data('pedidos');

    data.save({

        producto: viewModel.get('producto'),

        estado: viewModel.get('estado'),

        color: viewModel.get('color'),

        talla: viewModel.get('talla'),

        // save properties

    })
        .then(onRequestSuccess.bind(this))
        .catch(onRequestFail.bind(this));
}

function onpedidosModelFormSubmit() {
    saveData();
}

function onpedidosModelFormCancel() {
    helpers.back();
}

// additional functions

function pageLoaded(args) {
    var page = args.object;
    helpers.platformInit(page);
    page.bindingContext = viewModel;
    // additional pageLoaded
    if (isInit) {
        isInit = false;

        viewModel.on(viewModel.events.pedidosModelSubmit, onpedidosModelFormSubmit);

        viewModel.on(viewModel.events.pedidosModelCancel, onpedidosModelFormCancel);

        // additional pageInit

    }
    var datos = page.navigationContext;
    viewModel.set('producto', datos.producto);
    viewModel.set('talla', datos.talla);
    viewModel.set('color', datos.color);
    viewModel.set('estado', 'Pendiente');

    onpedidosModelFormSubmit();

}

// START_CUSTOM_CODE_pedidos
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_pedidos
exports.pageLoaded = pageLoaded;