const lib = require('./lib');

const schema = new lib.Schema([], {});
const server = new lib.Server({ schema });

server.start();
