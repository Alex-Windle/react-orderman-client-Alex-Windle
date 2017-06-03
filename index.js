/**
 * GENERAL NOTES
 * @author TalkRise <admin@talkrise.com>
 *
 * DO NOT MODIFY THIS CODE
 *
 * WE USE THIS CODE TO SERVE YOUR COMPILED APP
 *
 * YOU WILL NOT WRITE ANY CODE HERE. WRITE YOUR CODE IN THE APP/ DIRECTORY
 *
 *
 * For ease-of-use, this will get Heroku to serve your static files.
 * Normally, you'd compile your static assets and serve them over a CDN;
 * however, this approach works really well for our use case.
 */

const { Server } = require('node-static');
const file = new Server('./public');
require('http').createServer((req, res) => {
  req.addListener('end', () => {
    file.serve(req, res);
  }).resume();
}).listen(process.env.PORT || 3000);

