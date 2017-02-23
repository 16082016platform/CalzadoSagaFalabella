'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Categorias',

    isLoading: false,
    listItems: [
        {
            "header": "Calzado Hombre",
            "index": 0,
            "imagen": "Calzado Hombre",
            "details": {
                "nombre": "Calzado Hombre",
                "CreatedAt": "2017-02-15T02:15:18.929Z",
                "ModifiedAt": "2017-02-15T02:15:18.929Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "Meta": {
                    "Permissions": {
                        "CanRead": true,
                        "CanUpdate": true,
                        "CanDelete": true
                    }
                }
            }
        },
        {
            "header": "Calzado Mujer",
            "index": 1,
            "imagen": "Calzado Mujer",
            "details": {
                "nombre": "Calzado Mujer",
                "CreatedAt": "2017-02-15T02:15:26.121Z",
                "ModifiedAt": "2017-02-15T02:15:26.121Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "9d15e990-f324-11e6-be1d-2787ce958db8",
                "Meta": {
                    "Permissions": {
                        "CanRead": true,
                        "CanUpdate": true,
                        "CanDelete": true
                    }
                }
            }
        },
        {
            "header": "Calzado de Niños",
            "index": 2,
            "imagen": "Calzado de Ninos",
            "details": {
                "nombre": "Calzado de Niños",
                "CreatedAt": "2017-02-15T02:15:34.306Z",
                "ModifiedAt": "2017-02-15T04:24:45.950Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "a1f6d820-f324-11e6-bed6-3f950d4b4b99",
                "Meta": {
                    "Permissions": {
                        "CanRead": true,
                        "CanUpdate": true,
                        "CanDelete": true
                    }
                }
            }
        },
    ]
    // additional properties
});

// START_CUSTOM_CODE_categorias
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_categorias
module.exports = ViewModel;