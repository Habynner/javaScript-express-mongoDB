import mongoose from 'mongoose';
import BaseError from '../errors/baseError.js';
import WorngReq from '../errors/worngReq.js';
import ValidateError from '../errors/validationError.js';
import NotFound from '../errors/notFound.js';

// eslint-disable-next-line no-unused-vars
function errosManipulation(error, req, res, next) {
  if(error instanceof mongoose.Error.CastError){
    new WorngReq().sendResponse(res);
  }else if (error instanceof mongoose.Error.ValidationError) {
    new ValidateError(error).sendResponse(res);
  }else if ( error instanceof NotFound) {
    error.sendResponse(res);
  }{
    new BaseError().sendResponse(res);
  }

}

export default errosManipulation;