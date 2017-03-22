'use strict';

const winston = require('winston');

module.exports = function (app) {
  // Add a logger to our app object for convenience
  app.logger = winston;

  return function (error, req, res, next) {
    if (error) {

      const err_code = error.code ? error.code : '';
      const err_message = error.message;
      const err_name = error.name ? error.name : '';
      const err_data = error.data ? error.data : '';
      const req_url = req.url;

      const message = `${err_name ? `Name: ${err_name}; ` : ''}${err_code ? `Code: ${err_code}; ` : ''}Route: "${req_url}"; Message: ${err_message}; `;

      winston.error(message);

      if (err_data) {
        winston.error(err_data);
      }
    }

    next(error);
  };
};
