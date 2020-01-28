import path = require('path');
import express = require('express');
import compression = require('compression');

export default function addProdMiddlewares(app, options) {
  const publicPath = options.publicPath || '/';
  const outputPath = options.outputPath || path.resolve(process.cwd(), 'build');

  // compression middleware compresses your server responses which makes them
  // smaller (applies also to assets). You can read more about that technique
  // and other good practices on official Express.js docs http://mxs.is/googmy
  app.use(compression());
  app.use(publicPath, express.static(outputPath));

  app.get('*', (req : Request, res : Response) =>
    // @ts-ignore
    res.sendFile(path.resolve(outputPath, 'index.html')),
  );
};
