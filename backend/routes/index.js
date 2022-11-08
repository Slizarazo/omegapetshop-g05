const productsRouter = require('./products.routes');
const usersRouter = require('./users.routes');
const categoryRouter = require('./category.routes');


function routerApi(app) {
  app.use('/api/v1/products', productsRouter);
  app.use('/api/v1/users', usersRouter);
  app.use('/api/v1/category', categoryRouter);
}


module.exports = routerApi;
