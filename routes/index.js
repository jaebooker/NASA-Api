var fs = require('fs');
var path = require('path');
const https = require('https');
module.exports = function(app) {

	fs.readdirSync(__dirname).forEach(function(file) {

	  if (file !== "index.js" && path.extname(file) === '.js'){
      app.log.info('Loading route ' + app.chalk.yellow('→'), file);
	    require(path.join(__dirname,file))(app);
	  }

	});

  app.get('/data', function(req, res){
	  const request = require('request');

  request('https://api.nasa.gov/planetary/apod?api_key=eN0SFLCdnAy7x05mRIDg9FUqq9KboHqNSED5kj7S', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
    console.log(body.url);
    console.log(body.explanation);
  });
    res.sendStatus(200);
  });

};
