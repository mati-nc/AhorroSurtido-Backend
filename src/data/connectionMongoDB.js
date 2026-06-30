/* "mongodb://localhost:27017"; */

import {MongoClient} from "mongodb";

const getConnection = async() =>{

    try{
        const mongoUrl = "mongodb://localhost:27017/product";
        const client = await MongoClient.connect(mongoUrl);
        return client.db();
    }catch(error){
        console.error(error);
    }
};

export {getConnection};