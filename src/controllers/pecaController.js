import peca from '../models/Peca.js';
import { fabricante } from '../models/Fabricantes.js';

class PecaController {

    static async createProduct (req, res) {
        try{
            const findMade = await fabricante.findById(req.body.fabId);
            const obj = { ...req.body, fabricante: { ...findMade._doc } };
    const newProduct = await peca.create(obj);
    res.status(201).json({messsage :`product "${req.body.tipo}" has been created.`, prduct: newProduct});

        }catch(error){
            res.status(500).json({message: `${error.message} - fail while product creation.`});
        }
    }

    static async getAllPecas (req, res) {
        try{
        const productList = await peca.find({});
        res.status(200).json({message: `Getting all prducts `, prducts: productList});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while getting all products.`});
        }

    }

    static async getOne (req, res) {
        try{
        const product = await peca.findById(req.params.id);
        res.status(200).json({message: `Getting prduct whit id ${req.params.id} `, prduct: product});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while getting a product with id ${req.params.id}`});
        }
    }

    static async update (req, res) {
        try{
        await peca.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({message: `Update prduct whit id ${req.params.id} `});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while update product with id ${req.params.id}`});
        }
    }

    static async delete (req, res) {
        try{
        const product = await peca.findOneAndDelete(req.params.id);
        res.status(200).json({message: `The product with id "${req.params.id}" has been deleted.`, products: product});
        }catch (error){
            res.status(500).json({message: `${error.message} - fail while delete product with id ${req.params.id}`});
        }
    }

    static async searchPeca (req, res) {
        const fabricante = req.query.fabricante;
        try{
            const pecaByFabricante = await peca.find({ fabricante: fabricante});
            res.status(200).json({message: `The fabricante's product list was finded.`, pecas: pecaByFabricante});
        }catch(error){
            res.status(500).json({message: `${error.message} - We do not have any product with fabricante '${fabricante}`});

        }
    }
};

export default PecaController;