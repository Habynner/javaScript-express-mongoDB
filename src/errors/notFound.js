import ErroBase from './baseError.js';

class NaoEncontrado extends ErroBase {
  constructor(mensagem = 'Página não encontrada') {
    super(mensagem, 404);
  }
}

export default NaoEncontrado;