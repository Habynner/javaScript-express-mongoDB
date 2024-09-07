import NotFound from '../errors/notFound.js';

function manipulation404(req, res, next) {
  const erro404 = new NotFound();
  next(erro404);
}

export default manipulation404;