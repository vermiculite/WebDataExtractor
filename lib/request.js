"use strict";

class Request {

    constructor(options) {
        let {request, response, err, body} = options;
        this._request = request;
        this._response = response;
        this._err = err;
        this._body = body;
    }

    execute() {}

    get url() {return this._request.href}
    get callback() {return this._callback}


}

module.exports = function(options) {
    return new Request(options);
};