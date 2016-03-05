/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import 'babel-core/polyfill';
import path from 'path';
import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Router from './routes';
import Html from './components/Html';

// Mongo connection
const mongo = require('mongodb'),
    monk = require('monk'),
    url = 'mongodb://localhost:27017/memoryApp',
    db = monk(url),
    bodyParser = require('body-parser');

const server = global.server = express();

server.set('port', (process.env.PORT || 5000));
server.use(express.static(path.join(__dirname, 'public')));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));

// Establish db middleware for router
server.use(function(req, res, next){
    req.db = db;
    next();
});

//
// Register API middleware
// -----------------------------------------------------------------------------
server.use('/api/content', require('./api/content'));
server.use('/records', require('./api/records'));
server.use('/categories', require('./api/categories'));

//
// Register server-side rendering middleware
// -----------------------------------------------------------------------------
server.get('*', async (req, res, next) => {
  try {
    let statusCode = 200;
    const data = { title: '', description: '', css: '', body: '' };
    const css = [];
    const context = {
      onInsertCss: value => css.push(value),
      onSetTitle: value => data.title = value,
      onSetMeta: (key, value) => data[key] = value,
      onPageNotFound: () => statusCode = 404,
    };

    await Router.dispatch({ path: req.path, context }, (state, component) => {
      data.body = ReactDOM.renderToString(component);
      data.css = css.join('');
    });

    const html = ReactDOM.renderToStaticMarkup(<Html {...data} />);
    res.status(statusCode).send('<!doctype html>\n' + html);
  } catch (err) {
    next(err);
  }
});

//
// Launch the server
// -----------------------------------------------------------------------------

server.listen(server.get('port'), () => {
  /* eslint-disable no-console */
  console.log('The server is running at http://localhost:' + server.get('port'));
  if (process.send) {
    process.send('online');
  }
});
