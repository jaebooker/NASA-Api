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

  app.get('/exoplanet', function(req, res){
	  const request = require('request');

  request('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=ascii', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
	console.log(body);
    console.log(body.url);
    console.log(body.explanation);
  });
    res.sendStatus(200);
  });
  app.get('/air', function(req, res){
	  const request = require('request');

  request('https://airnow.zendesk.com/hc/en-us/articles/212303177-How-does-AirNow-make-the-Current-PM-Air-Quality-Index-AQI-maps-', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
	console.log(body)
    console.log(body.url);
    console.log(body.explanation);
  });
    res.sendStatus(200);
  });

  app.get('/globe', function(req, res){
	  const request = require('request');

  request('https://api.globe.gov/search/v1/measurement/protocol/measureddate/?protocols=aerosols&startdate=2010-01-01&enddate=2012-01-02&geojson=FALSE&sample=FALSE', { json: true }, (err, res, body) => {
    if (err) { return console.log(err); }
	console.log(body)
    console.log(body.url);
    console.log(body.explanation);
  });
    res.sendStatus(200);
  });

};
