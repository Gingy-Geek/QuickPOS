export const allCategories = [
    {name: 'Hamburguesas', icon: '/icons/categorias/hamburguesas.png'},
    {name: 'Bebidas', icon: '/icons/categorias/bebidas.png'},
    {name: 'Acompañamientos', icon: '/icons/categorias/acompanamientos.png'},
    {name: 'Cafes', icon: '/icons/categorias/cafes.png'},
    {name: 'Postres', icon: '/icons/categorias/postres.png'},
    {name: 'Combos', icon: '/icons/categorias/combos.png'},
]

export const allItems = [
    {title: 'Doble Bacon Cheddar McMelt', category: 'Hamburguesas', description: 'Deliciosa hamburguesa con dos medallones de carne, abundante queso cheddar, dos tiras de bacon y cebolla grillada.', quantity: 1, price: 4050.00, 
    modifiers:[
        {title: 'Pan', price: 0.00, initialQuantity:1, quantity: 1, max: 1, checkbox: true, icon:'/icons/ingredientes/pan.jpeg'},
        {title: 'Carne', price: 1200.00, initialQuantity:2, quantity: 2, max: 3, checkbox: false, icon:'/icons/ingredientes/carne.jpeg'},
        {title: 'Queso Cheddar Fundido', price: 0.00, initialQuantity:1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/queso-cheddar-fundido.jpeg'},
        {title: 'Cebolla Grillada', price: 120.00, initialQuantity:1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla-grillada.jpeg'},
        {title: 'Bacon', price: 700.00, initialQuantity:1, quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/bacon.jpeg'},
    ],
    extras:[],
    adicionales:[],
    obligatorios:[],
    icon:"/icons/hamburguesas/cheddar-mcMelt.jpeg"},

   
    {title: 'Hamburguesa con Queso', category: 'Hamburguesas', description: 'Hamburguesa con queso Cheddar, cebolla, mostaza y ketchup.', quantity: 1, price: 2000.00, modifiers:[
        {title: 'Pan Regular', price: 0.00, initialQuantity: 1 ,quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pan-regular.jpeg'},
        {title: 'Cebolla', price: 0.00, initialQuantity: 1 ,quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla.jpeg'},
        {title: 'Mostaza', price: 0.00, initialQuantity: 1 ,quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Queso Cheddar en fetas', price: 500.00, initialQuantity: 1 ,quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Carne', price: 900.00, initialQuantity: 1 ,quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/carne.jpeg'},
        {title: 'Ketchup', price: 0.00, initialQuantity: 1 ,quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
    ],
    extras:[
        {title: 'Tomate', price: 500.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/tomate.jpeg'},
        {title: 'Bacon', price: 700.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/bacon.jpeg'},
    ],
    adicionales:[],
    obligatorios:[],
    icon:"/icons/hamburguesas/hamburgesa-con-queso.jpeg"},

    {title: 'McPollo', category: 'Hamburguesas', description: 'Hamburguesa de pollo, con un colchón de lechuga y mayonesa.', quantity: 1, price: 2300.00, modifiers:[
        {title: 'Pan Cuarto', price: 0.00, initialQuantity: 1, quantity: 1,checkbox: true, max: 1, icon:'/icons/ingredientes/pan-cuarto.jpeg'},
        {title: 'Lechuga', price: 0.00, initialQuantity: 1, quantity: 1,checkbox: true, max: 1, icon:'/icons/ingredientes/lechuga.jpeg'},
        {title: 'McPollo', price: 700.00, initialQuantity: 1, quantity: 1,checkbox: false, max: 3, icon:'/icons/ingredientes/mcpollo.jpeg'},
        {title: 'Mayonesa', price: 0.00, initialQuantity: 1, quantity: 1,checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    extras:[
        {title: 'Queso Cheddar en fetas', price: 500.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Tomate', price: 500.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/tomate.jpeg'},
        {title: 'Bacon', price: 700.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/bacon.jpeg'},
    ],
    adicionales:[
        {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/hamburguesas/mc-pollo.jpeg"},

    {title: 'Grand Tasty Turbo Bacon Triple', category: 'Hamburguesas', description: 'Hamburguesa con pan mas grande, triple carne, bacon en tiras, salsa tasty, 4 fetas de cheddar, lechuga, tomate y cebolla', quantity: 1, price: 4500.00, 
    modifiers:[
        {title: 'Pan XL', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:"/icons/ingredientes/panxl.jpeg"},
        {title: 'Carne', price: 1200.00, initialQuantity: 3, quantity: 3, checkbox: false, max: 3, icon:"/icons/ingredientes/carne.jpeg"},
        {title: 'Queso Cheddar en fetas', price: 500.00, initialQuantity: 4, quantity: 4, checkbox: false, max: 6, icon:"/icons/ingredientes/queso-cheddar-fetas.jpeg"},
        {title: 'Cebolla', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:"/icons/ingredientes/cebolla.jpeg"},
        {title: 'Tomate', price: 500.00, initialQuantity: 2, quantity: 2, checkbox: false, max: 4, icon:"/icons/ingredientes/tomate.jpeg"},
        {title: 'Lechuga', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:"/icons/ingredientes/lechuga.jpeg"},
        {title: 'Salsa Tasty', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:"/icons/ingredientes/salsa-tasty.png"},
        {title: 'Bacon', price: 700.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:"/icons/ingredientes/bacon.jpeg"},
        {title: 'Bacon triturado', price: 500.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:"/icons/ingredientes/bacon-triturado.jpeg"},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/hamburguesas/grand-tasty-turbo-bacon-triple.jpeg"},

    {title: 'Triple Hamburguesa con Queso', category: 'Hamburguesas', description: 'Tres medallones de carne, el queso cheddar mas rico, cebolla triturada, mostaza y ketchup.', quantity: 1, price: 3150.00, modifiers:[
        {title: 'Pan Regular', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pan-regular.jpeg'},
        {title: 'Cebolla', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla.jpeg'},
        {title: 'Queso Cheddar en fetas', price: 500.00, initialQuantity: 2, quantity: 2, checkbox: false, max: 4, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Carne', price: 900.00, initialQuantity: 3, quantity: 3, checkbox: false, max: 5, icon:'/icons/ingredientes/carne.jpeg'},
        {title: 'Mostaza', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Ketchup', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/hamburguesas/triple-hamburguesa-con-queso.jpeg"},

/*========================================================================================================================================================== */
    
    {category: 'Postres', title: 'Cono', description: 'Conito helado muy cremoso!', quantity: 1, price: 500.00, 
    modifiers:[],
    extras:[
        {title: 'Extra Salsa Frutilla', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/frutilla.jpeg'},
        {title: 'Extra Salsa Dulce de Leche', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/ddl.jpeg'},
        {title: 'Extra Salsa Chocolate', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/chocolate.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Sabor", options: 
            [
                {title:'Helado de Vainilla', price: 0.00, selected: true, icon:'/icons/ingredientes/vainilla.jpeg'},
                {title:'Helado de Combinado', price: 0.00, selected: false, icon:'/icons/ingredientes/combinado.jpeg'},
                {title:'Helado de Dulce de Leche', price: 0.00, selected: false, icon:'/icons/ingredientes/dulce-de-leche.jpeg'},
            ],
        },
    ],
    icon:"/icons/postres/cono.jpeg"},
    
    {category: 'Postres', title: 'Sundae', description: 'Pote de helado con una deliciosa salsa tibia a elección.', quantity: 1, price: 1350.00, 
    modifiers:[],
    extras:[
       {title: 'Extra Salsa Frutilla', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/frutilla.jpeg'},
        {title: 'Extra Salsa Dulce de Leche', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/ddl.jpeg'},
        {title: 'Extra Salsa Chocolate', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/chocolate.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Sabor", options: 
            [
                {title:'Helado de Vainilla', price: 0.00, selected: true, icon:'/icons/ingredientes/vainilla.jpeg'},
                {title:'Helado de Combinado', price: 0.00, selected: false, icon:'/icons/ingredientes/combinado.jpeg'},
                {title:'Helado de Dulce de Leche', price: 0.00, selected: false, icon:'/icons/ingredientes/dulce-de-leche.jpeg'},
            ],
        },
        {title: "Salsa", options: 
            [
                {title: 'Salsa Chocolate', price: 0.00, selected: true, icon:'/icons/ingredientes/chocolate.jpeg'},
                {title: 'Salsa Frutilla', price: 0.00, selected: false, icon:'/icons/ingredientes/frutilla.jpeg'},
                {title: 'Salsa Dulce de Leche', price: 0.00, selected: false, icon:'/icons/ingredientes/ddl.jpeg'},
                {title: 'Sin cubierta', price: 0.00, selected: false, icon:'https://www.mcdonalds.com.ar/images/icons/option-placeholder.svg'},
            ],
        },
    ],
    icon:"/icons/postres/sundae.jpeg"},

    {category: 'Postres', title: 'McFlurry Oreo', description: 'Helado con salsa y un top con tus galletitas preferidas.', quantity: 1, price: 1850.00,
    modifiers:[
        {title: 'Oreo', price: 350.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:'/icons/ingredientes/oreo.jpeg'},
    ],
    extras:[
        {title: 'Extra Salsa Frutilla', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/frutilla.jpeg'},
        {title: 'Extra Salsa Dulce de Leche', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/ddl.jpeg'},
        {title: 'Extra Salsa Chocolate', price: 250.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/chocolate.jpeg'},
        {title: 'KitKat', price: 350.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/kitkat.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Sabor", options: 
            [
                {title:'Helado de Vainilla', price: 0.00, selected: true, icon:'/icons/ingredientes/vainilla.jpeg'},
                {title:'Helado de Combinado', price: 0.00, selected: false, icon:'/icons/ingredientes/combinado.jpeg'},
                {title:'Helado de Dulce de Leche', price: 0.00, selected: false, icon:'/icons/ingredientes/dulce-de-leche.jpeg'},
            ],
        },
        {title: "Salsa", options: 
            [
                {title: 'Salsa Chocolate', price: 0.00, selected: true, icon:'/icons/ingredientes/chocolate.jpeg'},
                {title: 'Salsa Frutilla', price: 0.00, selected: false, icon:'/icons/ingredientes/frutilla.jpeg'},
                {title: 'Salsa Dulce de Leche', price: 0.00, selected: false, icon:'/icons/ingredientes/ddl.jpeg'},
                {title: 'Sin cubierta', price: 0.00, selected: false, icon:'https://www.mcdonalds.com.ar/images/icons/option-placeholder.svg'},
            ],
        },
    ],
    icon:"/icons/postres/mcflurry-oreo.jpeg"},


/*========================================================================================================================================================== */

    {title: 'Coca', category: 'Bebidas', description: 'Refrescante gaseosa Coca Cola.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
    ],
    extras:[],
    adicionales:[],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 800.00, selected: true, icon:'/icons/bebidas/sizes/coca-chica.png'},
                {title:'Mediana', price: 900.00, selected: false, icon:'/icons/bebidas/sizes/coca-mediana.png'},
                {title:'Grande', price: 1000.00, selected: false, icon:'/icons/bebidas/sizes/coca-grande.png'},
                {title:'Extra-Grande', price: 1100.00, selected: false, icon:'/icons/bebidas/sizes/coca-grande.png'},
            ],
        },
    ],
    icon:"/icons/bebidas/cocacola.jpeg"},
    
    {title: 'Sprite Zero', category: 'Bebidas', description: 'Refrescante gaseosa Sprite Zero.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
    ],
    extras:[],
    adicionales:[],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 800.00, selected: true, icon:'/icons/bebidas/sizes/sprite-chica.png'},
                {title:'Mediana', price: 900.00, selected: false, icon:'/icons/bebidas/sprite.png'},
                {title:'Grande', price: 1000.00, selected: false, icon:'/icons/bebidas/sizes/sprite-grande.png'},
                {title:'Extra-Grande', price: 1100.00, selected: false, icon:'/icons/bebidas/sizes/sprite-grande.png'},
            ],
        },
    ],
    icon:"/icons/bebidas/sprite.png"},
    
    {title: 'Fanta Zero', category: 'Bebidas', description: 'Refrescante gaseosa Fanta Zero.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
    ],
    extras:[],
    adicionales:[],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 800.00, selected: true, icon:'/icons/bebidas/sizes/fanta-chica.png'},
                {title:'Mediana', price: 900.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Grande', price: 1000.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Extra-Grande', price: 1100.00, selected: false, icon:'/icons/bebidas/sizes/fanta-gr.png'},
            ],
        },
    ],
    icon:"/icons/bebidas/fanta.png"},
    
    {title: 'Cafe Americano', category: 'Cafes', description: 'Cálido Cafe Americano.', quantity: 1, price: 0.00, 
    modifiers:[],
    extras:[],
    adicionales:[
        {title: 'Azucar', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/azucar.jpeg'},
        {title: 'Edulcorante', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/edulcorante.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 850.00, selected: true, icon:'/icons/cafes/caffe.png'},
                {title:'Mediana', price: 950.00, selected: false, icon:'/icons/cafes/caffe.png'},
                {title:'Grande', price: 1050.00, selected: false, icon:'/icons/cafes/caffe.png'},
                {title:'Extra-Grande', price: 1150.00, selected: false, icon:'/icons/cafes/caffe.png'},
            ],
        },
    ],
    icon:"/icons/cafes/caffe.png"},


/*==========================================================================================================================================================*/

    {title: 'Vainilla Latte', category: 'Cafes', description: 'Delicioso Latte sabor Vainilla.', quantity: 1, price: 0.00, 
    modifiers:[],
    extras:[
        {title: 'Extra: Crema Doble', price: 450.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 1150.00, selected: true, icon:'/icons/cafes/vainilla-latte-chico.jpeg'},
                {title:'Grande', price: 1300.00, selected: false, icon:'/icons/cafes/vainilla-latte.jpeg'},
            ],
        },
    ],
    icon:"/icons/cafes/vainilla-latte.jpeg"},

    {title: 'Submarino', category: 'Cafes', description: 'Leche caliente con una barra de chocolate para taza.', quantity: 1, price: 0.00, 
    modifiers:[],
    extras:[
        {title: 'Extra: Crema Doble', price: 450.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 1100.00, selected: true, icon:'/icons/cafes/submarino.png'},
                {title:'Grande', price: 1200.00, selected: false, icon:'/icons/cafes/submarino.png'},
            ],
        },
    ],
    icon:"/icons/cafes/submarino.png"},

    {title: 'Cappuccino Mocca', category: 'Cafes', description: 'Una exquisita combinación de café espresso, leche y salsa tibia de chocolate. Finalizado con espuma de leche y cacao en polvo.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Chocolate', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/chocolate.jpeg'},
    ],
    extras:[
        {title: 'Extra: Crema Doble', price: 450.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    adicionales:[
        {title: 'Azucar', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/azucar.jpeg'},
        {title: 'Edulcorante', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 2, icon:'/icons/ingredientes/edulcorante.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options: 
            [
                {title:'Chica', price: 1150.00, selected: true, icon:'/icons/cafes/mocca-c.png'},
                {title:'Grande', price: 1300.00, selected: false, icon:'/icons/cafes/mocca-g.png'},
            ],
        },
    ],
    icon:"/icons/cafes/mocca-g.png"},

    {title: 'MilkShake', category: 'Cafes', description: 'Bebida frozen con una base de vainilla con salsa de dulce de leche y finalizado con deliciosa crema de leche.', quantity: 1, price: 1600.00, 
    modifiers:[
        {title: 'Crema', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    extras:[
        {title: 'Extra: Crema Doble', price: 450.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Sabor", options: 
            [
                {title:'Vainilla', price: 0.00, selected: true, icon:'/icons/cafes/milkshake-vainilla.png'},
                {title:'Chocolate', price: 0.00, selected: false, icon:'/icons/cafes/milkshake.jpeg'},
                {title:'Dulce de Leche', price: 0.00, selected: false, icon:'/icons/cafes/milkshake-ddl.png'},
            ],
        },
    ],
    icon:"/icons/cafes/milkshake-vainilla.png"},

    {title: 'MilkShake Oreo', category: 'Cafes', description: 'Bebida frozen con una base de vainilla con salsa de dulce de leche y finalizado con deliciosa crema de leche y un topping con lluvia de galletitas Oreo.', quantity: 1, price: 1700.00, 
    modifiers:[
        {title: 'Crema', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    extras:[
        {title: 'Extra: Crema Doble', price: 450.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/crema.jpeg'},
    ],
    adicionales:[],
    obligatorios:[
        {title: "Sabor", options: 
            [
                {title:'Chocolate', price: 0.00, selected: true, icon:'/icons/cafes/ms-ch.png'},
                {title:'Vainilla', price: 0.00, selected: false, icon:'/icons/cafes/ms-va.png'},
                {title:'Frutilla', price: 0.00, selected: false, icon:'/icons/cafes/ms-fr.png'},
                {title:'Dulce de Leche', price: 0.00, selected: false, icon:'/icons/cafes/ms-ddl.png'},
            ],
        },
    ],
    icon:"/icons/cafes/milkshake-oreo.jpeg"},
    
/*==========================================================================================================================================================*/


    {title: 'Papas Fritas', category: 'Acompañamientos', description: 'Calientes, crujientes y deliciosas. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options: 
        [
            {title:'Chica', price: 1050.00, selected: true, icon:'/icons/acomp/pp-ch.png'},
            {title:'Mediana', price: 1150.00, selected: false, icon:'/icons/acomp/pp-md.png'},
            {title:'Grande', price: 1200.00, selected: false, icon:'/icons/acomp/pp-bg.png'},
        ],
    },
    ],
    icon:"/icons/acomp/pp-bg.png"},

    {title: 'McNuggets', category: 'Acompañamientos', description: 'Calientes, crujientes y deliciosas. Disfrutá de nuestros Nuggets mundialmente famosas, desde la primera hasta la última.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options: 
        [
            {title:'x10', price: 1050.00, selected: true, icon:'/icons/acomp/nugget-10.jpeg'},
            {title:'x15', price: 1150.00, selected: false, icon:'/icons/acomp/nugget-15.jpeg'},
            {title:'x20', price: 1200.00, selected: false, icon:'/icons/acomp/nugget-20.jpeg'},
        ],
    },
    ],
    icon:"/icons/acomp/nugget-20.jpeg"},

    {title: 'Papas Cheddar', category: 'Acompañamientos', description: 'Papas fritas queso cheddaar fundido. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.', quantity: 1, price: 1350.00, 
    modifiers:[
        {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
        {title: 'Queso Cheddar Fundido', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/queso-cheddar-fundido.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/acomp/cheddar.png"},

    {title: 'Papas con Cheddar y Bacon', category: 'Acompañamientos', description: 'Papas fritas queso cheddaar fundido y bacon. Disfrutá de nuestras papas mundialmente famosas, desde la primera hasta la última.', quantity: 1, price: 1550.00, 
    modifiers:[
        {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
        {title: 'Queso Cheddar Fundido', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/queso-cheddar-fundido.jpeg'},
        {title: 'Bacon Triturado', price: 400.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:'/icons/ingredientes/bacon-triturado.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/acomp/cheddar-bacon.png"},

    {title: 'Papas Tasty', category: 'Acompañamientos', description: 'Papas con salsa Tasty.', quantity: 1, price: 1350.00, 
    modifiers:[
        {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/acomp/tasty.png"},

    {title: 'Papas Tasty y Bacon', category: 'Acompañamientos', description: 'Papas con salsa Tasty.', quantity: 1, price: 1550.00, 
    modifiers:[
        {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[],
    icon:"/icons/acomp/tasty-bacon.png"},


    /*==========================================================================================================================================================*/

    {title: 'Bacon Cheddar McMelt', category: 'Combos', description: 'Una indulgente propuesta que potencia el sabor de nuestra clásica hamburguesa con abundante queso cheddar, dos tiras de bacon enteras, cebolla grillada en nuestro inigualable pan con semillas de sésamo! Acompañamiento y bebida a elección.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Pan', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pan.jpeg'},
        {title: 'Queso Cheddar en Fetas', price: 400.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Cebolla Grillada', price: 120.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla-grillada.jpeg'},
        {title: 'Bacon', price: 120.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/bacon.jpeg'},
        {title: 'Queso Fundido Cheddar', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/queso-cheddar-fundido.jpeg'},
        {title: 'Carne', price: 1100.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/carne.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options:
            [
                {title:"Chico", price: 4100.00, selected: true, icon:"c"},
                {title:"Mediano", price: 4300.00, selected: false, icon:"m"},
                {title:"Grande", price: 4500.00, selected: false, icon:"g"},
            ]
        },
        {title: "Acompañamiento", options: 
            [
                {title:'Papas Fritas', price: 0.00, selected: true, icon:'/icons/acomp/pp-bg.png'},
                {title:'Papas Tasty y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/tasty-bacon.png'},
                {title:'Papas Tasty', price: 850.00, selected: false, icon:'/icons/acomp/tasty.png'},
                {title:'Papas con Cheddar', price: 850.00, selected: false, icon:'/icons/acomp/cheddar.png'},
                {title:'Papas con Cheddar y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/cheddar-bacon.png'},
                {title:'Ensalada', price: 0.00, selected: false, icon:'/icons/acomp/ensalada.png'},
            ],
            modifiers:[
                {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
            ],
            
        },
        {title: "Bebida", options: 
            [
                {title:'Coca-Cola Zero', price: 0.00, selected: true, icon:'/icons/bebidas/coca-zero.png'},
                {title:'Coca-Cola', price: 0.00, selected: false, icon:'/icons/bebidas/cocacola.jpeg'},
                {title:'Sprite Zero', price: 0.00, selected: false, icon:'/icons/bebidas/sprite.png'},
                {title:'Fanta Zero', price: 0.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Agua', price: 0.00, selected: false, icon:'/icons/bebidas/agua.png'},
                {title:'Jugo de Naranja', price: 0.00, selected: false, icon:'/icons/bebidas/jugo.png'},
            ],
            modifiers:[
                {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
            ],
        },
    ],
    icon:"/icons/combos/Bacon-Cheddar-McMelt.jpeg"},

    {title: 'Big Mac', category: 'Combos', description: 'Hamburguesa con doble carne 100% vacuna, salsa Big Mac, queso cheddar, cebolla, lechuga y pepino. Acompañamiento y bebida grande a elección.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Pan Big Mac', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pan-bigmac.png'},
        {title: 'Cebolla', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla.jpeg'},
        {title: 'Salsa Big Mac', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/salsa-bigmac.png'},
        {title: 'Lechuga', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/lechuga.jpeg'},
        {title: 'Queso Cheddar en Fetas', price: 400.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Carne', price: 850.00, initialQuantity: 2, quantity: 2, checkbox: false, max: 4, icon:'/icons/ingredientes/carne.jpeg'},
        {title: 'Pepino', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pepino.png'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options:
            [
                {title:"Chico", price: 3300.00, selected: true, icon:"c"},
                {title:"Mediano", price: 3700.00, selected: false, icon:"m"},
                {title:"Grande", price: 4150.00, selected: false, icon:"g"},
            ]
        },
        {title: "Acompañamiento", options: 
            [
                {title:'Papas Fritas', price: 0.00, selected: true, icon:'/icons/acomp/pp-bg.png'},
                {title:'Papas Tasty y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/tasty-bacon.png'},
                {title:'Papas Tasty', price: 850.00, selected: false, icon:'/icons/acomp/tasty.png'},
                {title:'Papas con Cheddar', price: 850.00, selected: false, icon:'/icons/acomp/cheddar.png'},
                {title:'Papas con Cheddar y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/cheddar-bacon.png'},
                {title:'Ensalada', price: 0.00, selected: false, icon:'/icons/acomp/ensalada.png'},
            ],
            modifiers:[
                {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
            ],
            
        },
        {title: "Bebida", options: 
            [
                {title:'Coca-Cola Zero', price: 0.00, selected: true, icon:'/icons/bebidas/coca-zero.png'},
                {title:'Coca-Cola', price: 0.00, selected: false, icon:'/icons/bebidas/cocacola.jpeg'},
                {title:'Sprite Zero', price: 0.00, selected: false, icon:'/icons/bebidas/sprite.png'},
                {title:'Fanta Zero', price: 0.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Agua', price: 0.00, selected: false, icon:'/icons/bebidas/agua.png'},
                {title:'Jugo de Naranja', price: 0.00, selected: false, icon:'/icons/bebidas/jugo.png'},
            ],
            modifiers:[
                {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
            ],
        },
    ],
    icon:"/icons/combos/big-mac.jpeg"},

    {title: 'Grand Doble Tasty', category: 'Combos', description: 'Hamburguesa con doble carne 100% vacuna, salsa tasty, 3 fetas de queso cheddar, lechuga, tomate, cebolla en un pan mas grande. Acompañamiento y bebida grande a elección.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Pan XL', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/panxl.jpeg'},
        {title: 'Cebolla', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla.jpeg'},
        {title: 'Salsa Tasty', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/salsa-tasty.jpeg'},
        {title: 'Lechuga', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/lechuga.jpeg'},
        {title: 'Queso Cheddar en Fetas', price: 400.00, initialQuantity: 3, quantity: 3, checkbox: false, max: 5, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Carne', price: 1100.00, initialQuantity: 2, quantity: 2, checkbox: false, max: 4, icon:'/icons/ingredientes/carne.jpeg'},
        {title: 'Tomate', price: 400.00, initialQuantity: 2, quantity: 2, checkbox: false, max: 4, icon:'/icons/ingredientes/tomate.jpeg'},
    ],
    extras:[
        {title: 'Extra: Bacon', price: 650.00, initialQuantity: 0, quantity: 0, checkbox: false, max: 3, icon:'/icons/ingredientes/bacon.jpeg'},
    ],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options:
            [
                {title:"Chico", price: 4000.00, selected: true, icon:"c"},
                {title:"Mediano", price: 4500.00, selected: false, icon:"c"},
                {title:"Grande", price: 5000.00, selected: false, icon:"c"},
            ]
        },
        {title: "Acompañamiento", options: 
            [
                {title:'Papas Fritas', price: 0.00, selected: true, icon:'/icons/acomp/pp-bg.png'},
                {title:'Papas Tasty y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/tasty-bacon.png'},
                {title:'Papas Tasty', price: 850.00, selected: false, icon:'/icons/acomp/tasty.png'},
                {title:'Papas con Cheddar', price: 850.00, selected: false, icon:'/icons/acomp/cheddar.png'},
                {title:'Papas con Cheddar y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/cheddar-bacon.png'},
                {title:'Ensalada', price: 0.00, selected: false, icon:'/icons/acomp/ensalada.png'},
            ],
            modifiers:[
                {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
            ],
            
        },
        {title: "Bebida", options: 
            [
                {title:'Coca-Cola Zero', price: 0.00, selected: true, icon:'/icons/bebidas/coca-zero.png'},
                {title:'Coca-Cola', price: 0.00, selected: false, icon:'/icons/bebidas/cocacola.jpeg'},
                {title:'Sprite Zero', price: 0.00, selected: false, icon:'/icons/bebidas/sprite.png'},
                {title:'Fanta Zero', price: 0.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Agua', price: 0.00, selected: false, icon:'/icons/bebidas/agua.png'},
                {title:'Jugo de Naranja', price: 0.00, selected: false, icon:'/icons/bebidas/jugo.png'},
            ],
            modifiers:[
                {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
            ],
        },
    ],
    icon:"/icons/combos/grand-doble-tasty.jpeg"},

    {title: 'Grand Tasty Turbo Bacon Triple', category: 'Combos', description: 'Hamburguesa con triple carne 100% vacuna, bacon en tiras y triturado, salsa tasty, 4 fetas de queso cheddar, lechuga, tomate y cebolla en un pan mas grande. Acompañamiento y bebida grande a elección.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Pan XL', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/panxl.jpeg'},
        {title: 'Cebolla', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/cebolla.jpeg'},
        {title: 'Salsa Tasty', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/salsa-tasty.jpeg'},
        {title: 'Lechuga', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/lechuga.jpeg'},
        {title: 'Queso Cheddar en Fetas', price: 400.00, initialQuantity: 4, quantity: 4, checkbox: false, max: 6, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Carne', price: 1100.00, initialQuantity: 3, quantity: 3, checkbox: false, max: 3, icon:'/icons/ingredientes/carne.jpeg'},
        {title: 'Tomate', price: 400.00, initialQuantity: 2, quantity: 2, checkbox: false, max: 4, icon:'/icons/ingredientes/tomate.jpeg'},
        {title: 'Bacon', price: 650.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:'/icons/ingredientes/bacon.jpeg'},
        {title: 'Bacon Triturado', price: 400.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:'/icons/ingredientes/bacon-triturado.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options:
            [
                {title:"Chico", price: 5000.00, selected: true, icon:"c"},
                {title:"Mediano", price: 5550.00, selected: false, icon:"c"},
                {title:"Grande", price: 6100.00, selected: false, icon:"c"},
            ]
        },
        {title: "Acompañamiento", options: 
            [
                {title:'Papas Fritas', price: 0.00, selected: true, icon:'/icons/acomp/pp-bg.png'},
                {title:'Papas Tasty y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/tasty-bacon.png'},
                {title:'Papas Tasty', price: 850.00, selected: false, icon:'/icons/acomp/tasty.png'},
                {title:'Papas con Cheddar', price: 850.00, selected: false, icon:'/icons/acomp/cheddar.png'},
                {title:'Papas con Cheddar y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/cheddar-bacon.png'},
                {title:'Ensalada', price: 0.00, selected: false, icon:'/icons/acomp/ensalada.png'},
            ],
            modifiers:[
                {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
            ],
            
        },
        {title: "Bebida", options: 
            [
                {title:'Coca-Cola Zero', price: 0.00, selected: true, icon:'/icons/bebidas/coca-zero.png'},
                {title:'Coca-Cola', price: 0.00, selected: false, icon:'/icons/bebidas/cocacola.jpeg'},
                {title:'Sprite Zero', price: 0.00, selected: false, icon:'/icons/bebidas/sprite.png'},
                {title:'Fanta Zero', price: 0.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Agua', price: 0.00, selected: false, icon:'/icons/bebidas/agua.png'},
                {title:'Jugo de Naranja', price: 0.00, selected: false, icon:'/icons/bebidas/jugo.png'},
            ],
            modifiers:[
                {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
            ],
        },
    ],
    icon:"/icons/combos/tasty-turbo-triple.jpeg"},

    {title: 'McCrispy Chicken Cheddar y Bacon', category: 'Combos', description: 'Medallón de pollo Crispy, cheddar, bacon, lechuga, tomate y mayonesa. Acompañamiento y bebida grande a elección.', quantity: 1, price: 0.00, 
    modifiers:[
        {title: 'Pan de Papa', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pan-de-papa.png'},
        {title: 'Queso Cheddar en Fetas', price: 400.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 3, icon:'/icons/ingredientes/queso-cheddar-fetas.jpeg'},
        {title: 'Pollo Crispy', price: 650.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/pollo-crispy.png'},
        {title: 'Tomate', price: 400.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:'/icons/ingredientes/tomate.jpeg'},
        {title: 'Bacon', price: 650.00, initialQuantity: 1, quantity: 1, checkbox: false, max: 2, icon:'/icons/ingredientes/bacon.jpeg'},
        {title: 'Lechuga', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/lechuga.jpeg'},
        {title: 'Mayonesa', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    extras:[],
    adicionales:[
         {title: 'Sobre de Ketchup', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/ketchup.jpeg'},
        {title: 'Sobre de Mostaza', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mostaza.jpeg'},
        {title: 'Sobre de Mayonsea', price: 0.00, initialQuantity: 0, quantity: 0, checkbox: true, max: 1, icon:'/icons/ingredientes/mayonesa.jpeg'},
    ],
    obligatorios:[
        {title: "Tamaño", options:
            [
                {title:"Chico", price: 5000.00, selected: true, icon:"c"},
                {title:"Mediano", price: 5550.00, selected: false, icon:"c"},
                {title:"Grande", price: 6100.00, selected: false, icon:"c"},
            ]
        },
        {title: "Acompañamiento", options: 
            [
                {title:'Papas Fritas', price: 0.00, selected: true, icon:'/icons/acomp/pp-bg.png'},
                {title:'Papas Tasty y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/tasty-bacon.png'},
                {title:'Papas Tasty', price: 850.00, selected: false, icon:'/icons/acomp/tasty.png'},
                {title:'Papas con Cheddar', price: 850.00, selected: false, icon:'/icons/acomp/cheddar.png'},
                {title:'Papas con Cheddar y Bacon', price: 1100.00, selected: false, icon:'/icons/acomp/cheddar-bacon.png'},
                {title:'Ensalada', price: 0.00, selected: false, icon:'/icons/acomp/ensalada.png'},
            ],
            modifiers:[
                {title: 'Sal', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/sal.jpeg'},
            ],
            
        },
        {title: "Bebida", options: 
            [
                {title:'Coca-Cola Zero', price: 0.00, selected: true, icon:'/icons/bebidas/coca-zero.png'},
                {title:'Coca-Cola', price: 0.00, selected: false, icon:'/icons/bebidas/cocacola.jpeg'},
                {title:'Sprite Zero', price: 0.00, selected: false, icon:'/icons/bebidas/sprite.png'},
                {title:'Fanta Zero', price: 0.00, selected: false, icon:'/icons/bebidas/fanta.png'},
                {title:'Agua', price: 0.00, selected: false, icon:'/icons/bebidas/agua.png'},
                {title:'Jugo de Naranja', price: 0.00, selected: false, icon:'/icons/bebidas/jugo.png'},
            ],
            modifiers:[
                {title: 'Hielo', price: 0.00, initialQuantity: 1, quantity: 1, checkbox: true, max: 1, icon:'/icons/ingredientes/hielo.jpeg'},
            ],
        },
    ],
    icon:"/icons/combos/chicken-cheddar.jpeg"},
];

