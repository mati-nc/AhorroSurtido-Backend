import productosModel from '../models/productos.js'


class productosController {

    constructor(){

    }

    //metodos asincrónicos

    async create(req,rest){
        try{
            const data = await productosModel.create(req.body);
            rest.status(201).json(data);
        }catch(e){
            rest.status(500).send(e)
        }
    }
    
    async createMany(req,res){

    try{

        const data = await productosModel.createMany(req.body);

        res.status(201).json(data);

    }catch(e){

        res.status(500).send(e);

    }

}

    async update(req,rest){
         try{
            rest.status(201).json({status: 'update-ok'});
        }catch(e){
            rest.status(500).send(e)
        }
    }

    async delete(req,rest){
         try{
            rest.status(201).json({status: 'delete-ok'});
        }catch(e){
            rest.status(500).send(e)
        }
    }
    async getAll(req,rest){
         try{
            rest.status(201).json({status: 'getall-ok'});
        }catch(e){
            rest.status(500).send(e)
        }
    }

    async getOne(req,rest){
        try{
            rest.status(201).json({status: 'getone-ok'});
        }catch(e){
            rest.status(500).send(e)
        }
    }

}

export default new productosController();