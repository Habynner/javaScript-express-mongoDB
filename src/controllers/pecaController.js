import { peca, manufacturer } from '../models/index.js';
import NotFound from '../errors/notFound.js';

class PecaController {

  static async createProduct (req, res, next) {
    try{
      console.log(req.body);
      const findMade = await manufacturer.findById(req.body.fabId);
      console.log(findMade);
      if (!findMade) {
        throw new Error();
      }
      const obj = { ...req.body, fabricante: { ...findMade._doc } };
      let prod = new peca(obj);
      const newProduct = await prod.save(obj);
      res.status(201).json({messsage :`product "${req.body.tipo}" has been created.`, prduct: newProduct});

    }catch(error){
      next(error);
    }
  }

  static async getAllPecas (req, res, next) {
    try{
      const getPecas = peca.find();

      req.result = getPecas;

      next();
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
    try{
      // Na busca no fabricante controller estamos usando regex.
      //Sem Regex com busca paginada.
      const { fabricante, tipo, minQuantity, maxQuantity } = req.query;
      let criteria = {};
      if (minQuantity || maxQuantity) criteria.quantidade = {};

      // get = Grater Than or Equal
      if (minQuantity) criteria.quantidade.$gte = minQuantity;
      // lte = Less Than or Equal
      if (maxQuantity) criteria.quantidade.$lte = maxQuantity;

      if (tipo) criteria.tipo = tipo;
      if (fabricante) {
        const fab = await manufacturer.findOne({ name: fabricante});

        if(fab !== null){
          criteria.fabricante = fab._id;
        } else {
          criteria = null;
        }
      }

      const pecaByFabricante = peca.find(criteria);
      if (pecaByFabricante.length === 0) {
        throw new Error('not found');
      }
      console.log('entrou aqui');
      req.result = pecaByFabricante;


      next();
    }catch(error){
      if(error.message === 'not found'){
        next(new NotFound(`The product with criteria ${req.query} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }
};

export default PecaController;