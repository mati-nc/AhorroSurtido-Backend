import { getConnection } from "../data/connectionMongoDB";

const getProductos = async() => {

    try{
        const database = await getConnection();     
        const productos= await database.collection("products").find({}).toArray();
        console.table(productos);
        console.log("Productos listados!");
    }catch(error){
        console.error(error);
    }

}

getProductos();

