import { peca, manufacturer } from '../models/index.js';
import NotFound from '../errors/notFound.js';

class PecaController {

  static async createProduct (req, res, next) {
    try{
      const findMade = await manufacturer.findById(req.body.fabId);
      const obj = { ...req.body, fabricante: { ...findMade._doc } };
      const newProduct = await peca.create(obj);
      res.status(201).json({messsage :`product "${req.body.tipo}" has been created.`, prduct: newProduct});

    }catch(error){
      next(error);
    }
  }

  static async getAllPecas (req, res, next) {
    try{
      const productList = await peca.find({});
      res.status(200).json({message: 'Getting all prducts ', prducts: productList});
    }catch (error){
      next(error);
    }

  }

  static async getOne (req, res, next) {
    try{
      const product = await peca.findById(req.params.id);
      if (!product) {
        throw new Error('not found');
      }
      res.status(200).json({message: `Getting prduct whit id ${req.params.id} `, prduct: product});
    }catch (error){
      if(error.message === 'not found'){
        next(new NotFound(`The product with id ${req.params.id} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }

  static async update (req, res, next) {
    try{
      const product = await peca.findByIdAndUpdate(req.params.id, req.body);
      if (!product) {
        throw new Error('not found');
      }
      res.status(200).json({message: `Update prduct whit id ${req.params.id} `});
    }catch (error){
      if(error.message === 'not found'){
        next(new NotFound(`The product with id ${req.params.id} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }

  static async delete (req, res, next) {
    try{
      const product = await peca.findOneAndDelete(req.params.id);
      if (!product) {
        throw new Error('not found');
      }
      res.status(200).json({message: `The product with id "${req.params.id}" has been deleted.`, products: product});
    }catch (error){
      if(error.message === 'not found'){
        next(new NotFound(`The product with id ${req.params.id} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }

  static async searchPeca (req, res, next) {
    const fabricante = req.query.fabricante;
    try{
      const pecaByFabricante = await peca.find({ fabricante: fabricante});
      if (!pecaByFabricante) {
        throw new Error('not found');
      }
      res.status(200).json({message: 'The fabricante\'s product list was finded.', pecas: pecaByFabricante});
    }catch(error){
      if(error.message === 'not found'){
        next(new NotFound(`The product with parameter ${fabricante} is not found, or does not exist.`));
      } else {
        next(error);
      }

    }
  }
};

export default PecaController;