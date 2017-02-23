'use strict';
var ViewModel,
    Observable = require('data/observable').Observable;
// additional requires

ViewModel = new Observable({

    pageTitle: 'Productos',

    isLoading: false,
    listItems: [
        {
            "header": "Botines Hombre Coolant ST Miel",
            "subruta": [
                "1",
                "2",
                "3",
                "4"
            ],
            "index": 0,
            "coloresArray": [

            ],
            "precioDescuento": 529,
            "details": {
                "subcategoriaExpand": "Botines",
                "marcaExpand": "CAT",
                "retiratienda": true,
                "subcategoria": "c42944f0-f324-11e6-bd0b-0ffabc199865",
                "marca": "8a6cbe90-f329-11e6-bed6-3f950d4b4b99",
                "descripcion": "Los botines CAT gozan de una merecida reputación de durabilidad y resistencia en el mercado. Este modelo Coolant ST de color marrón es una clara prueba de ello.",
                "nombre": "Botines Hombre Coolant ST Miel",
                "caracteristicas": "Marca: CAT\nModelo: P711842\nColor: Miel\nCubierta: Cuero crazy horse\nCosturas: Dobles y triples, con nylon imputrescible\nPlantilla: Cuero en espuma EVA premoldeada\nSuela: Caucho\nPunta: Acero de alta resistencia",
                "precio": 529,
                "descuento": 0,
                "tallas": [
                    41.5,
                    42,
                    42.5,
                    43,
                    43.5,
                    44,
                    44.5
                ],
                "puntuacion": 0,
                "subruta": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "codigo": "14699409",
                "Id": "f9e788b0-f32c-11e6-bd0b-0ffabc199865",
            }
        },
        {
            "header": "Botas Hombre City",
            "index": 1,
            "coloresArray": [

            ],
            "precioDescuento": 299,
            "details": {
                "subcategoriaExpand": "Botines",
                "marcaExpand": "Call It Spring",
                "retiratienda": true,
                "nombre": "Botas Hombre City",
                "marca": "8d8f8260-f329-11e6-be1d-2787ce958db8",
                "subcategoria": "c42944f0-f324-11e6-bd0b-0ffabc199865",
                "caracteristicas": "Marca: Call It Spring\nModelo: PRILIN38\nTipo: Botas\nGénero: Hombre\nHorma: Normal",
                "descripcion": "Si buscas las últimas tendencias de la moda, tenemos para ti estas increíbles botas de la marca Call It Spring. Modelos inspiradores que crearán un gran look, ya que es una fusión entre descubrimiento e individualidad.",
                "descuento": 0,
                "precio": 299,
                "tallas": [
                    40,
                    40.5,
                    41,
                    41.5,
                    42,
                    42.5,
                    43,
                    43.5,
                    44
                ],
                "puntuacion": 0,
                "codigo": "15056510",
                "Id": "82654960-f32e-11e6-bd0b-0ffabc199865",
            }
        },
        {
            "header": "Botín de Hombre Holton Honey",
            "subruta": [
                "1",
                "2"
            ],
            "index": 2,
            "coloresArray": [

            ],
            "precioDescuento": 449,
            "details": {
                "subcategoriaExpand": "Botines",
                "marcaExpand": "Call It Spring",
                "retiratienda": true,
                "caracteristicas": "Modelo: P708276\nTalla variada\nEstilo: Casual\nPara hombre\nTipo: Botín\nMarca: Cat",
                "nombre": "Botín de Hombre Holton Honey",
                "marca": "8d8f8260-f329-11e6-be1d-2787ce958db8",
                "subcategoria": "c42944f0-f324-11e6-bd0b-0ffabc199865",
                "precio": 449,
                "descuento": 0,
                "tallas": [
                    40,
                    40.5,
                    41,
                    41.5,
                    42,
                    42.5,
                    43
                ],
                "puntuacion": 0,
                "subruta": [
                    "1",
                    "2"
                ],
                "codigo": "14661628",
                "Id": "e6708dc0-f32e-11e6-a758-2b4c7d6e0caa",
            }
        },
        {
            "header": "Botas Hombre City",
            "subruta": [
                "1"
            ],
            "index": 3,
            "coloresArray": [

            ],
            "precioDescuento": 299,
            "details": {
                "subcategoriaExpand": "Botines",
                "marcaExpand": "Call It Spring",
                "retiratienda": true,
                "nombre": "Botas Hombre City",
                "descripcion": "Si buscas las últimas tendencias de la moda, tenemos para ti estas increíbles botas de la marca Call It Spring. Modelos inspiradores que crearán un gran look, ya que es una fusión entre descubrimiento e individualidad.",
                "caracteristicas": "Marca: Call It Spring\nModelo: RENEWS96\nTipo: Botas\nGénero: Hombre\nHorma: Normal",
                "colores": [
                    "000000"
                ],
                "precio": 299,
                "descuento": 0,
                "tallas": [
                    39,
                    40,
                    42,
                    42.5,
                    43,
                    43.4,
                    44
                ],
                "puntuacion": 0,
                "subruta": [
                    "1"
                ],
                "subcategoria": "c42944f0-f324-11e6-bd0b-0ffabc199865",
                "marca": "8d8f8260-f329-11e6-be1d-2787ce958db8",
                "codigo": "15033753",
                "Id": "03953a30-f330-11e6-bbd5-67e06b747f51",
            }
        },
        {
            "header": "Botines Hombre Coolant ST Marrón",
            "subruta": [
                "1",
                "2",
                "3",
                "4"
            ],
            "index": 4,
            "coloresArray": [
                "804000",
                "000000",
                "FFE886"
            ],
            "precioDescuento": "264.50",
            "details": {
                "subcategoriaExpand": "Botines",
                "marcaExpand": "CAT",
                "retiratienda": true,
                "subcategoria": "c42944f0-f324-11e6-bd0b-0ffabc199865",
                "marca": "8a6cbe90-f329-11e6-bed6-3f950d4b4b99",
                "caracteristicas": "Marca: CAT\nModelo: P711840\nColor: Marrón\nCubierta: Cuero crazy horse\nCosturas: Dobles y triples, con nylon imputrescible\nPlantilla: Cuero en espuma EVA premoldeada\nSuela: Caucho\nPunta: Acero de alta resistencia",
                "descripcion": "Los botines CAT gozan de una merecida reputación de durabilidad y resistencia en el mercado. Este modelo Coolant ST de color marrón es una clara prueba de ello.",
                "nombre": "Botines Hombre Coolant ST Marrón",
                "precio": 529,
                "descuento": 50,
                "tallas": [
                    40,
                    40.5,
                    41,
                    41.5,
                    42,
                    42.5
                ],
                "puntuacion": 5,
                "ruta": "",
                "colores": [
                    ""
                ],
                "subruta": [
                    "1",
                    "2",
                    "3",
                    "4"
                ],
                "codigo": "14699397",
                "coloresObject": {
                    "Marrón": "\"804000\"",
                    "Negro": "\"000000\"",
                    "Amarillo": "\"FFE886\""
                },
                "coloresRuta": {
                    "Amarillo": "\"1\"",
                    "Negro": "\"1\""
                },
                "Id": "76e8f260-f32b-11e6-bed6-3f950d4b4b99",
            }
        }
    ],
    // additional properties
    subcategoria: "",
});

// START_CUSTOM_CODE_productos
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_productos
module.exports = ViewModel;