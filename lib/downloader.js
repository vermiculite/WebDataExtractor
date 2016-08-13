"use strict";
const request = require('request');
const Response = require('./response');

class Downloader {

    constructor(options) {

    }

    download(url, callback) {
        let r = request(url, (err, response, body)=> {
            callback(Response({
                err,
                request: r,
                response: Response(response),
                body
            }));
        });
    }

}

module.exports = function (options) {
    return new Downloader(options);
};
