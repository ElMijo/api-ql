import  { Server } from '../src';
import  { expect, assert } from 'chai';
import supertest from 'supertest';

describe("Server Test", () => {
    it("Instance Server class empty arguments", () => {
        const server = new Server({});
        expect(server).to.be.instanceOf(Server);
    });

    // describe("Runing server...", () => {
    //     const server = new Server();
    //     beforeEach(function () { server.start(); });
    //     afterEach(function () { server.stop(); });
    //
    //     it('Page Not Found', (done) => {
    //         supertest(server.getApp())
    //             .get('/')
    //             .expect(404, done)
    //         ;
    //     });
    // });
});
