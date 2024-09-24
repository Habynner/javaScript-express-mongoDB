import NotFound from '../errors/notFound.js';
import { manufacturer } from '../models/index.js';

class FabricanteController {

  static async createFabricante (req, res, next) {
    try{

      let fab = new manufacturer(req.body);
      const newFabricante = await fab.save();
      res.status(201).json({messsage :`manufacturer "${req.body.name}" has been created.`, made: newFabricante});

    }catch(error){
      next(error);
    }
  }

  static async getAllFabricantes (req, res, next) {
    try{
      const fabricantesList = manufacturer.find({});
      req.result = fabricantesList;
      next();
    }catch (error){
      next(error);
    }

  }

  static async getOne (req, res, next) {
    try{
      const fab = await manufacturer.findById(req.params.id).populate('name', 'name');

      if(!fab){
        throw new Error('não existe');
      }
      res.status(200).json({message: `Getting manufacturer whit id ${req.params.id} `, made: fab});
    }catch (error){
      if(error.message === 'não existe'){
        next(new NotFound(`The manufacturer with id ${req.params.id} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }

  static async update (req, res, next) {
    try{
      const upFab = await manufacturer.findByIdAndUpdate(req.params.id, req.body);

      if(!upFab){
        throw new Error('não existe');
      }
      res.status(200).json({message: `Update manufacturer whit id ${req.params.id} `});
    }catch (error){
      if(error.message === 'não existe'){
        next(new NotFound(`The manufacturer with id ${req.params.id} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }

  static async delete (req, res, next) {
    try{
      const fab = await manufacturer.findOneAndDelete(req.params.id);
      if(!fab){
        throw new Error('não existe');
      }
      res.status(200).json({message: `The manufacturer with id "${req.params.id}" has been deleted.`, made: fab});
    }catch (error){
      if(error.message === 'não existe'){
        next(new NotFound(`The manufacturer with id ${req.params.id} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }


  static async searchFabricante (req, res, next) {
    const {name, nacionallity} = req.query;
    try{
      // USANDO REGEX.
      const busca = {};
      const regexNacionallity = new RegExp(nacionallity, 'i');
      const regexName = new RegExp(name, 'i');

      if (name) busca.name = regexName;

      if (nacionallity) busca.nacionallity = regexNacionallity;

      const pecaByFabricante = manufacturer.find(busca);
      if (pecaByFabricante.length === 0) {
        throw new Error('not found');
      }
      req.result = pecaByFabricante;

      next();
    }catch(error){
      if(error.message === 'not found'){
        next(new NotFound(`The product with id ${req.query} is not found, or does not exist.`));
      } else {
        next(error);
      }
    }
  }
};

export default FabricanteController;