import peca from '../models/Peca.js';
import { fabricante } from '../models/Fabricantes.js';

class FabricanteController {

    static async createFabricante (req, res) {
        try{
    const newFabricante = await fabricante.create(req.body);
    res.status(201).json({messsage :`fabricante "${req.body.name}" has been created.`, made: newFabricante});

        }catch(error){
            res.status(500).json({message: `${error.message} - fail while fabricante creation.`});
        }
    }

    static async getAllFabricantes (req, res) {
        try{
        const fabricantesList = await fabricante.find({});
        res.status(200).json({message: `Getting all prducts `, made: fabricantesList});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while getting all fabricantes.`});
        }

    }

    static async getOne (req, res) {
        try{
        const fabricante = await fabricante.findById(req.params.id);
        res.status(200).json({message: `Getting prduct whit id ${req.params.id} `, made: fabricante});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while getting a fabricante with id ${req.params.id}`});
        }
    }

    static async update (req, res) {
        try{
        await fabricante.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: `Update prduct whit id ${req.params.id} `});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while update fabricante with id ${req.params.id}`});
        }
    }

    static async delete (req, res) {
        try{
        const fabricante = await fabricante.findOneAndDelete(req.params.id);
        res.status(200).json({message: `The fabricante with id "${req.params.id}" has been deleted.`, made: fabricante});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while delete product with id ${req.params.id}`});
        }
    }
};

export default FabricanteController;