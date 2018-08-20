import { makeExecutableSchema }  from "graphql-tools";

const defaultTypeDefs = `
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;

const defaultResolvers = { Query: { hello: () => "world" } };

export class Schema {
    constructor({ typeDefs = [], resolvers = {} }) {
        this.typeDefs = typeDefs ;
        this.resolvers = typeDefs;
    }

    make() {
        const hasSchema = !!this.typeDefs.length;
        return makeExecutableSchema({
            typeDefs: hasSchema ? this.typeDefs : [defaultTypeDefs],
            resolvers: hasSchema ? this.resolvers : defaultResolvers
        });
    }

    addTypeDef(typeDef) {
        if (typeof typeDef !== 'string') {
            throw new Error("[Schema::addTypeDef] typeDef should an String");
        }

        this.typeDefs.push(typeDef);
        return this;
    }

    addResolver(resolver) {
        if (!resolver instanceof Object) {
            throw new Error("[Schema::addResolver] resolver should an Object");
        }

        this.resolvers = {...this.resolvers, ...resolver};
        return this;
    }
}
