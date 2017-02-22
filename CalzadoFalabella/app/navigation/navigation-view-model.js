'use strict';
var menuItems,
    observable = require('data/observable'),
    navigationViewModel = new observable.Observable();

menuItems = [{
    "title": "HomeView",
    "moduleName": "components/homeView/homeView",
    "icon": "\ue0dd"
}, {
    "title": "Categorias",
    "moduleName": "components/categorias/categorias",
    "icon": "\ue204"
}, {
    "title": "Subcategorias",
    "moduleName": "components/subcategorias/subcategorias",
    "icon": "\ue0e2"
}, {
    "title": "Productos",
    "moduleName": "components/productos/productos",
    "icon": "\ue0d7"
}, {
    "title": "Pedidos",
    "moduleName": "components/pedidos/pedidos",
    "icon": "\ue206"
}, {
    "title": "Banners",
    "moduleName": "components/banners/banners",
    "icon": "\ue205"
}];

navigationViewModel.set('menuItems', menuItems);
navigationViewModel.set('backButtonHidden', true);

module.exports = navigationViewModel;