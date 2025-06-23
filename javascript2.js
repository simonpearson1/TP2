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
            agregarAlCarrito(producto.id)
        };
        cuerpoTarjeta.appendChild(boton);

        tarjeta.appendChild(cuerpoTarjeta);

        columna.appendChild(tarjeta);

        contenedor.appendChild(columna);
    });
}

document.addEventListener('DOMContentLoaded', mostrarProductos); 

document.addEventListener('DOMContentLoaded', () => {
    actualizarCarrito();

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    const formulario = document.getElementById('formulario-suscripcion');
    if (formulario) {
        formulario.addEventListener('submit', function(evento) {
            evento.preventDefault();
            const email = this.querySelector('input[type="email"]').value;
            alert('¡Gracias por suscribirte! Te enviaremos novedades a: ' + email);
            this.reset();
        });
    }
}); 


// Codigo del Carrito

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function agregarAlCarrito(productoId) {
    const producto = productos.find(p => p.id === productoId);
    if (!producto) return;

    const itemExistente = carrito.find(item => item.id === productoId);
    if (itemExistente) {
        itemExistente.cantidad++;
    } else {
        carrito.push({
            id: producto.id,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }

    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoItems = document.getElementById('items-carrito');
    const cantidadCarrito = document.getElementById('contador-carrito');
    const carritoTotal = document.getElementById('total-carrito');

    const totalItems = carrito.reduce((total, item) => total + item.cantidad, 0);
    cantidadCarrito.textContent = totalItems;

    carritoItems.textContent = '';
    let total = 0;

    if (carrito.length === 0) {
        const alerta = document.createElement('p');
        alerta.className = 'alert alert-info text-center';
        alerta.textContent = 'El carrito está vacío';
        carritoItems.appendChild(alerta);
    } else {
        carrito.forEach(item => {
            const subtotal = item.precio * item.cantidad;
            total += subtotal;

            const itemContainer = document.createElement('section');
            itemContainer.className = 'carrito-item';

            const imagen = document.createElement('img');
            imagen.src = item.imagen;
            imagen.alt = item.nombre;
            itemContainer.appendChild(imagen);

            const infoContainer = document.createElement('section');
            infoContainer.className = 'carrito-item-info';

            const titulo = document.createElement('h5');
            titulo.textContent = item.nombre;
            infoContainer.appendChild(titulo);

            const precio = document.createElement('p');
            precio.textContent = `$${item.precio.toLocaleString()} x ${item.cantidad}`;
            infoContainer.appendChild(precio);

            itemContainer.appendChild(infoContainer);

            const cantidadContainer = document.createElement('section');
            cantidadContainer.className = 'carrito-item-cantidad';

            const botonMenos = document.createElement('button');
            botonMenos.className = 'btn btn-sm btn-outline-secondary';
            botonMenos.textContent = '-';
            botonMenos.onclick = () => actualizarCantidad(item.id, item.cantidad - 1);
            cantidadContainer.appendChild(botonMenos);

            const cantidad = document.createElement('span');
            cantidad.textContent = item.cantidad;
            cantidadContainer.appendChild(cantidad);

            const botonMas = document.createElement('button');
            botonMas.className = 'btn btn-sm btn-outline-secondary';
            botonMas.textContent = '+';
            botonMas.onclick = () => actualizarCantidad(item.id, item.cantidad + 1);
            cantidadContainer.appendChild(botonMas);

            itemContainer.appendChild(cantidadContainer);

            const botonEliminar = document.createElement('button');
            botonEliminar.className = 'btn btn-sm btn-danger ms-2';
            botonEliminar.innerHTML = '<i class="fas fa-trash"></i>';
            botonEliminar.onclick = () => eliminarDelCarrito(item.id);
            itemContainer.appendChild(botonEliminar);

            carritoItems.appendChild(itemContainer);
        });
    }

    carritoTotal.textContent = total.toLocaleString();
}

function actualizarCantidad(productoId, nuevaCantidad) {
    if (nuevaCantidad < 1) {
        eliminarDelCarrito(productoId);
        return;
    }

    const item = carrito.find(item => item.id === productoId);
    if (item) {
        item.cantidad = nuevaCantidad;
        localStorage.setItem('carrito', JSON.stringify(carrito));
        actualizarCarrito();
    }
}

function eliminarDelCarrito(productoId) {
    carrito = carrito.filter(item => item.id !== productoId);
    localStorage.setItem('carrito', JSON.stringify(carrito));
    actualizarCarrito();
}

function mostrarNotificacion(mensaje) {
    const notificacion = document.createElement('p');
    notificacion.className = 'notification alert alert-warning';
    notificacion.textContent = mensaje;
    document.body.appendChild(notificacion);

    setTimeout(() => {
        notificacion.classList.add('hide');
        setTimeout(() => {
            notificacion.remove();
        }, 300);
    }, 2000);
}

document.addEventListener('DOMContentLoaded', function() {
    const btnComprar = document.getElementById('btn-comprar');
    if (btnComprar) {
        btnComprar.addEventListener('click', () => {
            if (carrito.length === 0) {
                mostrarNotificacion('El carrito está vacío');
                return;
            }

            alert('¡Gracias por tu compra!');
            carrito = [];
            localStorage.removeItem('carrito');
            actualizarCarrito();
        });
    }
    
    actualizarCarrito();
}); 
