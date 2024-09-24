import RequisicaoIncorreta from '../errors/worngReq.js';

async function paginated(req, res, next) {
  try{
    let { limite = 5, pagina = 1, ordenacao = '_id:-1' } = req.query;

    let [campoOrdenacao, ordem] = ordenacao.split(':');

    limite = parseInt(limite);
    pagina = parseInt(pagina);
    ordem = parseInt(ordem);

    if (limite < 0 || pagina < 0){
      throw new Error('Tentativa de requisição com limite ou pagina, menores que 0');
    }

    const result = req.result;

    const resultadoPaginado = await result.find()
      .sort({ [campoOrdenacao]: ordem })
      .skip((pagina - 1) * limite)
      .limit(limite)
      .exec();

    res.status(200).json(resultadoPaginado);
  }catch(error){
    if(error.message === 'Tentativa de requisição com limite ou pagina, menores que 0'){
      next(new RequisicaoIncorreta(error.message));
    } else {
      next(error);
    }
  }
}

export default paginated;