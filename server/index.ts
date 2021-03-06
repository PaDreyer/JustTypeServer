import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

//const express = require('express');

//const logger = require('./logger');
import logger from './logger';


//const argv = require('./argv');
import argv from './argv';

//const port = require('./port');
import port from './port';

//const setup = require('./middlewares/frontendMiddleware');
import setup from './middlewares/frontendMiddleware';

import { resolve } from 'path';

import Api from './middlewares/Api';

const isDev = process.env.NODE_ENV !== 'production';
const ngrok =
  (isDev && process.env.ENABLE_TUNNEL) || argv.tunnel
    ? true // was require('ngrok')
    : false;
const app = express()

//app.use(helmet());
//app.use(cors({credentials:true}));

app.use('/test', (req, res)=>{
  res.send('test')
})

// If you need a backend, e.g. an API, add your custom backend-specific middleware here
// app.use('/api', myApi);
app.use('/api', Api);

// In production we need to pass these values in instead of relying on webpack
setup(app, {
  outputPath: resolve(process.cwd(), 'build'),
  publicPath: '/',
});

// get the intended host and port number, use localhost and port 3000 if not provided
const customHost = argv.host || process.env.HOST;
const host = customHost || null; // Let http.Server use its default IPv6/4 host
const prettyHost = customHost || 'localhost';

// use the gzipped bundle
app.get('*.js', (req, res, next) => {
  req.url = req.url + '.gz'; // eslint-disable-line
  res.set('Content-Encoding', 'gzip');
  next();
});

// Start your app.
console.log("port: ", port);
app.use(cors({credentials:true}));
app.listen(port, host, async err => {
  if (err) {
    return logger.error(err.message);
  }

  // Connect to ngrok in dev mode
  /*
  if (ngrok) {
    let url;
    try {
      url = await ngrok.connect(port);
    } catch (e) {
      return logger.error(e);
    }
    logger.appStarted(port, prettyHost, url);
  } else {
    logger.appStarted(port, prettyHost, null);
  }
  */
});
