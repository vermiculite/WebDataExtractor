const validMethods = ['GET', 'POST', 'PUT', 'DELETE', 'HEAD', 'OPTIONS'];
const Selector = require('./selector');

class Response {

    constructor(response) {
        this._response = response;
        this._selector = Selector(response.body);
    }

    get body() {
        return this._response.body;
    }

    jQuery() {
        return this._selector.jQuery();
    }

    xpath(selector) {
        return this._selector.xpath(selector);
    }
}

function setMethod(method) {
    let result = 'GET';
    return result;
}

module.exports = function(options) {
    return new Response(options);
}