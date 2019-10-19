var fs                = require('fs');
var path              = require('path');
const https = require('https');
const request = require('request');

module.exports = function(app) {

  var Controller = {name: 'api'};

  Controller.getPlanet = (req, res) => {
      let planetBody;
      request('https://exoplanetarchive.ipac.caltech.edu/cgi-bin/nstedAPI/nph-nstedAPI?table=exoplanets&select=pl_hostname,ra,dec&order=dec&format=ascii', { json: true }, (err, res, body) => {
        if (err) { return console.log(err); }
        planetBody = body;
        });
        res.status(200).send({planetBody});
  }
  // });
  return Controller;

};
