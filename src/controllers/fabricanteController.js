import NotFound from '../errors/notFound.js';
import { manufacturer } from '../models/index.js';

class FabricanteController {

  static async createFabricante (req, res, next) {
    try{
      const newFabricante = await manufacturer.create(req.body);
      res.status(201).json({messsage :`manufacturer "${req.body.name}" has been created.`, made: newFabricante});

    }catch(error){
      next(error);
    }
  }

  static async getAllFabricantes (req, res, next) {
    try{
      const fabricantesList = await manufacturer.find({});
      res.status(200).json({message: 'Getting all manufacturers ', made: fabricantesList});
    }catch (error){
      next(error);
    }

  }

  static async getOne (req, res, next) {
    try{
      const fab = await manufacturer.findById(req.params.id);

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
};

export default FabricanteController;