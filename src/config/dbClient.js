const { MongoClient } = require("mongodb");

class dbClient {
    constructor(){
        const queryString = "";
        this.client = new MongoClient(queryString);
    
    }

    async ConectarBD(){
        try{
            await this.client.connect();
            this.db = this.client.db;
        }catch (e){
            console.log(e);
        } 
    }

}

export default new dbClient;