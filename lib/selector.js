"use strict";
const cheerio = require('cheerio');
var xpath = require('xpath');
var dom = require('xmldom').DOMParser;

class Selector {
    constructor(body) {
        this._body = body;
    }

    jQuery() {
        return cheerio.load(this._body);
    }

    xpath(selector) {
        try {
            var doc = new dom({
                /**
                 * locator is always need for error position info
                 */
                locator: {},
                /**
                 * you can override the errorHandler for xml parser
                 * @link http://www.saxproject.org/apidoc/org/xml/sax/ErrorHandler.html
                 */
                errorHandler: {
                    warning: function () {
                    }, error: function () {
                    }, fatalError: function () {
                    }
                }
                //only callback model
                //errorHandler:function(level,msg){console.log(level,msg)}
            }).parseFromString(this._body);
            return xpath.select(selector, doc);
        } catch (e) {
            console.warn(`Error processing selector "${selector}"`)
        }

    }
}


module.exports = function (body) {
    return new Selector(body);
}