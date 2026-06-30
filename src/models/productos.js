import dbClient from "../config/dbClient.js" 

class productosModel{

    async create(producto){

        const colProductos = dbClient.db.collection('productos');
        return await colProductos.insertOne(producto)

    }
}

export default new productosModel;