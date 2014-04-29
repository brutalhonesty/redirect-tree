'use strict';

var validator = require('validator');
var request = require('request');

function _followSite(query, callback) {
  request({
    url: query,
    followRedirect: false,
    timeout: 15000,
    jar: false,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_9_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Safari/537.36'
    }
  }, function (error, resp, body) {
    if(error) {
      return callback(error);
    }
    if(resp.statusCode === 301) {
      _followSite(resp.headers.location, callback);
    } else {
      return callback(null, resp.headers.location || resp.request.uri.href);
    }
  });
}

exports.findSite = function(req, res) {
  var urlQuery = req.query.url;
  if(!validator.isURL(urlQuery)) {
    return res.json(400, {message: 'Invalid URL.'});
  }
  _followSite(urlQuery, function (error, site) {
    if(error) {
      console.log(error);
      return res.json(500, {message: 'Could not find site.'});
    }
    return res.json({site: site});
  });
};