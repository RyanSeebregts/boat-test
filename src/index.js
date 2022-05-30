import express from 'express';
const { env } = require('process')

let app = require('./server').default;

if (module.hot) {
  module.hot.accept('./server', function() {
    console.log('🔁  HMR Reloading `./server`...');
    try {
      app = require('./server').default;
    } catch (error) {
      console.error(error);
    }
  });
  console.info('✅  Server-side HMR Enabled!');
}

const getEnv = c => process.env[c];

export default express()
  .use((req, res) => app.handle(req, res))
  .listen(getEnv('PORT'), function(err) {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`> Started on port ${port}`);
  });
