import { URL } from "url";
import http from "http";
import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "graphql-server-express";
import { makeExecutableSchema }  from "graphql-tools";
import { Schema } from "../schema";

export class Server {
    constructor({
        endpoint = "/graphql",
        graphiql = "/graphiql",
        schema
    }) {
        if (!(schema instanceof Schema)) {
            schema = new Schema({});
        }

        this.app = express();
        this.server = http.createServer(this.app);
        this.app.use(endpoint, bodyParser.json(), graphqlExpress({ schema: schema.make() }) );
        this.app.use(graphiql, graphiqlExpress({ endpointURL: endpoint }));
    }

    getApp() {
        return this.app;
    }
    start(port = 3000, host = "localhost") {
        const url = new URL(`${host}:${port}`);
        this.server.listen(port, host,() => {
            console.log(`🚀 Server ready at ${url}`);
        });
    }

    stop() {
        this.server.close(() => {
            console.log("🛑 The server was stopped");
        });
    }
}
