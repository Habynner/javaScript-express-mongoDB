import WorngReq from './worngReq.js';

class ValidateError extends WorngReq {
  constructor(error) {
    const errorsMessage = Object.values(error.errors)
      .map(err => err.message)
      .join('; ');
    super(`we has some validation error - ${errorsMessage}`);
  }
}

export default ValidateError;