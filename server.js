import 'dotenv/config'
import express from 'express';
import routesProductos from './src/routes/productos.js';

const app = express();

app.use('/productos', routesProductos)

try {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, ()=> console.log('Servidor activo en puerto ' + PORT))

} catch(e){
    console.log(e);
}

