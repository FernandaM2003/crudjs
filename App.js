// Eventos DOM
//Document Object Model

document
.getElementById("formulario-producto") 
.addEventListener("submit", function (evento) {
    // Evaluar el comportamiento del formulario
    evento.preventDefault(); // preventDefault para guardar sin refrescar en la página
    //Obtener los valores del formulario
    const nombre = document.getElementById("nombre").value,
    precio = document.getElementById("precio").value,
    año = document-getElementById("año").value;

    //Crear un nuevo objeto "producto"
    const producto = new Product (nombre, precio, año);

    //Crear un nuevo usuario de interfaz
    const ui = new UI();

    //Input de validación de usuario
    if (nombre === "" || precio === "" || año === "" ) {
        ui.showMessage("Por favor insertar datos");
    } 

    //Guardar productos
    ui.addProducto(producto);
    ui.showMessage("Producto Agregado");
    ui.resetForm();
});

    document.getElementById("producto-lista").addEventListener("click", (e) => {
        const ui = new UI();
        ui.deleteProducto(e.target);
        e.preventDefault();

    });

    //Clase producto

    class Producto {
        //Estructura para guardar campos o variables
        constructor(nombre, precio, año){
            this.nombre = nombre;
            this.precio = precio;
            this.año = año;
        }
    }

    // Clase Usuario Interfaz
    class UI{
        addProducto(producto){
            const productoLista = document.getElementById("producto-lista");
            const elemento = document.createElement("div");
            elemento.innerHTML = `
            <div class="tarjeta texto margen4">
                <div class="tarjeta-body">
                    <strong>Producto </strong> : ${producto.nombre} - 
                    <strong>Precio </strong> : ${producto.precio} -
                    <strong>Año </strong> : ${producto.año} -
                    <a href="#" class="btn btn-error" name="eliminar">Eliminar</a>
                </div>
            </div>
            `

        }
    }