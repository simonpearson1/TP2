// Codigo para poder ver los productos en la pagina 

const productos = [
    {
        id: 1,
        nombre: "Camiseta Titular 2023",
        precio: 29999,
        imagen: "https://dcdn-us.mitiendanube.com/stores/001/568/017/products/argentina-titular-23-24-jugador1-c3e8c959ee8210644f16809111977355-640-0.jpg",
        descripcion: "Camiseta oficial titular de la Selección Argentina 2023",
        categoria: "Camisetas"
    },
    {
        id: 2,
        nombre: "Camiseta Suplente 2023",
        precio: 29999,
        imagen: "https://dcdn-us.mitiendanube.com/stores/001/568/017/products/proyecto-nuevo-21-62046404c0f2870af316758649037177-1024-1024.png",
        descripcion: "Camiseta oficial suplente de la Selección Argentina 2023",
        categoria: "Camisetas"
    },
    {
        id: 3,
        nombre: "Campera Adidas",
        precio: 39999,
        imagen: "https://afaar.vtexassets.com/arquivos/ids/156683/IQ0810_FC_eCom--1-.jpg?v=638466274791670000",
        descripcion: "Campera oficial de la Selección Argentina",
        categoria: "Camperas"
    },
    {
        id: 4,
        nombre: "Pantalón de Entrenamiento",
        precio: 15999,
        imagen: "https://afaar.vtexassets.com/arquivos/ids/156799-800-auto?v=638578572841030000&width=800&height=auto&aspect=true",
        descripcion: "Pantalón de entrenamiento oficial",
        categoria: "Pantalones"
    },
    {
        id: 5,
        nombre: "Botines Adidas",
        precio: 24999,
        imagen: "https://media2.solodeportes.com.ar/media/catalog/product/cache/3cb7d75bc2a65211451e92c5381048e9/b/o/botines-de-futbol-adidas-x-crazyfast-3-tf-azul-100010id9338001-1.jpg",
        descripcion: "Botines oficiales de la Selección Argentina",
        categoria: "Calzado"
    },
    {
        id: 6,
        nombre: "Buzo con Capucha",
        precio: 27999,
        imagen: "https://www.dexter.com.ar/on/demandware.static/-/Sites-365-dabra-catalog/default/dwf72c6e25/products/ADIY5489/ADIY5489-1.JPG",
        descripcion: "Buzo con capucha oficial",
        categoria: "Buzos"
    }
];

function mostrarProductos() {
    const contenedor = document.getElementById('contenedor-productos');
    contenedor.textContent = '';

    productos.forEach(producto => {
        const columna = document.createElement('p');
        columna.className = 'col-md-4 mb-4';

        const tarjeta = document.createElement('p');
        tarjeta.className = 'card h-100';

        const imagen = document.createElement('img');
        imagen.src = producto.imagen;
        imagen.alt = producto.nombre;
        imagen.className = 'producto-imagen';
        tarjeta.appendChild(imagen);

        const cuerpoTarjeta = document.createElement('p');
        cuerpoTarjeta.className = 'card-body';

        const titulo = document.createElement('h3');
        titulo.className = 'card-title';
        titulo.textContent = producto.nombre;
        cuerpoTarjeta.appendChild(titulo);

        const descripcion = document.createElement('p');
        descripcion.className = 'card-text';
        descripcion.textContent = producto.descripcion;
        cuerpoTarjeta.appendChild(descripcion);

        const precio = document.createElement('p');
        precio.className = 'card-text';
        precio.textContent = '$' + producto.precio.toLocaleString();
        cuerpoTarjeta.appendChild(precio);

        const boton = document.createElement('button');
        boton.className = 'btn btn-primary';
        boton.textContent = 'Agregar al Carrito';
        boton.onclick = function() {
            //agregarAlCarrito(producto.id); faltaria agregar la parte del carrito pero la hago mañana
        };
        cuerpoTarjeta.appendChild(boton);

        tarjeta.appendChild(cuerpoTarjeta);

        columna.appendChild(tarjeta);

        contenedor.appendChild(columna);
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos); 

