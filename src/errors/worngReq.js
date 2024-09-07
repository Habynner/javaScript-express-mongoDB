import BaseError from './baseError.js';

class WorngReq extends BaseError {
  constructor(message = 'One or more params are worng') {
    super(message, 400);
  }
}

export default WorngReq;