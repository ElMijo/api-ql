import  { Schema } from '../src';
import  { expect, assert } from 'chai';
import { GraphQLSchema } from 'graphql';

describe("Schema Test", () => {
    it("Instance Schema class not arguments", () => {
        expect(() => {const schema = new Schema();})
            .to.throw('Cannot destructure property')
        ;
    });
    it("Instance Schema class empty arguments", () => {
        const server = new Schema({});
        expect(server).to.be.instanceOf(Schema);
    });

    it("Instance Schema class empty arguments make", () => {
        const schema = new Schema({});
        expect(schema).to.be.instanceOf(Schema);
        expect(schema.make()).to.be.instanceOf(GraphQLSchema);
    });
});
