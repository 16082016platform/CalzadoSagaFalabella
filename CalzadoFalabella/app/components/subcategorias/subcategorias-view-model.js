'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Subcategorias',

    isLoading: false,
    listItems: [
        {
            "header": "Botines",
            "description": "98cc8010-f324-11e6-be1d-2787ce958db8",
            "index": 0,
            "details": {
                "categoria": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "nombre": "Botines",
                "CreatedAt": "2017-02-15T02:16:31.679Z",
                "ModifiedAt": "2017-02-15T02:16:31.679Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "c42944f0-f324-11e6-bd0b-0ffabc199865",
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
            "header": "Calzado Casual",
            "description": "98cc8010-f324-11e6-be1d-2787ce958db8",
            "index": 1,
            "details": {
                "nombre": "Calzado Casual",
                "categoria": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "CreatedAt": "2017-02-15T02:16:48.856Z",
                "ModifiedAt": "2017-02-15T02:16:48.856Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "ce664580-f324-11e6-b5f7-0f56c16ac12b",
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
            "header": "Calzado de Vestir",
            "description": "98cc8010-f324-11e6-be1d-2787ce958db8",
            "index": 2,
            "details": {
                "nombre": "Calzado de Vestir",
                "categoria": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "CreatedAt": "2017-02-15T02:17:06.303Z",
                "ModifiedAt": "2017-02-15T02:17:06.303Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "d8cc78f0-f324-11e6-ac2d-3f52178b3389",
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
            "header": "Sandalias",
            "description": "98cc8010-f324-11e6-be1d-2787ce958db8",
            "index": 3,
            "details": {
                "nombre": "Sandalias",
                "categoria": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "CreatedAt": "2017-02-15T02:17:16.661Z",
                "ModifiedAt": "2017-02-15T02:17:16.661Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "def8fa50-f324-11e6-ac2d-3f52178b3389",
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
            "header": "Zapatillas Deportivas Hombre",
            "description": "98cc8010-f324-11e6-be1d-2787ce958db8",
            "index": 4,
            "details": {
                "nombre": "Zapatillas Deportivas Hombre",
                "categoria": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "CreatedAt": "2017-02-15T02:17:40.094Z",
                "ModifiedAt": "2017-02-15T02:17:40.094Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "ecf091e0-f324-11e6-b5f7-0f56c16ac12b",
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
            "header": "Zapatillas Urbanas",
            "description": "98cc8010-f324-11e6-be1d-2787ce958db8",
            "index": 5,
            "details": {
                "nombre": "Zapatillas Urbanas",
                "categoria": "98cc8010-f324-11e6-be1d-2787ce958db8",
                "CreatedAt": "2017-02-15T02:17:57.907Z",
                "ModifiedAt": "2017-02-15T02:17:57.907Z",
                "CreatedBy": "00000000-0000-0000-0000-000000000000",
                "ModifiedBy": "00000000-0000-0000-0000-000000000000",
                "Owner": "00000000-0000-0000-0000-000000000000",
                "Id": "f78e9e30-f324-11e6-be1d-2787ce958db8",
                "Meta": {
                    "Permissions": {
                        "CanRead": true,
                        "CanUpdate": true,
                        "CanDelete": true
                    }
                }
            }
        },
    ],
    // additional properties
    categoria: "",
});

// START_CUSTOM_CODE_subcategorias
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_subcategorias
module.exports = ViewModel;