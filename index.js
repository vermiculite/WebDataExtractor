"use strict";


let request = require('request');

class DataFetcher {

    constructor(options) {
        Object.assign(this, options);
        validate.call(this);
    }

    parse() {
        throw new Error('You must implement this yourself...');
    }

    start() {
        if(this.startUrls) {
            this.startUrls.forEach((url)=> {
                fetch.call(this, url)
            })
        } else {
            throw new Error('Cannot start without start urls.');
        }
    }
}

function validate() {
    if(!this.name) {
        throw new Error('I must have a name...');
    }
}

function fetch(url) {
    request(url, (err, response, body)=> {
        this.parse(err, response, body);
    });
}

module.exports = DataFetcher;