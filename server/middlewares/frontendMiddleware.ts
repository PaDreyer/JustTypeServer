/* eslint-disable global-require */

/**
 * Front-end middleware
 */

import addProdMiddlewares from './addProdMiddlewares'
import webpackConfig from '../../internals/webpack/webpack.dev.babel';
import addDevMiddlewares from './addDevMiddlewares';
export default (app, options) => {
  const isProd = process.env.NODE_ENV === 'production';

  if (isProd) {
    addProdMiddlewares(app, options);
  } else {
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
