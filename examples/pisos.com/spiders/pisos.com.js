"use strict";
let DataFetcher = require('..');
let url = require('url');

class Pisos extends DataFetcher {

    parse(err, response, body) {
        console.log(response.request.originalHost);
        console.log(response.request);
        let $ = cheerio.load(body);
        let link = $('div.enlacesMapa > a.izq').attr('href');
        console.log(link);
    }

}
let pisos = new Pisos({
    name: 'pisos.com',
    startUrls: ['http://www.pisos.com/alquiler_garajes/barcelona/']
});
pisos.start();