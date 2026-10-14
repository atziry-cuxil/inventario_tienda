# CRUD inventario de Productos

Sistema pensado en registros de productos, para llevar orden y control, un registro facil y rapido.
Se realizó un crud para guardar datos de productos, 
- Se agregan productos
- Se ve el detalle de un producto
- Se editan productos
- Se eliminan registros de productos


#### Tecnologias utilizadas 
- PostgreSQl
- Express 5
- Zod
- React
- Vite


#### Dependencias
Para instalar las dependencias del proyecto se ejecuto: 

```bash 
npm install
```

##### Para inicializar la base de datos:
- nueva base de datos: inventario_tienda
- create table...
- insert into... 

#### Variables de entorno
Para que el proyecto corra correctamente se necesitan variables de entorno.

En frontend: (SistemaInventario)
.env 

VITE_API_URL= //direccion donde corre backend

En backend: (SistemaInventarioBackend)
.env

PORT= puerto donde corre backend
DB_HOST= 
DB_PORT= puerto de la base de datos
DB_USER=
DB_PASSWORD=
DB_NAME=

Para correr los proyectos: frontend y backend:

```bash
npm run dev
```

#### Endpoints de backend

- GET /api/products/  : Listar la lista de productos
- GET /api/products/:id :Ver un producto segun su id
- POST /api/products/ : Crear un nuevo producto
- PUT /api/products/:id : Actualizar un producto segun su id
- DELETE /api/products/:id : Eliminar un producto segun su id










