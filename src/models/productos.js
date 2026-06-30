import dbClient from "../config/dbClient.js" 

class productosModel{

    async create(producto){

        const colProductos = dbClient.db.collection('productos');
        return await colProductos.insertOne(producto)

    }
    async createMany(producto){

        const colProductos = dbClient.db.collection('productos');
        return await colProductos.insertMany(producto)

    }
}

export default new productosModel;