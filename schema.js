const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql');

const greetings = {
  hello: {
    language: {
      en: 'hello',
      sp: 'hola',
      ua: 'привіт'
    }
  },
  hey: {
    language: {
      en: 'hey',
      sp: 'ey',
      ua: 'йоу'
    }
  }
};

const GreetingType = new GraphQLObjectType({
  name: 'Greeting',
  description: 'greeting',

  fields: () => ({
    phrase: {
      type: GraphQLString,
      // source object is passed from the entry point Query 
      resolve: (source) => {
        return source.phrase;
      }
    },
    language: {
      type: GraphQLString,
      resolve: (source) => {
        return source.lang;
      }
    },
    translation: {
      type: GraphQLString,
      resolve: (source) => {
        return greetings[source.phrase].language[source.lang];
      }
    }
  })
});

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'the entry point',

    fields: () => ({
      greeting: {
        type: GreetingType,
        args: {
          phrase: { type: GraphQLString },
          lang: { type: GraphQLString }
        },
        resolve: (source, args) => ({
          phrase: args.phrase, 
          lang: args.lang
        })
      },
    })
  })
});