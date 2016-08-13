#!/usr/bin/env node
"use strict";
const repl = require('repl');
const Downloader = require('../lib/downloader');

let {context} = repl.start('scrapy> ');
context.fetch = function (url) {
    console.log(`fetch ${url}`);
    let downloader = Downloader();
    downloader.download(url, (response)=> {
        context.response = response;
    });
};

context.clear = function() {
    var lines = process.stdout.getWindowSize()[1];
    for(var i = 0; i < lines; i++) {
        console.log('\r\n');
    }
};